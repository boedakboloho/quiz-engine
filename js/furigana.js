/* ============================================ */
/* FILE: js/furigana.js (FULL FINAL)             */
/* DESKRIPSI: Kuromoji + Furigana Hiragana       */
/*            + Highlight Engine                 */
/* SIMPAN DI: quiz-engine/js/                    */
/* ============================================ */

// ========== KATAKANA TO HIRAGANA CONVERTER ==========
function katakanaToHiragana(str) {
  return str.replace(/[\u30A1-\u30F6]/g, function(match) {
    return String.fromCharCode(match.charCodeAt(0) - 0x60);
  });
}

// ========== CUSTOM DICTIONARY (Istilah Teknik - HIRAGANA) ==========
const CUSTOM_DICT = [
  // Keselamatan Kerja
  { surface: '電気器具', reading: 'でんききぐ', meaning: 'Peralatan listrik' },
  { surface: '漏電', reading: 'ろうでん', meaning: 'Kebocoran arus listrik' },
  { surface: '感電', reading: 'かんでん', meaning: 'Sengatan listrik' },
  { surface: '接地', reading: 'せっち', meaning: 'Grounding / Pembumian' },
  { surface: '危険予知', reading: 'きけんよち', meaning: 'Prediksi bahaya (KYT)' },
  { surface: '危険', reading: 'きけん', meaning: 'Bahaya' },
  { surface: '安全衛生', reading: 'あんぜんえいせい', meaning: 'Keselamatan & Kesehatan' },
  { surface: '労働安全衛生法', reading: 'ろうどうあんぜんえいせいほう', meaning: 'UU Keselamatan Kerja' },
  { surface: '労働災害', reading: 'ろうどうさいがい', meaning: 'Kecelakaan kerja' },
  { surface: '整理整頓', reading: 'せいりせいとん', meaning: 'Rapi & teratur (5S)' },
  { surface: '照度', reading: 'しょうど', meaning: 'Iluminasi (lux)' },
  { surface: '避難', reading: 'ひなん', meaning: 'Evakuasi' },
  { surface: '火気厳禁', reading: 'かきげんきん', meaning: 'Dilarang api' },
  { surface: '保護具', reading: 'ほごぐ', meaning: 'APD' },
  { surface: '玉掛け', reading: 'たまがけ', meaning: 'Rigging / Slinging' },
  { surface: '遮光', reading: 'しゃこう', meaning: 'Pelindung cahaya' },
  { surface: '防塵', reading: 'ぼうじん', meaning: 'Anti debu' },
  { surface: '袖まくり', reading: 'そでまくり', meaning: 'Lengan digulung (berbahaya)' },
  { surface: '軍手', reading: 'ぐんて', meaning: 'Sarung tangan katun' },
  { surface: '皮手袋', reading: 'かわてぶくろ', meaning: 'Sarung tangan kulit' },
  { surface: '耳栓', reading: 'みみせん', meaning: 'Earplug' },

  // Quality Control
  { surface: '品質管理', reading: 'ひんしつかんり', meaning: 'Quality Control' },
  { surface: '不良品', reading: 'ふりょうひん', meaning: 'Produk cacat' },
  { surface: '不適合品', reading: 'ふてきごうひん', meaning: 'Produk non-conforming' },
  { surface: '検査', reading: 'けんさ', meaning: 'Inspeksi' },
  { surface: '全数検査', reading: 'ぜんすうけんさ', meaning: 'Inspeksi 100%' },
  { surface: '抜取検査', reading: 'ぬきとりけんさ', meaning: 'Inspeksi sampling' },
  { surface: '非破壊検査', reading: 'ひはかいけんさ', meaning: 'NDT' },
  { surface: '破壊検査', reading: 'はかいけんさ', meaning: 'Destructive test' },
  { surface: '超音波探傷試験', reading: 'ちょうおんぱたんしょうしけん', meaning: 'Ultrasonic test' },
  { surface: '外観検査', reading: 'がいかんけんさ', meaning: 'Inspeksi visual' },
  { surface: '特性要因図', reading: 'とくせいよういんず', meaning: 'Diagram fishbone' },
  { surface: '散布図', reading: 'さんぷず', meaning: 'Scatter diagram' },
  { surface: '管理図', reading: 'かんりず', meaning: 'Control chart' },
  { surface: 'ヒストグラム', reading: 'ひすとぐらむ', meaning: 'Histogram' },
  { surface: 'パレート図', reading: 'ぱれーとず', meaning: 'Diagram Pareto' },
  { surface: 'チェックシート', reading: 'ちぇっくしーと', meaning: 'Check sheet' },
  { surface: '層別', reading: 'そうべつ', meaning: 'Stratifikasi' },
  { surface: '累積比率', reading: 'るいせきひりつ', meaning: 'Persentase kumulatif' },
  { surface: '三現主義', reading: 'さんげんしゅぎ', meaning: '3-Gen Principle' },
  { surface: '現場', reading: 'げんば', meaning: 'Genba (lokasi)' },
  { surface: '現物', reading: 'げんぶつ', meaning: 'Genbutsu (barang)' },
  { surface: '現実', reading: 'げんじつ', meaning: 'Genjitsu (fakta)' },
  { surface: 'ＰＤＣＡ', reading: 'ぴーでぃーしーえー', meaning: 'Plan-Do-Check-Act' },
  { surface: '不良率', reading: 'ふりょうりつ', meaning: 'Tingkat cacat' },

  // Pengukuran
  { surface: '測定', reading: 'そくてい', meaning: 'Pengukuran' },
  { surface: '測定器', reading: 'そくていき', meaning: 'Alat ukur' },
  { surface: '測定面', reading: 'そくていめん', meaning: 'Permukaan ukur' },
  { surface: '最小読取値', reading: 'さいしょうよみとりち', meaning: 'Resolusi' },
  { surface: '校正', reading: 'こうせい', meaning: 'Kalibrasi' },
  { surface: '零点', reading: 'れいてん', meaning: 'Titik nol' },
  { surface: '外径', reading: 'がいけい', meaning: 'Diameter luar' },
  { surface: '内径', reading: 'ないけい', meaning: 'Diameter dalam' },
  { surface: '膜厚', reading: 'まくあつ', meaning: 'Ketebalan lapisan' },
  { surface: '膜厚計', reading: 'まくあつけい', meaning: 'Thickness gauge' },
  { surface: '平行度', reading: 'へいこうど', meaning: 'Parallelism' },
  { surface: '本尺', reading: 'ほんしゃく', meaning: 'Skala utama' },
  { surface: '副尺', reading: 'ふくしゃく', meaning: 'Skala nonius' },

  // Material & Proses
  { surface: '弾性', reading: 'だんせい', meaning: 'Elastisitas' },
  { surface: '塑性', reading: 'そせい', meaning: 'Plastisitas' },
  { surface: '破壊', reading: 'はかい', meaning: 'Destruksi' },
  { surface: '引張試験', reading: 'ひっぱりしけん', meaning: 'Uji tarik' },
  { surface: '曲げ試験', reading: 'まげしけん', meaning: 'Uji tekuk' },
  { surface: '衝撃試験', reading: 'しょうげきしけん', meaning: 'Uji impak' },
  { surface: '曲げ加工', reading: 'まげかこう', meaning: 'Proses tekuk' },
  { surface: '溶接', reading: 'ようせつ', meaning: 'Pengelasan' },
  { surface: '塗装', reading: 'とそう', meaning: 'Pengecatan' },
  { surface: '塗膜', reading: 'とまく', meaning: 'Lapisan cat' },
  { surface: '鋼板', reading: 'こうはん', meaning: 'Plat baja' },
  { surface: '天然ゴム', reading: 'てんねんごむ', meaning: 'Karet alam' },
  { surface: '絶縁', reading: 'ぜつえん', meaning: 'Isolasi' },
  { surface: '導体', reading: 'どうたい', meaning: 'Konduktor' },
  { surface: '荷重', reading: 'かじゅう', meaning: 'Beban' },
  { surface: '破損', reading: 'はそん', meaning: 'Kerusakan' },
  { surface: '劣化', reading: 'れっか', meaning: 'Degradasi' },
  { surface: '円筒', reading: 'えんとう', meaning: 'Silinder' },
  { surface: '円周率', reading: 'えんしゅうりつ', meaning: 'Pi (π)' },
  { surface: '周速度', reading: 'しゅうそくど', meaning: 'Kecepatan potong' },

  // Dokumen & Gambar
  { surface: '組立図', reading: 'くみたてず', meaning: 'Gambar assembly' },
  { surface: '展開図', reading: 'てんかいず', meaning: 'Development drawing' },
  { surface: '製図', reading: 'せいず', meaning: 'Menggambar teknik' },
  { surface: '第三角法', reading: 'だいさんかくほう', meaning: 'Third Angle Projection' },
  { surface: '第一角法', reading: 'だいいちかくほう', meaning: 'First Angle Projection' },
  { surface: '図面', reading: 'ずめん', meaning: 'Gambar teknik' },
  { surface: '寸法', reading: 'すんぽう', meaning: 'Dimensi' },
  { surface: '公差', reading: 'こうさ', meaning: 'Toleransi' },
  { surface: 'はめあい', reading: 'はめあい', meaning: 'Suaian (fit)' },
  { surface: '表面性状', reading: 'ひょうめんせいじょう', meaning: 'Kekasaran permukaan' },
  { surface: 'かくれ線', reading: 'かくれせん', meaning: 'Garis tersembunyi' },
  { surface: '中心線', reading: 'ちゅうしんせん', meaning: 'Garis sumbu' },
  { surface: '寸法線', reading: 'すんぽうせん', meaning: 'Garis dimensi' },
  { surface: '等角投影図', reading: 'とうかくとうえいず', meaning: 'Gambar isometrik' },

  // Manajemen & Lainnya
  { surface: '予防保全', reading: 'よぼうほぜん', meaning: 'Preventive maintenance' },
  { surface: '日常点検', reading: 'にちじょうてんけん', meaning: 'Inspeksi harian' },
  { surface: '定期検査', reading: 'ていきけんさ', meaning: 'Inspeksi berkala' },
  { surface: '３Ｒ', reading: 'さんあーる', meaning: 'Reduce, Reuse, Recycle' },
];

