/* ============================================ */
/* FILE: js/app.js (FINAL - ALL FEATURES)       */
/* DESKRIPSI: Logic Quiz Engine - Full Power    */
/* SIMPAN DI: quiz-engine/js/                   */
/* ============================================ */

const App = {
  currentView: 'dashboard',
  currentMode: null,
  currentQuestions: [],
  currentIndex: 0,
  examTimer: null,
  examTimeLeft: 3600,
  examAnswers: [],
  examStartTime: null,
  dailyTarget: 20,
  targetScore: 70,
  practiceFilter: 'all',
  highlightEnabled: true,
};

// ========== INISIALISASI ==========
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 BOEDAKBOLOHO App initializing...');
  await loadSettings();
  const furiganaReady = await FuriganaEngine.init();
  if (furiganaReady) {
    await FuriganaEngine.loadMode();
    await HighlightEngine.loadSetting();
    App.highlightEnabled = HighlightEngine.isEnabled;
  }
  await renderDashboard();
  setupGlobalEvents();
  console.log('✅ App ready (Highlight + Tech Flashcard + Translations)');
});

async function loadSettings() {
  const furiMode = await Storage.getSetting('furiganaMode', 'ruby');
  FuriganaEngine.setMode(furiMode);
  const darkMode = await Storage.getSetting('darkMode', false);
  if (darkMode) document.body.setAttribute('data-theme', 'dark');
  App.dailyTarget = await Storage.getSetting('dailyTarget', 20);
  App.targetScore = await Storage.getSetting('targetScore', 70);
  App.highlightEnabled = await Storage.getSetting('highlightEnabled', true);
  HighlightEngine.isEnabled = App.highlightEnabled;
}

function setupGlobalEvents() {
  document.addEventListener('keydown', (e) => {
    if (App.currentMode === 'exam') return;
    if (e.key === 'ArrowRight' && App.currentIndex < App.currentQuestions.length - 1) nextQuestion();
    else if (e.key === 'ArrowLeft' && App.currentIndex > 0) prevQuestion();
  });
}

// ========== NAVIGASI UTAMA ==========
function navigateTo(viewName) {
  App.currentView = viewName;
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-view="${viewName}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  switch(viewName) {
    case 'dashboard': renderDashboard(); break;
    case 'practice': initPractice(); break;
    case 'exam': initExam(); break;
    case 'review': initReview(); break;
    case 'glossary': renderGlossary(); break;
    case 'settings': renderSettings(); break;
  }
}

// ========== DASHBOARD ==========
async function renderDashboard() {
  const view = document.getElementById('view-dashboard');
  if (!view) return;

  const mastered = await Storage.getMasteredCount();
  const streak = await Storage.getStreak();
  const todayLog = await Storage.getTodayLog();
  const latestScore = await Storage.getLatestExamScore();
  const progressByCat = await Storage.getProgressByCategory();
  const totalQuestions = (typeof QUESTIONS !== 'undefined') ? QUESTIONS.length : 78;
  const percentage = Math.round((mastered / totalQuestions) * 100);
  const dueReviewCount = (await Storage.getDueReviews()).length;
  const priority = Object.entries(progressByCat)
    .map(([cat, data]) => ({ cat, percentage: data.total > 0 ? (data.mastered / data.total) * 100 : 0 }))
    .sort((a, b) => a.percentage - b.percentage);

  view.innerHTML = `
    <div class="mb-6">
      <h2 class="text-2xl md:text-3xl font-extrabold text-slate-800">こんにちは！👋</h2>
      <p class="text-slate-500 mt-1">Lanjutkan belajarmu. Target hari ini menunggu!</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
      <div class="stat-card"><div class="flex items-center gap-2 mb-2"><span class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 text-sm"><i class="fas fa-check-circle"></i></span><span class="text-xs text-slate-500 font-medium">Dikuasai</span></div><p class="text-2xl font-extrabold text-slate-800">${mastered}</p><p class="text-xs text-slate-400">dari ${totalQuestions} soal</p><div class="w-full bg-slate-200 rounded-full h-1.5 mt-3"><div class="bg-indigo-500 h-1.5 rounded-full" style="width:${percentage}%" id="progress-bar-small"></div></div></div>
      <div class="stat-card"><div class="flex items-center gap-2 mb-2"><span class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 text-sm"><i class="fas fa-fire"></i></span><span class="text-xs text-slate-500 font-medium">Streak</span></div><p class="text-2xl font-extrabold text-slate-800">${streak}</p><p class="text-xs text-slate-400">hari</p></div>
      <div class="stat-card"><div class="flex items-center gap-2 mb-2"><span class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 text-sm"><i class="fas fa-bullseye"></i></span><span class="text-xs text-slate-500 font-medium">Target</span></div><p class="text-2xl font-extrabold text-slate-800">${todayLog.questionsAnswered||0}/${App.dailyTarget}</p><p class="text-xs text-slate-400">soal</p></div>
      <div class="stat-card"><div class="flex items-center gap-2 mb-2"><span class="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500 text-sm"><i class="fas fa-trophy"></i></span><span class="text-xs text-slate-500 font-medium">Ujian</span></div><p class="text-2xl font-extrabold text-slate-800">${latestScore||'--'}%</p><p class="text-xs text-slate-400">rata-rata</p></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
      <div class="md:col-span-2 main-card"><h3 class="font-bold text-slate-700 mb-4"><i class="fas fa-radar text-indigo-500"></i> Radar Kategori</h3><canvas id="radar-chart" height="280"></canvas></div>
      <div class="main-card"><h3 class="font-bold text-slate-700 mb-4"><i class="fas fa-exclamation-triangle text-amber-500"></i> Prioritas</h3><div id="priority-list" class="space-y-2">${priority.slice(0,3).map(p => `<div class="flex justify-between"><span>${p.cat}</span><span class="font-bold ${p.percentage<50?'text-red-600':p.percentage<80?'text-amber-600':'text-emerald-600'}">${Math.round(p.percentage)}%</span></div>`).join('')}</div><button class="btn-primary w-full mt-4 text-sm" onclick="navigateTo('practice')">Mulai Latihan <i class="fas fa-arrow-right"></i></button></div>
    </div>
    <div class="main-card mb-6">
      <h3 class="font-bold text-slate-700 mb-4"><i class="fas fa-lightbulb text-amber-500"></i> Rekomendasi Hari Ini</h3>
      <div class="space-y-2 text-sm">
        <p>📚 <strong>${App.dailyTarget - (todayLog.questionsAnswered || 0)}</strong> soal lagi untuk capai target harian.</p>
        <p>🔄 <strong>${dueReviewCount}</strong> soal perlu diulang (Spaced Repetition).</p>
        <p>🎯 Kategori terlemah: <strong>${priority[0]?.cat || 'Belum ada data'}</strong> (${priority[0] ? Math.round(priority[0].percentage)+'%' : ''})</p>
        <p>💡 Target skor ujian: <strong>${App.targetScore}%</strong> ${latestScore && latestScore >= App.targetScore ? '✅ Tercapai!' : '⭐ Kejar!'}</p>
      </div>
      <button class="btn-primary w-full mt-4 text-sm" onclick="navigateTo('practice'); setPracticeMode('adaptif')">🧠 Belajar Adaptif</button>
    </div>
    <div class="main-card">
      <h3 class="font-bold text-slate-700 mb-4">📊 Aktivitas 7 Hari Terakhir</h3>
      <canvas id="weekly-chart" height="200"></canvas>
    </div>
  `;

  renderRadarChart(progressByCat);
  const weeklyData = await getWeeklyActivity();
  renderWeeklyChart(weeklyData);
}

