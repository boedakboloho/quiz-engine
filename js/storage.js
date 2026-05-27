const db = new Dexie('BoedakBolohoDB');
db.version(1).stores({
  progress: 'id, questionId, status, lastReviewed, nextReview, wrongCount, correctCount, category',
  examHistory: 'id, date, score, totalQuestions, timeTaken',
  glossary: 'id, word, reading, meaning, category, dateAdded',
  settings: 'key',
  images: 'id, questionId, dataUrl, dateAdded',
  dailyLog: 'id, date, questionsAnswered, targetCompleted'
});

const STATUS = {
  NOT_ATTEMPTED: 'not_attempted',
  MASTERED: 'mastered',
  NEEDS_REVIEW: 'needs_review',
  WRONG: 'wrong'
};

const SM2_INTERVALS = [1, 3, 7, 14, 30, 60, 120];

const Storage = {
  async getProgress(questionId) {
    return await db.progress.get({ questionId: questionId }) || null;
  },
  async getAllProgress() {
    return await db.progress.toArray();
  },
  async updateProgress(questionId, isCorrect) {
    const existing = await db.progress.get({ questionId: questionId });
    const now = new Date();
    if (!existing) {
      return await db.progress.put({
        questionId: questionId,
        status: isCorrect ? STATUS.MASTERED : STATUS.WRONG,
        correctCount: isCorrect ? 1 : 0,
        wrongCount: isCorrect ? 0 : 1,
        lastReviewed: now.toISOString(),
        nextReview: isCorrect 
          ? new Date(now.getTime() + SM2_INTERVALS[0] * 24 * 60 * 60 * 1000).toISOString()
          : now.toISOString(),
        repetition: 0,
        easeFactor: 2.5,
        category: existing?.category || 'unknown'
      });
    } else {
      let newRepetition = existing.repetition || 0;
      let newEase = existing.easeFactor || 2.5;
      let newInterval = SM2_INTERVALS[0];
      if (isCorrect) {
        newRepetition++;
        newEase = Math.max(1.3, newEase + 0.1);
        newInterval = SM2_INTERVALS[Math.min(newRepetition, SM2_INTERVALS.length - 1)];
      } else {
        newRepetition = 0;
        newEase = Math.max(1.3, newEase - 0.2);
        newInterval = SM2_INTERVALS[0];
      }
      const nextReview = new Date(now.getTime() + newInterval * 24 * 60 * 60 * 1000);
      return await db.progress.put({
        questionId: questionId,
        status: isCorrect ? (newRepetition >= 2 ? STATUS.MASTERED : STATUS.NEEDS_REVIEW) : STATUS.WRONG,
        correctCount: (existing.correctCount || 0) + (isCorrect ? 1 : 0),
        wrongCount: (existing.wrongCount || 0) + (isCorrect ? 0 : 1),
        lastReviewed: now.toISOString(),
        nextReview: nextReview.toISOString(),
        repetition: newRepetition,
        easeFactor: newEase,
        category: existing.category || 'unknown'
      });
    }
  },
  async getDueReviews() {
    const now = new Date().toISOString();
    return await db.progress.where('nextReview').belowOrEqual(now).toArray();
  },
  async getProgressByCategory() {
    const all = await db.progress.toArray();
    const categories = {};
    all.forEach(p => {
      const cat = p.category || 'unknown';
      if (!categories[cat]) categories[cat] = { total: 0, mastered: 0 };
      categories[cat].total++;
      if (p.status === STATUS.MASTERED) categories[cat].mastered++;
    });
    return categories;
  },
  async getMasteredCount() {
    return await db.progress.where('status').equals(STATUS.MASTERED).count();
  },
  async saveExamResult(score, totalQuestions, timeTaken, categoryScores = {}) {
    return await db.examHistory.put({
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score: score,
      totalQuestions: totalQuestions,
      timeTaken: timeTaken,
      categoryScores: categoryScores
    });
  },
  async getExamHistory() {
    return await db.examHistory.orderBy('date').reverse().toArray();
  },
  async getLatestExamScore() {
    const history = await db.examHistory.orderBy('date').reverse().limit(5).toArray();
    if (history.length === 0) return null;
    const avg = history.reduce((sum, h) => sum + (h.score / h.totalQuestions * 100), 0) / history.length;
    return Math.round(avg);
  },
  async addGlossaryWord(word, reading, meaning, category = '') {
    const exists = await db.glossary.get({ word: word });
    if (exists) return exists.id;
    return await db.glossary.put({
      word: word,
      reading: reading,
      meaning: meaning,
      category: category,
      dateAdded: new Date().toISOString()
    });
  },
  async getAllGlossary() {
    return await db.glossary.orderBy('dateAdded').reverse().toArray();
  },
  async searchGlossary(query) {
    const all = await db.glossary.toArray();
    const q = query.toLowerCase();
    return all.filter(item => 
      item.word.toLowerCase().includes(q) ||
      item.reading.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q)
    );
  },
  async deleteGlossaryWord(id) {
    return await db.glossary.delete(id);
  },
  async getGlossaryCount() {
    return await db.glossary.count();
  },
  async getSetting(key, defaultValue = null) {
    const setting = await db.settings.get({ key: key });
    return setting ? setting.value : defaultValue;
  },
  async setSetting(key, value) {
    return await db.settings.put({ key: key, value: value });
  },
  async getAllSettings() {
    const all = await db.settings.toArray();
    const settings = {};
    all.forEach(s => { settings[s.key] = s.value; });
    return settings;
  },
  async saveImage(questionId, dataUrl) {
    return await db.images.put({
      questionId: questionId,
      dataUrl: dataUrl,
      dateAdded: new Date().toISOString()
    });
  },
  async getImage(questionId) {
    return await db.images.get({ questionId: questionId });
  },
  async getAllImages() {
    return await db.images.toArray();
  },
  async deleteImage(questionId) {
    return await db.images.delete(questionId);
  },
  async logDailyActivity(questionsAnswered) {
    const today = new Date().toISOString().split('T')[0];
    const existing = await db.dailyLog.get({ date: today });
    if (existing) {
      return await db.dailyLog.put({ ...existing, questionsAnswered: (existing.questionsAnswered || 0) + questionsAnswered });
    } else {
      return await db.dailyLog.put({ date: today, questionsAnswered: questionsAnswered, targetCompleted: false });
    }
  },
  async getTodayLog() {
    const today = new Date().toISOString().split('T')[0];
    return await db.dailyLog.get({ date: today }) || { date: today, questionsAnswered: 0, targetCompleted: false };
  },
  async getStreak() {
    const logs = await db.dailyLog.orderBy('date').reverse().toArray();
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < logs.length; i++) {
      const logDate = new Date(logs[i].date);
      const expectedDate = new Date(today);
      expectedDate.setDate(expectedDate.getDate() - i);
      if (logDate.toISOString().split('T')[0] === expectedDate.toISOString().split('T')[0]) streak++;
      else break;
    }
    return streak;
  },
  async setTargetCompleted(completed) {
    const today = new Date().toISOString().split('T')[0];
    const existing = await db.dailyLog.get({ date: today });
    if (existing) {
      return await db.dailyLog.put({ ...existing, targetCompleted: completed });
    } else {
      return await db.dailyLog.put({ date: today, questionsAnswered: 0, targetCompleted: completed });
    }
  },
  async resetAllProgress() {
    await db.progress.clear();
    await db.examHistory.clear();
    await db.dailyLog.clear();
  },
  async exportData() {
    const data = {
      progress: await db.progress.toArray(),
      examHistory: await db.examHistory.toArray(),
      glossary: await db.glossary.toArray(),
      settings: await db.settings.toArray(),
      dailyLog: await db.dailyLog.toArray(),
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    };
    return JSON.stringify(data, null, 2);
  },
  async importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.progress) await db.progress.bulkPut(data.progress);
      if (data.examHistory) await db.examHistory.bulkPut(data.examHistory);
      if (data.glossary) await db.glossary.bulkPut(data.glossary);
      if (data.settings) await db.settings.bulkPut(data.settings);
      if (data.dailyLog) await db.dailyLog.bulkPut(data.dailyLog);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
};
console.log('📦 Storage module loaded');