// ========== FURIGANA ENGINE ==========
const FuriganaEngine = {
  tokenizer: null,
  isReady: false,
  mode: 'ruby',
  
  async init() {
    return new Promise((resolve, reject) => {
      if (this.isReady) { resolve(true); return; }
      
      kuromoji.builder({ dicPath: 'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/' }).build((err, tokenizer) => {
        if (err) { console.error('❌ Kuromoji failed:', err); this.isReady = false; resolve(false); return; }
        this.tokenizer = tokenizer;
        this.isReady = true;
        console.log('✅ Furigana Engine ready (Hiragana mode)');
        resolve(true);
      });
    });
  },
  
  setMode(mode) {
    if (['ruby', 'tooltip', 'none'].includes(mode)) {
      this.mode = mode;
      if (typeof Storage !== 'undefined') { Storage.setSetting('furiganaMode', mode); }
    }
  },
  
  process(container, mode = null) {
    const currentMode = mode || this.mode;
    const elements = container.querySelectorAll('.japanese-text');
    
    elements.forEach(el => {
      const originalText = el.getAttribute('data-original') || el.textContent;
      el.setAttribute('data-original', originalText);
      
      switch (currentMode) {
        case 'ruby':
          el.innerHTML = this._renderRuby(originalText);
          break;
        case 'tooltip':
          el.innerHTML = this._renderTooltip(originalText);
          break;
        case 'none':
          el.innerHTML = originalText;
          break;
      }
    });
    
    // Jalankan highlight setelah furigana
    setTimeout(() => { HighlightEngine.process(container); }, 50);
  },
  
  _renderRuby(text) {
    const tokens = this._tokenize(text);
    let html = '';
    tokens.forEach(token => {
      if (this._needsFurigana(token)) {
        html += `<ruby>${token.surface}<rt>${katakanaToHiragana(token.reading)}</rt></ruby>`;
      } else {
        html += token.surface;
      }
    });
    return html;
  },
  
  _renderTooltip(text) {
    const tokens = this._tokenize(text);
    let html = '';
    tokens.forEach(token => {
      if (this._needsFurigana(token)) {
        const hiraganaReading = katakanaToHiragana(token.reading);
        html += `<span class="furigana-tooltip" data-reading="${hiraganaReading}" data-meaning="${token.meaning || ''}">${token.surface}</span>`;
      } else {
        html += token.surface;
      }
    });
    return html;
  },
  
  _tokenize(text) {
    if (this.tokenizer) {
      try {
        return this.tokenizer.tokenize(text).map(t => ({
          surface: t.surface_form,
          reading: t.reading || t.surface_form,
          meaning: ''
        }));
      } catch (e) { /* fallback */ }
    }
    return this._customTokenize(text);
  },
  
  _customTokenize(text) {
    const tokens = [];
    let remaining = text;
    const sortedDict = [...CUSTOM_DICT].sort((a, b) => b.surface.length - a.surface.length);
    
    while (remaining.length > 0) {
      let matched = false;
      for (const entry of sortedDict) {
        if (remaining.startsWith(entry.surface)) {
          tokens.push({ surface: entry.surface, reading: entry.reading, meaning: entry.meaning, pos: 'custom' });
          remaining = remaining.slice(entry.surface.length);
          matched = true;
          break;
        }
      }
      if (!matched) {
        const char = remaining[0];
        tokens.push({ surface: char, reading: char, meaning: '', pos: 'char' });
        remaining = remaining.slice(1);
      }
    }
    return tokens;
  },
  
  _needsFurigana(token) {
    return token.surface !== katakanaToHiragana(token.reading) && /[\u4E00-\u9FFF]/.test(token.surface);
  },
  
  async loadMode() {
    if (typeof Storage !== 'undefined') {
      this.mode = await Storage.getSetting('furiganaMode', 'ruby');
    }
    return this.mode;
  }
};