async function getWeeklyActivity() {
  const logs = await db.dailyLog.orderBy('date').reverse().limit(7).toArray();
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const log = logs.find(l => l.date === dateStr);
    days.push({ date: dateStr, count: log ? log.questionsAnswered || 0 : 0 });
  }
  return days;
}

function renderWeeklyChart(data) {
  const canvas = document.getElementById('weekly-chart');
  if (!canvas) return;
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: data.map(d => d.date.slice(5)),
      datasets: [{
        label: 'Soal Dijawab',
        data: data.map(d => d.count),
        backgroundColor: '#6366f1',
        borderRadius: 5,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { stepSize: 10 } } }
    }
  });
}

function renderRadarChart(progressByCat) {
  const canvas = document.getElementById('radar-chart');
  if (!canvas) return;
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();
  const labels = Object.keys(progressByCat);
  const data = labels.map(cat => {
    const { mastered, total } = progressByCat[cat];
    return total > 0 ? Math.round((mastered / total) * 100) : 0;
  });
  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: 'rgba(99,102,241,0.15)',
        borderColor: 'rgba(99,102,241,0.8)',
        borderWidth: 2,
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20, backdropColor: 'transparent', font: { size: 10 } },
          pointLabels: { font: { size: 11, family: "'Noto Sans JP', sans-serif" } },
          grid: { color: 'rgba(203,213,225,0.4)' }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

// ========== PRACTICE MODE ==========
async function initPractice() {
  App.currentMode = 'practice';
  App.currentQuestions = QUESTIONS || [];
  App.currentIndex = 0;
  App.practiceFilter = 'all';

  const view = document.getElementById('view-practice');
  view.innerHTML = `
    <div class="mb-4 flex flex-wrap gap-2" id="practice-toolbar">
      <button class="btn btn-sm btn-primary" onclick="setPracticeMode('all')">📚 Semua</button>
      <button class="btn btn-sm btn-secondary" onclick="setPracticeMode('adaptif')">🧠 Adaptif</button>
      <button class="btn btn-sm btn-secondary" onclick="setPracticeMode('wrong')">❌ Salah</button>
      <button class="btn btn-sm btn-secondary" onclick="setPracticeMode('bookmarked')">🔖 Bookmark</button>
      <button class="btn btn-sm btn-secondary" onclick="setPracticeMode('mini')">⚡ Quick 10</button>
      <button class="btn btn-sm btn-secondary" onclick="setPracticeMode('flashcard')">🗂️ Flashcard Soal</button>
      <button class="btn btn-sm btn-secondary" onclick="setPracticeMode('flashcard-tech')">🃏 Kosakata</button>
    </div>
    <div class="mb-4 flex flex-wrap gap-2" id="category-filters"></div>
    <div id="practice-question-container"></div>
    <div class="flex justify-between items-center mt-6">
      <button class="btn btn-secondary" onclick="prevQuestion()" id="btn-prev" disabled><i class="fas fa-chevron-left"></i> Sebelumnya</button>
      <span class="text-sm text-slate-500 self-center" id="question-counter"></span>
      <button class="btn btn-primary" onclick="nextQuestion()" id="btn-next">Selanjutnya <i class="fas fa-chevron-right"></i></button>
    </div>
  `;

  const categories = [...new Set(QUESTIONS.map(q => q.category))];
  const filterContainer = document.getElementById('category-filters');
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-sm btn-ghost';
    btn.textContent = cat;
    btn.onclick = () => setPracticeMode(cat);
    filterContainer.appendChild(btn);
  });

  setPracticeMode('all');
}

async function setPracticeMode(mode) {
  App.practiceFilter = mode;
  let filtered = [];

  if (mode === 'adaptif') {
    const allProgress = await Storage.getAllProgress();
    const wrongOrReviewIds = allProgress.filter(p => p.status === 'wrong' || p.status === 'needs_review').map(p => p.questionId);
    const neverAttemptedIds = QUESTIONS.filter(q => !allProgress.some(p => p.questionId === q.id)).map(q => q.id);
    const combined = [...new Set([...wrongOrReviewIds, ...neverAttemptedIds])];
    filtered = QUESTIONS.filter(q => combined.includes(q.id));
    if (filtered.length === 0) filtered = QUESTIONS;
  } else if (mode === 'wrong') {
    const allProgress = await Storage.getAllProgress();
    const wrongIds = allProgress.filter(p => p.status === 'wrong').map(p => p.questionId);
    filtered = QUESTIONS.filter(q => wrongIds.includes(q.id));
  } else if (mode === 'bookmarked') {
    const bookmarks = await Storage.getSetting('bookmarkedQuestions', []);
    filtered = QUESTIONS.filter(q => bookmarks.includes(q.id));
  } else if (mode === 'mini') {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    filtered = shuffled.slice(0, 10);
  } else if (mode === 'flashcard') {
    filtered = QUESTIONS;
  } else if (mode === 'flashcard-tech') {
    App.currentQuestions = TECH_TERMS.map((term, index) => ({
      id: 'tech-' + index,
      questionJP: term.kanji,
      options: [],
      answer: term.reading + ' — ' + term.meaning,
      category: term.category,
      hack: {
        corePoint: term.meaning,
        keywords: [term.kanji, term.reading],
        trap: '',
        mnemonic: '',
        whyOthersWrong: {}
      }
    }));
    App.currentIndex = 0;
    renderFlashcard();
    return;
  } else if (QUESTIONS.some(q => q.category === mode)) {
    filtered = QUESTIONS.filter(q => q.category === mode);
  } else {
    filtered = QUESTIONS;
  }

  App.currentQuestions = filtered;
  App.currentIndex = 0;
  mode === 'flashcard' ? renderFlashcard() : renderPracticeQuestion();
}