// ========== HIGHLIGHT ENGINE ==========
const HighlightEngine = {
  isEnabled: true,

  toggle() {
    this.isEnabled = !this.isEnabled;
    if (typeof Storage !== 'undefined') { Storage.setSetting('highlightEnabled', this.isEnabled); }
    return this.isEnabled;
  },

  async loadSetting() {
    if (typeof Storage !== 'undefined') {
      this.isEnabled = await Storage.getSetting('highlightEnabled', true);
    }
  },

  process(container) {
    if (!this.isEnabled) return;

    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement && !['RT', 'INPUT', 'TEXTAREA', 'SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) {
        textNodes.push(node);
      }
    }

    textNodes.forEach(textNode => this._highlightTextNode(textNode));
  },

  _highlightTextNode(textNode) {
    const originalText = textNode.textContent;
    const sortedDict = [...CUSTOM_DICT].sort((a, b) => b.surface.length - a.surface.length);
    const heavyEquipments = ['フォークリフト', 'クレーン', 'プレス機械', 'ショベルカー', 'ブルドーザー'];
    const matches = [];

    sortedDict.forEach(entry => {
      if (heavyEquipments.includes(entry.surface)) return;
      let pos = originalText.indexOf(entry.surface);
      while (pos !== -1) {
        matches.push({ surface: entry.surface, reading: entry.reading, meaning: entry.meaning || '', position: pos });
        pos = originalText.indexOf(entry.surface, pos + 1);
      }
    });

    if (matches.length === 0) return;
    matches.sort((a, b) => a.position - b.position);

    let resultHTML = '', lastIndex = 0;
    matches.forEach(match => {
      if (match.position < lastIndex) return;
      resultHTML += this._escapeHTML(originalText.slice(lastIndex, match.position));
      resultHTML += `<span class="tech-highlight" data-reading="${match.reading}" data-meaning="${match.meaning}" data-surface="${match.surface}" onclick="HighlightEngine.showPopup(event, '${match.surface.replace(/'/g, "\\'")}', '${match.reading.replace(/'/g, "\\'")}', '${(match.meaning || '').replace(/'/g, "\\'")}')">${match.surface}</span>`;
      lastIndex = match.position + match.surface.length;
    });
    resultHTML += this._escapeHTML(originalText.slice(lastIndex));

    if (resultHTML !== originalText) {
      const span = document.createElement('span');
      span.innerHTML = resultHTML;
      textNode.parentNode.replaceChild(span, textNode);
    }
  },

  _escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  showPopup(event, surface, reading, meaning) {
    event.stopPropagation();
    const old = document.getElementById('term-popup');
    if (old) old.remove();

    const popup = document.createElement('div');
    popup.id = 'term-popup';
    popup.className = 'term-popup';
    popup.innerHTML = `
      <div style="font-weight:bold;font-size:1.1rem;">${surface}</div>
      <div style="color:#4f46e5;font-size:0.9rem;">${reading}</div>
      ${meaning ? `<div style="color:#64748b;font-size:0.8rem;">${meaning}</div>` : ''}
      <button class="btn btn-sm btn-primary mt-2" onclick="HighlightEngine.saveToGlossary('${surface.replace(/'/g, "\\'")}', '${reading.replace(/'/g, "\\'")}', '${(meaning||'').replace(/'/g, "\\'")}')">+ Glosarium</button>
      <button class="btn btn-sm btn-ghost mt-1" onclick="document.getElementById('term-popup').remove()">✕ Tutup</button>
    `;
    document.body.appendChild(popup);

    const rect = event.target.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    let top = rect.top - popupRect.height - 10;
    let left = rect.left + (rect.width / 2) - (popupRect.width / 2);
    if (top < 60) top = rect.bottom + 10;
    if (left < 10) left = 10;
    if (left + popupRect.width > window.innerWidth - 10) left = window.innerWidth - popupRect.width - 10;
    popup.style.position = 'fixed';
    popup.style.zIndex = '200';
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';

    setTimeout(() => {
      const closeHandler = (e) => {
        if (!popup.contains(e.target) && e.target !== event.target) {
          popup.remove();
          document.removeEventListener('click', closeHandler);
        }
      };
      document.addEventListener('click', closeHandler);
    }, 100);
  },

  async saveToGlossary(surface, reading, meaning) {
    try {
      if (typeof Storage !== 'undefined') { await Storage.addGlossaryWord(surface, reading, meaning); }
      document.getElementById('term-popup')?.remove();
      const toast = document.createElement('div');
      toast.className = 'toast toast-success';
      toast.innerHTML = `<i class="fas fa-check"></i> "${surface}" disimpan!`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
    } catch (err) { console.error('Gagal simpan:', err); }
  }
};

(async () => { await HighlightEngine.loadSetting(); })();

console.log('📦 Furigana Engine + Highlight module loaded (Full Final)');