// ========== FLASHCARD (Soal & Kosakata) ==========
function renderFlashcard() {
  const container = document.getElementById('practice-question-container');
  if (!container || App.currentQuestions.length === 0) {
    container.innerHTML = '<p class="text-slate-500">Tidak ada soal.</p>';
    return;
  }
  const q = App.currentQuestions[App.currentIndex];
  const isTech = App.practiceFilter === 'flashcard-tech';
  container.innerHTML = `
    <div class="question-card text-center animate-fade-in-up" style="min-height:300px;">
      <div class="text-sm text-slate-400 mb-4">${App.currentIndex+1}/${App.currentQuestions.length}</div>
      <div class="flashcard-inner" onclick="flipFlashcard()">
        <div class="flashcard-front">
          <p class="text-2xl font-bold japanese-text font-jp" data-original="${q.questionJP}">${q.questionJP}</p>
          ${!isTech && q.options ? `<p class="mt-4 text-lg text-slate-600">${q.options.map(o=>o.label+'. '+o.text).join(' | ')}</p>` : ''}
        </div>
        <div class="flashcard-back" style="display:none;">
          <p class="text-xl font-bold text-indigo-600 mb-4">${isTech ? 'Jawaban' : 'Jawaban: ' + q.answer}</p>
          ${isTech ? `<p class="text-lg text-slate-700">${q.answer}</p>` : ''}
          <div class="text-left text-sm mt-4">
            <p><strong>💡 Inti:</strong> ${q.hack?.corePoint || '-'}</p>
            <p><strong>⚠️ Jebakan:</strong> ${q.hack?.trap || '-'}</p>
            <p><strong>🧠 Hafalan:</strong> ${q.hack?.mnemonic || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  FuriganaEngine.process(container);
  if (!isTech && App.highlightEnabled) HighlightEngine.process(container);
  document.getElementById('btn-prev').disabled = App.currentIndex === 0;
  document.getElementById('btn-next').disabled = App.currentIndex === App.currentQuestions.length - 1;
  document.getElementById('question-counter').textContent = `${App.currentIndex+1}/${App.currentQuestions.length}`;
}

function flipFlashcard() {
  const front = document.querySelector('.flashcard-front');
  const back = document.querySelector('.flashcard-back');
  if (front.style.display === 'none') {
    front.style.display = 'block';
    back.style.display = 'none';
  } else {
    front.style.display = 'none';
    back.style.display = 'block';
  }
}

// ========== RENDER PRACTICE QUESTION (DENGAN TERJEMAHAN + HIGHLIGHT) ==========
function renderPracticeQuestion() {
  const container = document.getElementById('practice-question-container');
  if (!container || App.currentQuestions.length === 0) {
    container.innerHTML = '<p class="text-slate-500">Tidak ada soal.</p>';
    return;
  }
  const q = App.currentQuestions[App.currentIndex];
  const hasImage = q.image || null;
  const trans = TRANSLATIONS ? (TRANSLATIONS[q.id] || {}) : {};
  const optTrans = trans.options || {};

  container.innerHTML = `
    <div class="question-card animate-fade-in-up">
      ${hasImage ? `<div class="image-placeholder mb-4" onclick="uploadImage('${q.id}')"><img src="${hasImage}" class="max-w-full rounded-lg"></div>` : (q.hasImage ? `<div class="image-placeholder mb-4" onclick="uploadImage('${q.id}')" id="img-placeholder-${q.id}"><i class="fas fa-image text-3xl text-slate-300"></i><span class="text-sm text-slate-400">Upload gambar soal</span></div>` : '')}
      <p class="text-lg font-medium text-slate-800 leading-relaxed japanese-text font-jp" data-original="${q.questionJP}">${q.questionJP}</p>
      <div class="mt-6 space-y-3">
        ${q.options.map((opt, idx) => `
          <button class="option-btn" onclick="selectOption(${idx})" id="opt-${idx}">
            <span class="option-label">${opt.label}</span>
            <span class="japanese-text" data-original="${opt.text.replace(/"/g, '&quot;')}">${opt.text}</span>
            ${optTrans[opt.label] ? `<span class="text-xs text-slate-400 ml-2">(${optTrans[opt.label]})</span>` : ''}
          </button>
        `).join('')}
      </div>
      <div class="mt-4 flex flex-wrap gap-2">
        <button class="btn btn-sm btn-ghost" onclick="toggleHack('${q.id}')"><i class="fas fa-lightbulb text-amber-500"></i> Hack</button>
        <button class="btn btn-sm btn-ghost" onclick="checkAnswer()"><i class="fas fa-check-circle text-emerald-500"></i> Periksa</button>
        <button class="btn btn-sm btn-ghost" onclick="toggleBookmark('${q.id}')" id="bookmark-btn-${q.id}"><i class="far fa-bookmark"></i></button>
        <span id="feedback-${q.id}" class="text-sm font-medium ml-2"></span>
      </div>
      <div id="hack-${q.id}" class="hack-panel hidden mt-3">
        <p class="section-title">🇮🇩 Terjemahan</p>
        <p class="section-content">${trans.question || 'Belum tersedia'}</p>
        <p class="section-title">🔑 キーワード</p>
        <p class="section-content font-jp japanese-text" data-original="${(q.hack?.keywords || []).join(', ')}">${q.hack?.keywords?.join(', ') || '-'}</p>
        <p class="section-title">💡 核心 (Inti)</p>
        <p class="section-content">${q.hack?.corePoint || '-'}</p>
        <p class="section-title">⚠️ ひっかけ</p>
        <p class="section-content">${q.hack?.trap || '-'}</p>
        <p class="section-title">🧠 暗記</p>
        <p class="section-content">${q.hack?.mnemonic || '-'}</p>
        <p class="section-title">❌ Kenapa Lain Salah</p>
        <div class="section-content">${renderWhyOthersWrong(q)}</div>
        <p class="section-title">📊 Statistik Kamu</p>
        <div class="section-content" id="stats-${q.id}">Memuat...</div>
        <p class="section-title">📝 Catatan Pribadi</p>
        <textarea id="notes-${q.id}" class="w-full p-2 border rounded text-sm" placeholder="Tulis catatanmu..."></textarea>
        <button class="btn btn-sm btn-secondary mt-1" onclick="saveNote('${q.id}')"><i class="fas fa-save"></i> Simpan Catatan</button>
      </div>
    </div>
  `;

  FuriganaEngine.process(container);
  if (App.highlightEnabled) {
    setTimeout(() => HighlightEngine.process(container), 50);
  }
  loadQuestionStats(q.id);
  loadNote(q.id);
  updateBookmarkIcon(q.id);

  const counterEl = document.getElementById('question-counter');
  if (counterEl) {
    counterEl.innerHTML = `
      <span class="text-slate-500">${App.currentIndex + 1}/${App.currentQuestions.length}</span>
      <input type="number" id="question-jumper-input" min="1" max="${App.currentQuestions.length}" value="${App.currentIndex + 1}"
             onkeydown="if(event.key==='Enter')jumpToQuestion()"
             class="ml-2 w-16 px-2 py-1 text-sm border border-slate-300 rounded-lg text-center" title="Lompat">
      <button onclick="jumpToQuestion()" class="btn btn-sm btn-ghost ml-1"><i class="fas fa-arrow-right"></i></button>
    `;
  }

  document.getElementById('btn-prev').disabled = App.currentIndex === 0;
  document.getElementById('btn-next').disabled = App.currentIndex === App.currentQuestions.length - 1;
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected', 'correct', 'incorrect'));
  const saved = App.examAnswers.find(a => a.questionId === q.id);
  if (saved) document.getElementById(`opt-${saved.selectedIndex}`)?.classList.add('selected');
}

// ========== FUNGSI PENDUKUNG ==========
async function loadQuestionStats(questionId) {
  const stats = await Storage.getProgress(questionId);
  const el = document.getElementById(`stats-${questionId}`);
  if (el && stats) {
    el.innerHTML = `✅ ${stats.correctCount || 0} benar | ❌ ${stats.wrongCount || 0} salah | Status: ${stats.status === 'mastered' ? '⭐ Dikuasai' : '📘 Belum'}`;
  } else if (el) {
    el.innerHTML = 'Belum ada data.';
  }
}

async function loadNote(questionId) {
  const note = await Storage.getSetting(`note_${questionId}`, '');
  const textarea = document.getElementById(`notes-${questionId}`);
  if (textarea) textarea.value = note;
}

async function saveNote(questionId) {
  const textarea = document.getElementById(`notes-${questionId}`);
  if (textarea) {
    await Storage.setSetting(`note_${questionId}`, textarea.value);
    alert('Catatan tersimpan!');
  }
}

async function toggleBookmark(questionId) {
  let bookmarks = await Storage.getSetting('bookmarkedQuestions', []);
  if (bookmarks.includes(questionId)) {
    bookmarks = bookmarks.filter(id => id !== questionId);
  } else {
    bookmarks.push(questionId);
  }
  await Storage.setSetting('bookmarkedQuestions', bookmarks);
  updateBookmarkIcon(questionId);
}

function updateBookmarkIcon(questionId) {
  Storage.getSetting('bookmarkedQuestions', []).then(bookmarks => {
    const btn = document.getElementById(`bookmark-btn-${questionId}`);
    if (btn) {
      btn.innerHTML = bookmarks.includes(questionId) 
        ? '<i class="fas fa-bookmark text-amber-500"></i>' 
        : '<i class="far fa-bookmark"></i>';
    }
  });
}

function selectOption(index) {
  if (App.currentMode !== 'practice') return;
  const q = App.currentQuestions[App.currentIndex];
  document.querySelectorAll('.option-btn').forEach((btn, i) => btn.classList.toggle('selected', i === index));
  const existing = App.examAnswers.findIndex(a => a.questionId === q.id);
  if (existing >= 0) App.examAnswers[existing].selectedIndex = index;
  else App.examAnswers.push({ questionId: q.id, selectedIndex: index });
}

function checkAnswer() {
  const q = App.currentQuestions[App.currentIndex];
  const selected = App.examAnswers.find(a => a.questionId === q.id);
  if (!selected) { alert('Pilih jawaban dulu!'); return; }
  const isCorrect = q.options[selected.selectedIndex].label === q.answer;
  const feedback = document.getElementById(`feedback-${q.id}`);
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.remove('selected', 'correct', 'incorrect');
    if (q.options[i].label === q.answer) btn.classList.add('correct');
    else if (i === selected.selectedIndex && !isCorrect) btn.classList.add('incorrect');
  });
  feedback.textContent = isCorrect ? '✅ Benar!' : '❌ Salah';
  feedback.className = `text-sm font-medium ml-2 ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`;
  Storage.updateProgress(q.id, isCorrect);
  Storage.logDailyActivity(1);
  loadQuestionStats(q.id);
}

function toggleHack(id) { document.getElementById(`hack-${id}`)?.classList.toggle('hidden'); }

function renderWhyOthersWrong(q) {
  if (!q.hack?.whyOthersWrong) return '-';
  return Object.entries(q.hack.whyOthersWrong)
    .map(([opt, reason]) => `<p class="text-xs text-slate-500 mt-1">${opt}: ${reason}</p>`).join('');
}

function prevQuestion() {
  if (App.currentIndex > 0) {
    App.currentIndex--;
    App.practiceFilter === 'flashcard' || App.practiceFilter === 'flashcard-tech' ? renderFlashcard() : renderPracticeQuestion();
    window.scrollTo({top:0, behavior:'smooth'});
  }
}
function nextQuestion() {
  if (App.currentIndex < App.currentQuestions.length - 1) {
    App.currentIndex++;
    App.practiceFilter === 'flashcard' || App.practiceFilter === 'flashcard-tech' ? renderFlashcard() : renderPracticeQuestion();
    window.scrollTo({top:0, behavior:'smooth'});
  }
}

// ========== JUMPER ==========
function jumpToQuestion() {
  const input = document.getElementById('question-jumper-input');
  if (!input) return;
  const target = parseInt(input.value);
  if (isNaN(target) || target < 1 || target > App.currentQuestions.length) {
    alert(`Masukkan nomor 1 sampai ${App.currentQuestions.length}`);
    return;
  }
  App.currentIndex = target - 1;
  if (App.currentMode === 'practice') {
    if (App.practiceFilter === 'flashcard' || App.practiceFilter === 'flashcard-tech') renderFlashcard();
    else renderPracticeQuestion();
  }
  else if (App.currentMode === 'exam') renderExamQuestion();
  else if (App.currentMode === 'review') renderReviewQuestion();
  window.scrollTo({top:0, behavior:'smooth'});
}

// ========== EXAM MODE ==========
function initExam() {
  App.currentMode = 'exam';
  App.examAnswers = [];
  App.examStartTime = Date.now();
  startExamSession(40);
}

function startExamSession(total) {
  const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
  App.currentQuestions = shuffled.slice(0, total);
  App.currentIndex = 0;
  App.examTimeLeft = total * 90;
  const view = document.getElementById('view-exam');
  view.innerHTML = `
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold">⏱️ Ujian</h2>
      <div class="flex items-center gap-3">
        <select id="exam-size" onchange="changeExamSize(this.value)" class="text-sm">
          <option value="10">10 Soal</option>
          <option value="20">20 Soal</option>
          <option value="30">30 Soal</option>
          <option value="40" selected>40 Soal</option>
        </select>
        <span class="text-lg font-mono font-bold text-slate-700" id="exam-timer">${String(Math.floor(App.examTimeLeft/60)).padStart(2,'0')}:${String(App.examTimeLeft%60).padStart(2,'0')}</span>
        <button class="btn btn-danger btn-sm" onclick="submitExam()">Selesai</button>
      </div>
    </div>
    <div id="exam-question-container"></div>
    <div class="flex justify-between items-center mt-6">
      <button class="btn btn-secondary" onclick="prevExamQuestion()" id="exam-btn-prev" disabled><i class="fas fa-chevron-left"></i></button>
      <span class="text-sm text-slate-500" id="exam-counter"></span>
      <button class="btn btn-primary" onclick="nextExamQuestion()" id="exam-btn-next"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;
  clearInterval(App.examTimer);
  startExamTimer();
  renderExamQuestion();
}

function changeExamSize(size) { clearInterval(App.examTimer); startExamSession(parseInt(size)); }
function startExamTimer() {
  App.examTimer = setInterval(() => {
    App.examTimeLeft--;
    const mins = Math.floor(App.examTimeLeft/60), secs = App.examTimeLeft%60;
    document.getElementById('exam-timer').textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    if (App.examTimeLeft <= 0) submitExam();
  }, 1000);
}

function renderExamQuestion() {
  const container = document.getElementById('exam-question-container');
  if (!container || App.currentQuestions.length === 0) return;
  const q = App.currentQuestions[App.currentIndex];
  container.innerHTML = `
    <div class="question-card">
      ${q.image ? `<img src="${q.image}" class="max-w-full rounded-lg mb-4">` : ''}
      <p class="text-lg font-medium text-slate-800 leading-relaxed japanese-text font-jp" data-original="${q.questionJP}">${q.questionJP}</p>
      <div class="mt-6 space-y-3">
        ${q.options.map((opt, idx) => `
          <button class="option-btn" onclick="selectExamOption(${idx})" id="exam-opt-${idx}">
            <span class="option-label">${opt.label}</span>
            <span class="japanese-text" data-original="${opt.text.replace(/"/g, '&quot;')}">${opt.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  FuriganaEngine.process(container, 'none');
  if (App.highlightEnabled) setTimeout(() => HighlightEngine.process(container), 50);
  const examCounter = document.getElementById('exam-counter');
  if (examCounter) examCounter.innerHTML = `
    <span>${App.currentIndex+1}/${App.currentQuestions.length}</span>
    <input type="number" id="question-jumper-input" min="1" max="${App.currentQuestions.length}" value="${App.currentIndex+1}"
           onkeydown="if(event.key==='Enter')jumpToQuestion()" class="ml-2 w-16 px-2 py-1 text-sm border border-slate-300 rounded-lg text-center">
    <button onclick="jumpToQuestion()" class="btn btn-sm btn-ghost ml-1"><i class="fas fa-arrow-right"></i></button>`;
  document.getElementById('exam-btn-prev').disabled = App.currentIndex === 0;
  document.getElementById('exam-btn-next').disabled = App.currentIndex === App.currentQuestions.length - 1;
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  const saved = App.examAnswers.find(a => a.questionId === q.id);
  if (saved) document.getElementById(`exam-opt-${saved.selectedIndex}`)?.classList.add('selected');
}

function selectExamOption(index) {
  const q = App.currentQuestions[App.currentIndex];
  document.querySelectorAll('.option-btn').forEach((btn, i) => btn.classList.toggle('selected', i === index));
  const existing = App.examAnswers.findIndex(a => a.questionId === q.id);
  if (existing >= 0) App.examAnswers[existing].selectedIndex = index;
  else App.examAnswers.push({ questionId: q.id, selectedIndex: index });
}
function prevExamQuestion() { if (App.currentIndex > 0) { App.currentIndex--; renderExamQuestion(); } }
function nextExamQuestion() { if (App.currentIndex < App.currentQuestions.length - 1) { App.currentIndex++; renderExamQuestion(); } }

function submitExam() {
  clearInterval(App.examTimer);
  const timeTaken = Math.round((Date.now() - App.examStartTime) / 1000);
  let score = 0;
  App.currentQuestions.forEach(q => {
    const answer = App.examAnswers.find(a => a.questionId === q.id);
    if (answer && q.options[answer.selectedIndex]?.label === q.answer) { score++; Storage.updateProgress(q.id, true); }
  });
  Storage.saveExamResult(score, App.currentQuestions.length, timeTaken);
  Storage.logDailyActivity(App.currentQuestions.length);
  const percentage = Math.round((score / App.currentQuestions.length) * 100);
  document.getElementById('view-exam').innerHTML = `
    <div class="main-card text-center animate-fade-in-up">
      <div class="text-6xl mb-4">${percentage >= App.targetScore ? '🎉' : '📚'}</div>
      <h2 class="text-2xl font-bold mb-2">Ujian Selesai!</h2>
      <p class="text-5xl font-extrabold ${percentage >= App.targetScore ? 'text-emerald-600' : 'text-rose-600'} my-4">${score}/${App.currentQuestions.length}</p>
      <p class="text-lg text-slate-600 mb-2">${percentage}%</p>
      <p class="text-sm text-slate-400 mb-6">Waktu: ${Math.floor(timeTaken/60)} menit ${timeTaken%60} detik</p>
      <div class="flex gap-3 justify-center">
        <button class="btn btn-primary" onclick="navigateTo('dashboard')">Dashboard</button>
        <button class="btn btn-secondary" onclick="reviewExam()">Review</button>
      </div>
    </div>`;
  App.currentMode = null;
  renderDashboard();
}

function reviewExam() {
  App.currentMode = 'review';
  document.getElementById('view-exam').innerHTML = `
    <div class="mb-6"><h2 class="text-xl font-bold">📋 Review Ujian</h2></div>
    <div id="review-container"></div>
    <div class="flex justify-between items-center mt-6">
      <button class="btn btn-secondary" onclick="prevReviewQuestion()" id="review-btn-prev" disabled><i class="fas fa-chevron-left"></i></button>
      <span class="text-sm text-slate-500" id="review-counter"></span>
      <button class="btn btn-primary" onclick="nextReviewQuestion()" id="review-btn-next"><i class="fas fa-chevron-right"></i></button>
    </div>`;
  App.currentIndex = 0;
  renderReviewQuestion();
}

function renderReviewQuestion() {
  const container = document.getElementById('review-container');
  if (!container) return;
  const q = App.currentQuestions[App.currentIndex];
  const answer = App.examAnswers.find(a => a.questionId === q.id);
  const userLabel = answer ? q.options[answer.selectedIndex]?.label : '-';
  const isCorrect = userLabel === q.answer;
  container.innerHTML = `
    <div class="question-card">
      <p class="text-lg font-medium text-slate-800 japanese-text font-jp">${q.questionJP}</p>
      <div class="mt-4 space-y-2">
        ${q.options.map(opt => `<div class="option-btn ${opt.label===q.answer?'correct':''} ${opt.label===userLabel&&!isCorrect?'incorrect':''}"><span class="option-label">${opt.label}</span><span class="japanese-text" data-original="${opt.text.replace(/"/g,'&quot;')}">${opt.text}</span></div>`).join('')}
      </div>
      <div class="mt-4"><button class="btn btn-sm btn-ghost" onclick="toggleHack('${q.id}')">Hack</button><div id="hack-${q.id}" class="hack-panel hidden mt-3"><p class="section-content">${q.hack?.corePoint||'-'}</p></div></div>
    </div>`;
  FuriganaEngine.process(container);
  if (App.highlightEnabled) setTimeout(() => HighlightEngine.process(container), 50);
  const rc = document.getElementById('review-counter');
  if (rc) rc.innerHTML = `<span>${App.currentIndex+1}/${App.currentQuestions.length}</span><input type="number" id="question-jumper-input" min="1" max="${App.currentQuestions.length}" value="${App.currentIndex+1}" onkeydown="if(event.key==='Enter')jumpToQuestion()" class="ml-2 w-16 px-2 py-1 text-sm border border-slate-300 rounded-lg text-center"><button onclick="jumpToQuestion()" class="btn btn-sm btn-ghost ml-1"><i class="fas fa-arrow-right"></i></button>`;
  document.getElementById('review-btn-prev').disabled = App.currentIndex === 0;
  document.getElementById('review-btn-next').disabled = App.currentIndex === App.currentQuestions.length - 1;
}
function prevReviewQuestion() { if (App.currentIndex > 0) { App.currentIndex--; renderReviewQuestion(); } }
function nextReviewQuestion() { if (App.currentIndex < App.currentQuestions.length - 1) { App.currentIndex++; renderReviewQuestion(); } }

// ========== SPACED REPETITION ==========
async function initReview() {
  App.currentMode = 'review';
  const dueItems = await Storage.getDueReviews();
  const qIds = dueItems.map(d => d.questionId);
  App.currentQuestions = QUESTIONS.filter(q => qIds.includes(q.id));
  App.currentIndex = 0;
  const view = document.getElementById('view-review');
  if (App.currentQuestions.length === 0) {
    view.innerHTML = `<div class="main-card text-center"><i class="fas fa-check-circle text-5xl text-emerald-500 mb-4"></i><h3 class="text-xl font-bold">Tidak ada review!</h3></div>`;
    return;
  }
  view.innerHTML = `
    <div class="mb-6"><h2 class="text-xl font-bold">🔄 Pengulangan Terjadwal</h2><p class="text-sm text-slate-500">${App.currentQuestions.length} soal</p></div>
    <div id="review-spaced-container"></div>
    <div class="flex justify-between mt-6">
      <button class="btn btn-secondary" onclick="prevSpacedQuestion()" id="spaced-btn-prev" disabled><i class="fas fa-chevron-left"></i></button>
      <button class="btn btn-primary" onclick="nextSpacedQuestion()" id="spaced-btn-next"><i class="fas fa-chevron-right"></i></button>
    </div>`;
  renderSpacedQuestion();
}

function renderSpacedQuestion() {
  const container = document.getElementById('review-spaced-container');
  if (!container) return;
  const q = App.currentQuestions[App.currentIndex];
  container.innerHTML = `
    <div class="question-card">
      <p class="text-lg font-medium text-slate-800 japanese-text font-jp">${q.questionJP}</p>
      <div class="mt-4 space-y-2">
        ${q.options.map((opt, idx) => `<button class="option-btn" onclick="selectSpacedOption(${idx})" id="spaced-opt-${idx}"><span class="option-label">${opt.label}</span><span class="japanese-text" data-original="${opt.text.replace(/"/g,'&quot;')}">${opt.text}</span></button>`).join('')}
      </div>
      <button class="btn btn-sm btn-ghost mt-4" onclick="checkSpacedAnswer('${q.id}')"><i class="fas fa-check"></i> Periksa</button>
      <span id="spaced-feedback-${q.id}" class="text-sm font-medium ml-2"></span>
    </div>`;
  FuriganaEngine.process(container);
  if (App.highlightEnabled) setTimeout(() => HighlightEngine.process(container), 50);
}

let spacedSelected = null;
function selectSpacedOption(index) { spacedSelected = index; document.querySelectorAll('.option-btn').forEach((b,i) => b.classList.toggle('selected', i===index)); }
async function checkSpacedAnswer(questionId) {
  if (spacedSelected === null) { alert('Pilih jawaban!'); return; }
  const q = App.currentQuestions[App.currentIndex];
  const isCorrect = q.options[spacedSelected].label === q.answer;
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.remove('selected');
    if (q.options[i].label === q.answer) btn.classList.add('correct');
    else if (i === spacedSelected && !isCorrect) btn.classList.add('incorrect');
  });
  document.getElementById(`spaced-feedback-${questionId}`).textContent = isCorrect ? '✅ Benar!' : '❌ Salah';
  await Storage.updateProgress(questionId, isCorrect);
  Storage.logDailyActivity(1);
  spacedSelected = null;
}
function prevSpacedQuestion() { if (App.currentIndex > 0) { App.currentIndex--; renderSpacedQuestion(); } }
function nextSpacedQuestion() { if (App.currentIndex < App.currentQuestions.length - 1) { App.currentIndex++; renderSpacedQuestion(); } }

// ========== GLOSSARY ==========
async function renderGlossary() {
  const view = document.getElementById('view-glossary');
  const words = await Storage.getAllGlossary();
  view.innerHTML = `
    <div class="mb-6"><h2 class="text-xl font-bold">📚 Glosarium</h2><input type="search" placeholder="Cari kata..." class="mt-3" oninput="searchGlossary(this.value)"></div>
    <div id="glossary-list" class="space-y-2">
      ${words.length===0?'<p class="text-slate-500">Belum ada kata.</p>':''}
      ${words.map(w=>`<div class="stat-card flex justify-between"><div><span class="font-jp font-bold">${w.word}</span> <span class="text-indigo-600 font-jp">${w.reading}</span><p class="text-sm text-slate-500">${w.meaning||'-'}</p></div><button class="btn btn-sm btn-ghost text-red-500" onclick="deleteGlossaryWord('${w.id}')"><i class="fas fa-trash"></i></button></div>`).join('')}
    </div>`;
}
async function searchGlossary(query) {
  const results = await Storage.searchGlossary(query);
  document.getElementById('glossary-list').innerHTML = results.map(w=>`<div class="stat-card flex justify-between"><div><span class="font-jp font-bold">${w.word}</span> <span class="text-indigo-600 font-jp">${w.reading}</span><p class="text-sm text-slate-500">${w.meaning||'-'}</p></div><button class="btn btn-sm btn-ghost text-red-500" onclick="deleteGlossaryWord('${w.id}')"><i class="fas fa-trash"></i></button></div>`).join('');
}
async function deleteGlossaryWord(id) { await Storage.deleteGlossaryWord(id); renderGlossary(); }

// ========== SETTINGS ==========
async function renderSettings() {
  const view = document.getElementById('view-settings');
  const furiMode = await Storage.getSetting('furiganaMode','ruby');
  const darkMode = await Storage.getSetting('darkMode',false);
  const target = await Storage.getSetting('dailyTarget',20);
  const targetScore = await Storage.getSetting('targetScore',70);
  const highlightOn = await Storage.getSetting('highlightEnabled',true);
  view.innerHTML = `
    <div class="main-card space-y-6"><h2 class="text-xl font-bold">⚙️ Pengaturan</h2>
    <div><label>Mode Furigana</label><select onchange="updateFuriganaMode(this.value)" class="mt-1">
      <option value="ruby" ${furiMode==='ruby'?'selected':''}>Furigana (Ruby)</option>
      <option value="tooltip" ${furiMode==='tooltip'?'selected':''}>Tooltip (Tap)</option>
      <option value="none" ${furiMode==='none'?'selected':''}>Kanji Saja</option></select></div>
    <div><label>Target Harian (soal)</label><input type="number" value="${target}" min="5" max="100" onchange="updateDailyTarget(this.value)" class="mt-1"></div>
    <div><label>Target Skor Ujian (%)</label><input type="number" value="${targetScore}" min="50" max="100" onchange="updateTargetScore(this.value)" class="mt-1"></div>
    <div class="flex justify-between"><label>Highlight Kata Teknik</label><button class="btn btn-sm ${highlightOn?'btn-primary':'btn-secondary'}" onclick="toggleHighlight()">${highlightOn?'🔍 ON':'🔍 OFF'}</button></div>
    <div class="flex justify-between"><label>Dark Mode</label><button class="btn btn-sm ${darkMode?'btn-primary':'btn-secondary'}" onclick="toggleDarkMode()">${darkMode?'🌙 ON':'☀️ OFF'}</button></div>
    <hr><div class="space-y-3">
    <button class="btn btn-secondary w-full" onclick="exportData()"><i class="fas fa-download"></i> Export</button>
    <button class="btn btn-secondary w-full" onclick="document.getElementById('import-file').click()"><i class="fas fa-upload"></i> Import</button>
    <input type="file" id="import-file" accept=".json" class="hidden" onchange="importData(event)">
    <button class="btn btn-danger w-full" onclick="resetAllData()"><i class="fas fa-trash-alt"></i> Reset</button></div></div>`;
}
async function updateFuriganaMode(mode) { FuriganaEngine.setMode(mode); await Storage.setSetting('furiganaMode',mode); }
async function updateDailyTarget(value) { App.dailyTarget = parseInt(value)||20; await Storage.setSetting('dailyTarget',App.dailyTarget); }
async function updateTargetScore(value) { App.targetScore = parseInt(value)||70; await Storage.setSetting('targetScore',App.targetScore); }
async function toggleHighlight() { App.highlightEnabled = HighlightEngine.toggle(); await Storage.setSetting('highlightEnabled',App.highlightEnabled); renderSettings(); }
async function toggleDarkMode() {
  const current = document.body.getAttribute('data-theme') === 'dark';
  if (current) { document.body.removeAttribute('data-theme'); await Storage.setSetting('darkMode',false); }
  else { document.body.setAttribute('data-theme','dark'); await Storage.setSetting('darkMode',true); }
  renderSettings();
}
async function exportData() {
  const json = await Storage.exportData();
  const blob = new Blob([json],{type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
async function importData(event) {
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    const success = await Storage.importData(e.target.result);
    alert(success ? '✅ Berhasil' : '❌ Gagal');
    renderDashboard(); renderSettings();
  };
  reader.readAsText(file);
}
async function resetAllData() {
  if(confirm('Hapus semua?')) {
    await Storage.resetAllProgress();
    await db.glossary.clear();
    alert('✅ Direset');
    renderDashboard(); renderSettings();
  }
}

// ========== IMAGE UPLOAD ==========
function uploadImage(questionId) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target.result;
      await Storage.saveImage(questionId, dataUrl);
      const q = QUESTIONS.find(q => q.id === questionId);
      if (q) q.image = dataUrl;
      const placeholder = document.getElementById(`img-placeholder-${questionId}`);
      if (placeholder) placeholder.innerHTML = `<img src="${dataUrl}" class="max-w-full rounded-lg">`;
      if (App.currentMode === 'practice') renderPracticeQuestion();
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

(async function loadSavedImages() {
  const images = await Storage.getAllImages();
  images.forEach(img => {
    const q = QUESTIONS?.find(q => q.id === img.questionId);
    if (q) q.image = img.dataUrl;
  });
})();

console.log('🚀 App loaded (Full Final)');