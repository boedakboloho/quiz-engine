/* ============================================ */
/* FILE: js/data.js - BAGIAN 1                  */
/* DESKRIPSI: Dataset soal 1-10 (dari 78 soal)  */
/* SIMPAN DI: quiz-engine/js/ (sementara)       */
/* Nanti digabung dengan batch 8-14            */
/* ============================================ */

const QUESTIONS = [
  // ===== SOAL 1 =====
  {
    id: "1-1",
    set: 1,
    number: 1,
    category: "安全衛生",
    subCategory: "電気安全",
    type: "true-false",
    questionJP: "電気器具のスイッチは、濡れている手で操作してはいけない。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Tangan basah bisa menyebabkan tersengat listrik. Air adalah konduktor.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["電気器具", "濡れている手", "操作", "感電"],
      corePoint: "Air adalah konduktor listrik. Tangan basah = risiko sengatan listrik tinggi. Aturan dasar K3 listrik: selalu pastikan tangan kering saat mengoperasikan peralatan listrik.",
      trap: "Tidak ada jebakan. Ini adalah aturan keselamatan paling dasar yang selalu benar.",
      mnemonic: "Ingat: Air + Listrik = BAHAYA. Tangan kering = Selamat.",
      whyOthersWrong: {
        B: "Tidak mungkin '間違っている' karena melarang operasi dengan tangan basah adalah aturan mutlak keselamatan listrik."
      }
    }
  },

  // ===== SOAL 2 =====
  {
    id: "1-2",
    set: 1,
    number: 2,
    category: "安全衛生",
    subCategory: "JIS記号",
    type: "true-false",
    questionJP: "日本産業規格（ＪＩＳ）に定められた下の図記号は、「障害物に注意」のマークである。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Simbol yang dimaksud mungkin berbeda. Simbol '障害物に注意' biasanya berbeda dengan simbol umum peringatan. Tanda seru dalam segitiga kuning adalah '危険' atau '注意' umum.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["JIS", "図記号", "障害物", "注意"],
      corePoint: "Simbol JIS untuk '障害物に注意' spesifik berbeda dengan simbol '注意' umum. Perhatikan bentuk dan konteks simbol.",
      trap: "Jangan tertukar antara simbol '危険' (tanda seru) dengan '障害物に注意' yang lebih spesifik.",
      mnemonic: "障害物 = rintangan fisik, simbolnya berbeda dari sekadar tanda seru peringatan.",
      whyOthersWrong: {
        A: "Simbol pada soal bukan '障害物に注意', melainkan simbol lain sehingga pernyataan ini SALAH."
      }
    }
  },

  // ===== SOAL 3 =====
  {
    id: "1-3",
    set: 1,
    number: 3,
    category: "安全衛生",
    subCategory: "点検",
    type: "true-false",
    questionJP: "忙しいときは、機械の点検をやらなくてよい。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Pemeriksaan mesin tidak boleh dilewatkan meskipun sibuk, demi keselamatan.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["点検", "安全", "保守"],
      corePoint: "点検（inspeksi）adalah kewajiban mutlak. Tidak ada alasan 'sibuk' untuk melewatkan pemeriksaan mesin. Kecelakaan terjadi justru karena kelalaian kecil.",
      trap: "Hati-hati: '忙しい' bukan alasan yang sah dalam K3. Setiap pekerjaan wajib diawali dengan pemeriksaan.",
      mnemonic: "点検 = NYAWA. Sibuk bukan alasan untuk mempertaruhkan nyawa.",
      whyOthersWrong: {
        A: "Ini jelas SALAH. Melewatkan inspeksi karena sibuk justru meningkatkan risiko kecelakaan fatal."
      }
    }
  },

  // ===== SOAL 4 =====
  {
    id: "1-4",
    set: 1,
    number: 4,
    category: "品質管理",
    subCategory: "QCツール",
    type: "true-false",
    questionJP: "品質管理には、ヒストグラムやパレート図などを使う。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Histogram dan diagram Pareto adalah alat QC (7 tools) yang umum digunakan.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["品質管理", "ヒストグラム", "パレート図", "QC7つ道具"],
      corePoint: "QC 7 Tools adalah seperangkat alat statistik untuk pengendalian kualitas. Histogram dan diagram Pareto adalah dua di antaranya.",
      trap: "Jangan lupa: 7 tools lengkapnya: Check sheet, Histogram, Pareto, Fishbone, Scatter, Control chart, Stratification (層別).",
      mnemonic: "QC7 = CHP-FSCS (Check, Histo, Pareto, Fishbone, Scatter, Control, Stratification).",
      whyOthersWrong: {
        B: "Histogram dan Pareto adalah bagian dari QC 7 Tools. Jawaban ini BENAR."
      }
    }
  },

  // ===== SOAL 5 =====
  {
    id: "1-5",
    set: 1,
    number: 5,
    category: "環境",
    subCategory: "3R",
    type: "true-false",
    questionJP: "環境の３Ｒとは、リデュース、リユース、リサイクルである。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Reduce, Reuse, Recycle = 3R.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["3R", "リデュース", "リユース", "リサイクル", "環境"],
      corePoint: "3R adalah hierarki pengelolaan sampah: Reduce (mengurangi) → Reuse (menggunakan kembali) → Recycle (mendaur ulang).",
      trap: "Jangan tertukar urutannya! Reduce adalah prioritas utama, baru Reuse, terakhir Recycle.",
      mnemonic: "3R = R-R-R: Reduce, Reuse, Recycle. Ingat urutan: Kurangi dulu, baru pakai lagi, baru daur ulang.",
      whyOthersWrong: {
        B: "Definisi 3R sudah benar: Reduce, Reuse, Recycle."
      }
    }
  },

  // ===== SOAL 6 =====
  {
    id: "1-6",
    set: 1,
    number: 6,
    category: "品質管理",
    subCategory: "測定",
    type: "true-false",
    questionJP: "ｐＨ試験紙が青色を示す水溶液は、酸性である。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Biru menunjukkan basa (alkali), bukan asam. Asam membuat kertas lakmus biru jadi merah.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["pH試験紙", "青色", "酸性", "アルカリ性"],
      corePoint: "pH scale: 0-6 = asam (merah), 7 = netral (hijau), 8-14 = basa/alkali (biru). Biru = BASA, bukan asam.",
      trap: "Kebalik! Banyak yang salah: asam = merah, basa = biru. Jangan tertukar.",
      mnemonic: "Asam = Api (Merah). Basa = Biru (Langit). Ingat: Merah-Asam, Biru-Basa.",
      whyOthersWrong: {
        A: "SALAH. Biru adalah indikator basa/alkali, bukan asam."
      }
    }
  },

  // ===== SOAL 7 =====
  {
    id: "1-7",
    set: 1,
    number: 7,
    category: "材料",
    subCategory: "電気材料",
    type: "true-false",
    questionJP: "天然ゴムは電気を通しにくい。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Karet alam bersifat isolator, sulit menghantarkan listrik.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["天然ゴム", "電気", "絶縁体", "導体"],
      corePoint: "Karet alam (natural rubber) adalah isolator listrik yang baik. Digunakan untuk sarung tangan listrik, alas kabel, dll.",
      trap: "Jangan bingung dengan karet sintetis tertentu yang bisa konduktif. Karet alam MURNI adalah isolator.",
      mnemonic: "Karet = Isolator. Karet alam dipakai untuk melindungi dari listrik (sarung tangan teknisi listrik).",
      whyOthersWrong: {
        B: "Pernyataan ini BENAR. Karet alam memang sulit menghantarkan listrik (isolator)."
      }
    }
  },

  // ===== SOAL 8 =====
  {
    id: "1-8",
    set: 1,
    number: 8,
    category: "安全衛生",
    subCategory: "法令",
    type: "true-false",
    questionJP: "労働災害の危険がない場合は、法令を守る必要はない。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Hukum/peraturan harus selalu dipatuhi, bukan hanya saat ada bahaya.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["労働災害", "法令", "遵守"],
      corePoint: "Kepatuhan terhadap undang-undang K3 bersifat MUTLAK, tidak tergantung ada atau tidaknya bahaya. Ini prinsip dasar hukum.",
      trap: "Bahaya bisa muncul kapan saja. Kepatuhan preventif adalah kunci. Jangan menunggu ada bahaya baru patuh.",
      mnemonic: "Hukum = Selalu berlaku. Tidak ada pengecualian 'karena tidak berbahaya'.",
      whyOthersWrong: {
        A: "SALAH. Hukum harus dipatuhi dalam kondisi apapun, bukan hanya saat ada bahaya."
      }
    }
  },

  // ===== SOAL 9 =====
  {
    id: "1-9",
    set: 1,
    number: 9,
    category: "安全衛生",
    subCategory: "JIS記号",
    type: "true-false",
    questionJP: "日本産業規格（ＪＩＳ）に定められた下の図記号は、「火気厳禁」のマークである。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Simbol yang dimaksud bukan simbol '火気厳禁' (dilarang api). Simbol api biasanya berupa lingkaran merah dengan garis diagonal menutupi gambar api.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["JIS", "図記号", "火気厳禁", "安全標識"],
      corePoint: "Simbol '火気厳禁' memiliki ciri khas: lingkaran merah dengan garis diagonal menutupi gambar api. Jika gambarnya berbeda, berarti itu simbol lain.",
      trap: "Banyak simbol larangan mirip. Perhatikan detail gambar di dalam lingkaran: api =火気厳禁, rokok = 禁煙, dll.",
      mnemonic: "火気 = api. Cari gambar api dalam lingkaran merah dilarang.",
      whyOthersWrong: {
        A: "Simbol pada soal bukan '火気厳禁', jadi pernyataan ini SALAH."
      }
    }
  },

  // ===== SOAL 10 =====
  {
    id: "1-10",
    set: 1,
    number: 10,
    category: "安全衛生",
    subCategory: "電気安全",
    type: "true-false",
    questionJP: "漏電が起きたときに、漏れた電気を地面に逃がすためにアースを接続する。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Fungsi grounding/arde memang untuk mengalirkan arus bocor ke tanah agar tidak membahayakan manusia.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["漏電", "アース", "接地", "感電防止"],
      corePoint: "Arde (grounding) adalah jalur darurat untuk arus bocor mengalir ke bumi, mencegah sengatan listrik pada manusia yang menyentuh peralatan.",
      trap: "Jangan bingung: Arde BUKAN untuk menetralkan arus, tapi untuk memberikan jalur aman ke tanah. Alat tetap berfungsi tanpa arde, tapi tidak aman.",
      mnemonic: "Arde = Jalan Tol ke Tanah. Arus bocor = Mobil yang harus cepat keluar jalur.",
      whyOthersWrong: {
        B: "SALAH. Ini adalah fungsi UTAMA dari arde (grounding)."
      }
    }
  },
  
    // ===== SOAL 11 =====
  {
    id: "1-11",
    set: 1,
    number: 11,
    category: "安全衛生",
    subCategory: "クレーン安全",
    type: "true-false",
    questionJP: "クレーンで重い物をつり上げたときは、その荷物の下に入って操作を行う。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Dilarang keras berada di bawah beban yang sedang diangkat karena risiko jatuh.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["クレーン", "荷物", "つり上げ", "墜落", "危険区域"],
      corePoint: "Area di bawah beban yang digantung adalah ZONA BAHAYA. Jika rantai/sling putus, beban bisa jatuh dan menimpa pekerja di bawahnya.",
      trap: "Sekalipun untuk mengarahkan posisi beban, pekerja TIDAK BOLEH berada di bawahnya. Gunakan tali kendali dari jarak aman.",
      mnemonic: "Beban Gantung = Jangan di Bawah. 'Di bawah beban, di bawah tanah.'",
      whyOthersWrong: {
        A: "SALAH. Ini pelanggaran K3 fatal. Tidak boleh ada orang di bawah beban gantung."
      }
    }
  },

  // ===== SOAL 12 =====
  {
    id: "1-12",
    set: 1,
    number: 12,
    category: "安全衛生",
    subCategory: "4S/5S",
    type: "true-false",
    questionJP: "安全作業の基本として、４S（整理、整頓、清掃、清潔）が重要である。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "4S (Seiri, Seiton, Seisou, Seiketsu) adalah dasar keselamatan kerja. Kadang jadi 5S + Shitsuke.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["4S", "整理", "整頓", "清掃", "清潔", "5S"],
      corePoint: "4S/5S adalah fondasi K3. Lingkungan kerja yang rapi mengurangi risiko kecelakaan seperti tersandung, terjatuh, atau tertimpa benda.",
      trap: "Jangan lupa urutan dan artinya: 整理 (Seiri) = Singkirkan yang tidak perlu, 整頓 (Seiton) = Tentukan letak, 清掃 (Seisou) = Bersihkan, 清潔 (Seiketsu) = Pertahankan kebersihan. 5S tambah 躾 (Shitsuke) = Pembiasaan.",
      mnemonic: "4S = S+S+S+S. Ingat urutan: Pilih, Posisikan, Pel, Pertahankan.",
      whyOthersWrong: {
        B: "SALAH. 4S adalah dasar fundamental keselamatan kerja yang selalu benar."
      }
    }
  },

  // ===== SOAL 13 =====
  {
    id: "1-13",
    set: 1,
    number: 13,
    category: "安全衛生",
    subCategory: "加工安全",
    type: "true-false",
    questionJP: "金属加工で出る切りくずは、少しの量であれば、素手で取り除いてもよい。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Serpihan logam sangat tajam. Harus pakai sarung tangan atau alat bantu, meskipun sedikit.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["切りくず", "素手", "金属加工", "保護具"],
      corePoint: "Metal chips/swarf memiliki sisi yang sangat tajam seperti pisau. Mengambilnya dengan tangan kosong bisa menyebabkan luka sayat serius.",
      trap: "'Sedikit' bukan jaminan aman. Satu serpihan kecil saja bisa melukai dan menyebabkan infeksi. Selalu gunakan kuas, magnet, atau sarung tangan khusus.",
      mnemonic: "Kutilogam = Kaca Tajam. Jangan sentuh dengan kulit!",
      whyOthersWrong: {
        A: "SALAH. Serpihan logam sekecil apapun berpotensi melukai. APD wajib digunakan."
      }
    }
  },

  // ===== SOAL 14 =====
  {
    id: "1-14",
    set: 1,
    number: 14,
    category: "安全衛生",
    subCategory: "整理整頓",
    type: "true-false",
    questionJP: "つまづいて転ぶ、ぶつかるなどの災害防止のために、作業場は常に整理整頓しておく。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Tempat kerja yang rapi mencegah kecelakaan seperti tersandung atau tertabrak.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["整理整頓", "つまづき", "転倒", "通路"],
      corePoint: "Banyak kecelakaan kerja disebabkan oleh kondisi lantai/licin atau barang yang tidak pada tempatnya. 整理整頓 adalah pencegahan primer.",
      trap: "Ini bukan hanya tentang estetika. Jika ada barang di lorong, itu adalah hazard fisik yang bisa menyebabkan cedera serius.",
      mnemonic: "Rapi = Selamat. Lantai kosong = Langkah aman.",
      whyOthersWrong: {
        B: "SALAH. Ini adalah prinsip dasar 5S untuk keselamatan."
      }
    }
  },

  // ===== SOAL 15 =====
  {
    id: "1-15",
    set: 1,
    number: 15,
    category: "品質管理",
    subCategory: "QC工程表",
    type: "true-false",
    questionJP: "QC工程表とは、製造工程に沿って管理項目を示し、誰が・いつ・どのようにするかを書いた工程表である。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Definisi QC工程表 (tabel kendali mutu) adalah dokumen yang menjelaskan kontrol kualitas di setiap proses.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["QC工程表", "管理項目", "製造工程", "検査"],
      corePoint: "QC工程表 adalah peta kendali mutu. Ia menjawab: Apa yang dicek? Kapan? Bagaimana? Siapa? Ini memastikan konsistensi kualitas di setiap langkah produksi.",
      trap: "Jangan bingung dengan SOP biasa. QC工程表 fokus pada INSPEKSI dan KONTROL KUALITAS, bukan sekadar langkah kerja.",
      mnemonic: "QC工程表 = Peta Harta Karun Kualitas. Mencari cacat di setiap tahap.",
      whyOthersWrong: {
        B: "SALAH. Definisi ini tepat menggambarkan QC工程表."
      }
    }
  },

  // ===== SOAL 16 =====
  {
    id: "1-16",
    set: 1,
    number: 16,
    category: "品質管理",
    subCategory: "QCツール",
    type: "true-false",
    questionJP: "散布図は、対応のある２種類のデータを図に表すことで相関関係を知ることができる。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Diagram pencar (scatter diagram) digunakan untuk melihat korelasi dua variabel.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["散布図", "相関関係", "2種類のデータ", "QC"],
      corePoint: "Scatter diagram memvisualisasikan hubungan sebab-akibat antar dua variabel. Pola titik menunjukkan korelasi positif, negatif, atau tidak ada korelasi.",
      trap: "Jangan menyimpulkan sebab-akibat hanya dari korelasi. Korelasi bukan berarti causation (penyebab).",
      mnemonic: "Scatter = Titik-titik. Semakin rapat ke garis diagonal, semakin kuat korelasinya.",
      whyOthersWrong: {
        B: "SALAH. Ini adalah definisi dan fungsi utama dari 散布図."
      }
    }
  },

  // ===== SOAL 17 =====
  {
    id: "1-17",
    set: 1,
    number: 17,
    category: "品質管理",
    subCategory: "不良率",
    type: "true-false",
    questionJP: "100個の部品を機械加工した中に、不良品が３個あった。この場合の不良率は３０％である。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "3/100 × 100% = 3%, BUKAN 30%.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["不良率", "計算", "パーセント"],
      corePoint: "Rumus不良率 = (Jumlah Cacat / Total Produksi) x 100%. 3/100 x 100% = 3%. Hati-hati dengan posisi koma desimal.",
      trap: "Jangan tertipu angka. Jika ada 3 dari 100, itu 3%, bukan 30%. 30% itu 30 dari 100.",
      mnemonic: "3/100 = 3%. 30/100 = 30%. Jangan tambah nol sembarangan!",
      whyOthersWrong: {
        A: "SALAH. 3/100 adalah 3%, bukan 30%."
      }
    }
  },

  // ===== SOAL 18 =====
  {
    id: "1-18",
    set: 1,
    number: 18,
    category: "品質管理",
    subCategory: "工程内検査",
    type: "true-false",
    questionJP: "不適合品を次の工程に送らないためには、その工程内で検査を行う。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Inspeksi di dalam proses mencegah produk cacat lolos ke proses berikutnya.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["不適合品", "工程内検査", "流出防止"],
      corePoint: "Prinsip 'Jangan menerima, membuat, atau mengirim cacat'. 工程内検査 (in-process inspection) adalah filter untuk menghentikan cacat sebelum ke pelanggan.",
      trap: "Mengandalkan inspeksi akhir saja berbahaya. Semakin awal cacat ditemukan, semakin murah biaya perbaikannya.",
      mnemonic: "Cek di setiap pintu. Jangan biarkan cacat jalan-jalan ke proses berikutnya.",
      whyOthersWrong: {
        B: "SALAH. Ini adalah prinsip dasar Quality Assurance."
      }
    }
  },

  // ===== SOAL 19 =====
  {
    id: "1-19",
    set: 1,
    number: 19,
    category: "機械加工",
    subCategory: "フライス盤",
    type: "true-false",
    questionJP: "フライス盤では、工作物を回転させて製品を作る。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Pada mesin frais, alat potong (cutter) yang berputar, bukan benda kerjanya. Yang benda kerja berputar itu mesin bubut.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["フライス盤", "工作物", "回転", "切削工具"],
      corePoint: "Frais (Milling): Pahat berputar, benda kerja diam (digerakkan meja). Bubut (Lathe): Benda kerja berputar, pahat diam.",
      trap: "Ini perbedaan fundamental. Jika terbalik, akan fatal saat praktik. Jangan tertukar antara Milling dan Turning.",
      mnemonic: "Frais = Pahat ber-Futar. Bubut = Benda berpu-BUt.",
      whyOthersWrong: {
        A: "SALAH. Yang berputar pada frais adalah cutter, bukan benda kerja."
      }
    }
  },

  // ===== SOAL 20 =====
  {
    id: "1-20",
    set: 1,
    number: 20,
    category: "保全",
    subCategory: "予防保全",
    type: "true-false",
    questionJP: "設備の予防保全とは、設備の故障・劣化を予防するために、日常点検や定期検査などを行う活動のことである。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Definisi preventive maintenance adalah perawatan rutin untuk mencegah kerusakan.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["予防保全", "日常点検", "定期検査", "故障予防"],
      corePoint: "Preventive Maintenance (PM) ibarat ganti oli mobil sebelum mesin rusak. Lebih murah dan aman daripada perbaikan darurat (Breakdown Maintenance).",
      trap: "Jangan menunggu rusak baru diperbaiki. Itu namanya 事後保全 (Corrective/Breakdown Maintenance).",
      mnemonic: "PM = Pencegahan Masalah. Cek rutin = Hemat biaya besar.",
      whyOthersWrong: {
        B: "SALAH. Ini adalah definisi baku dari 予防保全."
      }
    }
  },
  
    // ===== SOAL 21 =====
  {
    id: "1-21",
    set: 1,
    number: 21,
    category: "機械加工",
    subCategory: "組立安全",
    type: "true-false",
    questionJP: "組み立て作業をするとき、ボルトが入りにくいときはボルトの頭部をハンマで叩いて入れる。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Memukul kepala baut dengan palu bisa merusak ulir/baut, tidak disarankan.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["ボルト", "ハンマ", "組立", "ねじ山", "損傷"],
      corePoint: "Memukul baut adalah tindakan destruktif. Dapat merusak ulir (drat), kepala baut, atau menyebabkan baut patah. Periksa lubang, luruskan, atau gunakan pelumas jika baut seret.",
      trap: "Jangan pernah gunakan kekerasan (palu) untuk memaksa komponen presisi. Itu bukan teknik fitting yang benar.",
      mnemonic: "Baut Seret = Jangan Dipalu. Cek, Luruskan, Lumasi.",
      whyOthersWrong: {
        A: "SALAH. Ini tindakan yang merusak komponen dan melanggar prosedur perakitan standar."
      }
    }
  },

  // ===== SOAL 22 =====
  {
    id: "1-22",
    set: 1,
    number: 22,
    category: "機械加工",
    subCategory: "曲げ加工",
    type: "true-false",
    questionJP: "鋼板の曲げ加工をするとき、曲げ半径が大きければ大きいほど曲げ部が割れやすい。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Semakin besar radius tekukan, semakin kecil risiko retak. Radius kecil yang menyebabkan retak karena regangan tinggi.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["曲げ半径", "割れ", "鋼板", "曲げ加工", "スプリングバック"],
      corePoint: "Logika tekukan: Radius besar = regangan permukaan rendah = aman. Radius kecil = regangan tinggi = retak. Ini hukum dasar metal forming.",
      trap: "Kebalik! Kebanyakan orang mengira semakin dilengkungkan semakin patah, padahal semakin tajam tekukan (radius kecil) semakin besar kemungkinan retak.",
      mnemonic: "Radius Besar = Rileks. Radius Kecil = Stress. Retak terjadi karena stress, bukan karena rileks.",
      whyOthersWrong: {
        A: "SALAH. Hubungannya terbalik: semakin kecil radius, semakin tinggi risiko retak."
      }
    }
  },

  // ===== SOAL 23 =====
  {
    id: "1-23",
    set: 1,
    number: 23,
    category: "材料",
    subCategory: "機械的性質",
    type: "true-false",
    questionJP: "材料に力を加えたときの変形が、力をゆるめると、元に戻る性質を弾性という。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Definisi elastisitas: kemampuan material kembali ke bentuk semula setelah gaya dihilangkan.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["弾性", "塑性", "変形", "材料力学"],
      corePoint: "Elastisitas (elasticity): Kembali ke bentuk semula seperti karet gelang. Lawannya adalah Plastisitas (plasticity): Tidak kembali ke bentuk semula (seperti tanah liat).",
      trap: "Jangan tertukar dengan 塑性 (plastisitas). Jika gaya dihilangkan tapi benda tetap berubah bentuk, itu plastis, bukan elastis.",
      mnemonic: "Elastis = Elastis (Karet). Plastis = Plastisin (Malam). Karet kembali, malam tidak.",
      whyOthersWrong: {
        B: "SALAH. Ini definisi yang tepat untuk 弾性 (elastisitas)."
      }
    }
  },

  // ===== SOAL 24 =====
  {
    id: "1-24",
    set: 1,
    number: 24,
    category: "測定",
    subCategory: "校正",
    type: "true-false",
    questionJP: "測定器は買ったときの校正証明書があれば、定期的な校正の必要はない。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Kalibrasi harus dilakukan secara berkala. Sertifikat awal tidak berlaku selamanya karena alat ukur bisa berubah seiring waktu dan pemakaian.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["校正", "証明書", "定期校正", "トレーサビリティ"],
      corePoint: "Alat ukur mengalami drift (penyimpangan) seiring waktu. Kalibrasi berkala memastikan akurasi tetap terjaga. Sertifikat awal hanya berlaku saat itu.",
      trap: "Sertifikat bukan jaminan seumur hidup. Ibarat SIM, harus diperpanjang secara periodik.",
      mnemonic: "Kalibrasi = Cek Kesehatan Alat. Harus rutin, bukan cuma sekali lahir.",
      whyOthersWrong: {
        A: "SALAH. Kalibrasi bersifat periodik, tidak cukup hanya sekali di awal."
      }
    }
  },

  // ===== SOAL 25 =====
  {
    id: "1-25",
    set: 1,
    number: 25,
    category: "測定",
    subCategory: "ノギス",
    type: "true-false",
    questionJP: "ノギスは、スライダを閉じたときに外側用ジョウや内側用ジョウにすき間があっても問題はない。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Jika ada celah saat ditutup, berarti jangka sorong tidak akurat dan perlu diperbaiki/dikalibrasi.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["ノギス", "ジョウ", "すき間", "零点調整"],
      corePoint: "Titik nol jangka sorong harus sempurna rapat. Jika ada celah (gap), semua pengukuran akan salah karena ada offset.",
      trap: "Sekecil apapun celahnya, itu adalah kesalahan sistematis (systematic error) yang mempengaruhi seluruh hasil ukur.",
      mnemonic: "Rapat = Akurat. Celah = Cacat. Nol harus nol.",
      whyOthersWrong: {
        A: "SALAH. Celah pada jangka sorong menandakan kerusakan atau keausan yang harus segera diperbaiki."
      }
    }
  },

  // ===== SOAL 26 =====
  {
    id: "1-26",
    set: 1,
    number: 26,
    category: "測定",
    subCategory: "マイクロメータ",
    type: "true-false",
    questionJP: "マイクロメータで測定する前に、測定面の両面を清潔な布で拭き取る。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Membersihkan permukaan ukur mikrometer sebelum pakai adalah prosedur yang benar agar hasil akurat.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["マイクロメータ", "測定面", "清掃", "塵埃"],
      corePoint: "Debu atau kotoran pada anvil/spindle bisa menyebabkan kesalahan pengukuran hingga puluhan mikron. Kebersihan adalah kunci akurasi.",
      trap: "Jangan menggunakan kain kotor atau abrasif yang justru menggores permukaan ukur. Gunakan kain lembut dan bersih.",
      mnemonic: "Mikrometer = Alat Presisi. Kotoran = Musuh Presisi.",
      whyOthersWrong: {
        B: "SALAH. Membersihkan sebelum mengukur adalah prosedur standar yang benar."
      }
    }
  },

  // ===== SOAL 27 =====
  {
    id: "1-27",
    set: 1,
    number: 27,
    category: "電気",
    subCategory: "電流測定",
    type: "true-false",
    questionJP: "抵抗に流れる電流を測定するときは、図のように電流計を抵抗と並列に接続する。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Amperemeter harus dipasang SERI, bukan paralel. Jika paralel, bisa terjadi korsleting dan amperemeter rusak.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["電流計", "並列", "直列", "短絡", "内部抵抗"],
      corePoint: "Aturan mutlak: Ammeter = SERI (memotong rangkaian), Voltmeter = PARALEL (menempel di dua titik). Jika ammeter diparalel, resistansi rendahnya menyebabkan arus besar langsung melaluinya → rusak/terbakar.",
      trap: "Jangan tertukar! Ini adalah soal jebakan klasik. Seringkali gambar diperlihatkan dengan sengaja salah untuk mengetes pemahaman.",
      mnemonic: "AmpSERI (Ampere Seri), VoltPar (Volt Paralel).",
      whyOthersWrong: {
        A: "SALAH. Amperemeter harus dipasang secara seri. Gambar soal menunjukkan pemasangan paralel yang salah."
      }
    }
  },

  // ===== SOAL 28 =====
  {
    id: "1-28",
    set: 1,
    number: 28,
    category: "測定",
    subCategory: "マイクロメータ",
    type: "true-false",
    questionJP: "一般的な副尺なしのマイクロメータの最小読取値は、0.01ｍｍである。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "A",
    explanationID: "Mikrometer standar (tanpa vernier/nonius tambahan) memiliki ketelitian 0,01 mm.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["マイクロメータ", "最小読取値", "0.01mm", "精度"],
      corePoint: "Mikrometer luar standar memiliki akurasi 0.01mm (seperseratus). Ada mikrometer khusus dengan akurasi 0.001mm yang menggunakan skala vernier tambahan.",
      trap: "Jangan tertukar dengan jangka sorong (ノギス) yang biasanya 0.05mm atau 0.02mm. Mikrometer 10x lebih presisi.",
      mnemonic: "Mikrometer = 0.01mm. Mikron = 0.001mm. Dua digit di belakang koma.",
      whyOthersWrong: {
        B: "SALAH. Mikrometer standar memang memiliki ketelitian 0.01mm."
      }
    }
  },

  // ===== SOAL 29 =====
  {
    id: "1-29",
    set: 1,
    number: 29,
    category: "図面",
    subCategory: "投影法",
    type: "true-false",
    questionJP: "日本産業規格（ＪＩＳ）の機械製図によれば、下の図の記号は第三角法を示す。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Simbol pada soal bukan simbol第三角法. Simbol第三角法 adalah kerucut terpotong dengan pandangan depan di kiri dan kanan. Jika berbeda, kemungkinan itu第一角法.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["第三角法", "第一角法", "投影法", "JIS製図"],
      corePoint: "Perbedaan: 第三角法 (Third Angle) = Pandangan kanan di kanan, atas di atas (Simbol: Kerucut terpotong dengan lingkaran di kiri). 第一角法 (First Angle) = Pandangan kanan di kiri (Simbol: Kerucut dengan lingkaran di kanan). Jepang & AS pakai Third Angle.",
      trap: "Soal sering menampilkan simbol第一角法 tapi menyebutnya第三角法. Perhatikan posisi lingkaran pada simbol kerucut: jika lingkaran di kanan →第一角法.",
      mnemonic: "Third Angle = Kanan di Kanan (Seperti orang Jepang membaca: dari kanan?). Cek posisi lingkaran di simbol kerucut.",
      whyOthersWrong: {
        A: "SALAH. Simbol yang ditampilkan bukan simbol第三角法."
      }
    }
  },

  // ===== SOAL 30 =====
  {
    id: "1-30",
    set: 1,
    number: 30,
    category: "図面",
    subCategory: "公差",
    type: "true-false",
    questionJP: "はめあい公差を表すΦ30ｈ7 は、穴の寸法である。",
    options: [
      { label: "A", text: "正しい" },
      { label: "B", text: "間違っている" }
    ],
    answer: "B",
    explanationID: "Huruf kecil 'h' pada simbol toleransi menunjukkan poros (shaft). Huruf besar 'H' untuk lubang (hole).",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["はめあい", "公差", "h7", "穴", "軸"],
      corePoint: "Kode ISO untuk suaian: Huruf BESAR (A-Z) = LUBANG (Hole), Huruf KECIL (a-z) = POROS (Shaft). h7 adalah toleransi poros, H7 adalah toleransi lubang.",
      trap: "Jangan hanya melihat angkanya (7). Kuncinya adalah huruf: h = poros, H = lubang. Φ30H7 adalah lubang, Φ30h7 adalah poros.",
      mnemonic: "Huruf Kecil = Poros (Kecil). Huruf Besar = Lubang (Besar). PK - LB.",
      whyOthersWrong: {
        A: "SALAH. h (huruf kecil) adalah simbol toleransi untuk poros (shaft), bukan lubang (hole)."
      }
    }
  },
  
    // ===== SOAL 31 =====
  {
    id: "1-31",
    set: 1,
    number: 31,
    category: "安全衛生",
    subCategory: "保護具",
    type: "multiple-choice",
    questionJP: "ガス切断作業を行う場合に最も適した服装と保護具を選びなさい。",
    options: [
      { label: "A", text: "ガス切断用遮光めがね、防塵マスクの着用、革手袋" },
      { label: "B", text: "ガス切断用遮光めがね、防塵マスクの着用、革手袋、袖まくり" },
      { label: "C", text: "ガス切断用遮光めがね、防塵マスクの着用、軍手" },
      { label: "D", text: "ガス切断用遮光めがね、防塵マスクの着用、素手" }
    ],
    answer: "A",
    explanationID: "Kacamata las gas, masker debu, sarung tangan kulit — semua tepat. Sarung tangan kulit tahan panas dan percikan api. Sleeve digulung (袖まくり) berbahaya, sarung tangan katun (軍手) mudah terbakar, tangan telanjang (素手) sangat berbahaya.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["ガス切断", "保護具", "革手袋", "遮光めがね", "袖まくり"],
      corePoint: "Gas cutting menghasilkan percikan api, panas tinggi, dan asap. APD wajib: Kacamata khusus las gas (bukan kacamata biasa), masker debu, sarung tangan KULIT (bukan katun). Kulit = tahan panas & api. Katun = mudah terbakar.",
      trap: "Hati-hati: 袖まくり (lengan digulung) justru berbahaya karena membuka kulit. 軍手 (sarung tangan katun) bisa terbakar. Selalu pilih KULIT untuk pekerjaan panas.",
      mnemonic: "Gas Cutting = PANAS. Kulit melindungi, katun membakar.",
      whyOthersWrong: {
        B: "袖まくり membuka kulit ke percikan api — SALAH.",
        C: "軍手 (katun) mudah terbakar — SALAH.",
        D: "素手 sangat berbahaya — SALAH."
      }
    }
  },

  // ===== SOAL 32 =====
  {
    id: "1-32",
    set: 1,
    number: 32,
    category: "安全衛生",
    subCategory: "労働安全衛生法",
    type: "multiple-choice",
    questionJP: "労働安全衛生法が作られた主な目的は、快適な職場環境を形成することである。もう一つの目的を選びなさい。",
    options: [
      { label: "A", text: "合図をしっかり行い安全を確保する" },
      { label: "B", text: "ヘルメットを着用して安全を確保する" },
      { label: "C", text: "メガネ、マスクをかけて健康を確保する" },
      { label: "D", text: "労働者の安全と健康を確保する" }
    ],
    answer: "D",
    explanationID: "UU Keselamatan dan Kesehatan Kerja bertujuan menjamin keselamatan dan kesehatan pekerja serta menciptakan lingkungan kerja yang nyaman.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["労働安全衛生法", "目的", "安全", "健康", "快適職場"],
      corePoint: "Dua pilar utama UU K3 Jepang: (1) Menjamin keselamatan & kesehatan pekerja, (2) Menciptakan lingkungan kerja yang nyaman. Pilihan A/B/C adalah contoh tindakan spesifik, bukan tujuan utama undang-undang.",
      trap: "Jangan terjebak memilih tindakan operasional (helm, kacamata) sebagai tujuan. Tujuannya adalah JAMINAN KESELAMATAN secara menyeluruh.",
      mnemonic: "Tujuan UU K3 = Safety + Health + Comfort. Bukan sekadar pakai APD.",
      whyOthersWrong: {
        A: "Ini contoh tindakan, bukan tujuan utama UU.",
        B: "Ini contoh tindakan, bukan tujuan utama UU.",
        C: "Ini contoh tindakan, bukan tujuan utama UU."
      }
    }
  },

  // ===== SOAL 33 =====
  {
    id: "1-33",
    set: 1,
    number: 33,
    category: "品質管理",
    subCategory: "QCツール",
    type: "multiple-choice",
    questionJP: "下の図の名前として正しいものを選びなさい。",
    options: [
      { label: "A", text: "管理図" },
      { label: "B", text: "ダイアグラム" },
      { label: "C", text: "特性要因図" },
      { label: "D", text: "チェックシート" }
    ],
    answer: "D",
    explanationID: "Gambar menunjukkan check sheet (チェックシート), yaitu lembar centang untuk mengumpulkan data.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["チェックシート", "QC7つ道具", "データ収集"],
      corePoint: "Check sheet adalah formulir sederhana untuk mencatat data secara terstruktur. Ciri khas: tabel dengan kolom centang (✓). Bukan grafik, bukan diagram tulang ikan.",
      trap: "Jangan tertukar dengan 管理図 (control chart) yang punya garis batas UCL/LCL, atau 特性要因図 (fishbone) yang bentuknya seperti tulang ikan.",
      mnemonic: "Check sheet = Checklist. Ada kotak-kotak untuk dicentang. Paling sederhana dari 7 tools.",
      whyOthersWrong: {
        A: "管理図 punya grafik garis dengan batas kendali.",
        B: "ダイアグラム terlalu umum, bukan nama spesifik.",
        C: "特性要因図 berbentuk tulang ikan (fishbone)."
      }
    }
  },

  // ===== SOAL 34 =====
  {
    id: "1-34",
    set: 1,
    number: 34,
    category: "品質管理",
    subCategory: "検査",
    type: "multiple-choice",
    questionJP: "同じ条件で製作されたロットの中から、ランダムに選んで行う検査はどれか。",
    options: [
      { label: "A", text: "抜取検査" },
      { label: "B", text: "全数検査" },
      { label: "C", text: "ロット検査" },
      { label: "D", text: "無検査" }
    ],
    answer: "A",
    explanationID: "Sampling inspection (抜取検査) mengambil sampel acak dari lot untuk diperiksa.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["抜取検査", "サンプリング", "ロット", "ランダム"],
      corePoint: "抜取検査 (Sampling): Ambil sebagian secara acak → periksa → simpulkan kualitas lot. Lebih ekonomis untuk produksi massal. Lawannya: 全数検査 (100% inspection).",
      trap: "Jangan bingung dengan istilah 'ロット検査' yang kurang spesifik. Istilah baku adalah 抜取検査 atau 全数検査.",
      mnemonic: "Random = Acak = Sampling = 抜取.",
      whyOthersWrong: {
        B: "全数検査 adalah memeriksa SEMUA, bukan random sampling.",
        C: "ロット検査 bukan istilah baku spesifik.",
        D: "無検査 berarti tidak ada pemeriksaan sama sekali."
      }
    }
  },

  // ===== SOAL 35 =====
  {
    id: "1-35",
    set: 1,
    number: 35,
    category: "品質管理",
    subCategory: "外観検査",
    type: "multiple-choice",
    questionJP: "外観検査を行ったときに、合格か不合格か判断が難しい製造品を発見した。対処方法として間違っているものはどれか。",
    options: [
      { label: "A", text: "上司へ連絡した" },
      { label: "B", text: "専門部署へ連絡した" },
      { label: "C", text: "自分で判断し合格とした" },
      { label: "D", text: "図面を確認した" }
    ],
    answer: "C",
    explanationID: "Jika ragu-ragu, tidak boleh memutuskan sendiri. Harus konsultasi ke atasan atau departemen terkait.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["外観検査", "判断", "上司", "確認", "自己判断"],
      corePoint: "Prinsip Kualitas: Jika ragu, STOP dan KONSULTASI. Jangan pernah memutuskan sendiri (自己判断) jika ada keraguan karena risiko mengirim produk cacat ke pelanggan.",
      trap: "Mengambil keputusan sendiri saat ragu adalah pelanggaran serius. Selalu libatkan pihak yang lebih berwenang atau ahli.",
      mnemonic: "Ragu = Tanya. Jangan sok tahu.",
      whyOthersWrong: {
        A: "Benar — konsultasi ke atasan.",
        B: "Benar — konsultasi ke departemen terkait.",
        D: "Benar — cek spesifikasi di gambar teknik."
      }
    }
  },

  // ===== SOAL 36 =====
  {
    id: "1-36",
    set: 1,
    number: 36,
    category: "測定",
    subCategory: "ノギス読み取り",
    type: "multiple-choice",
    questionJP: "ノギスで寸法を測定したとき、本尺と副尺の交点は下の図の①の点であった。読み取れる寸法を選びなさい。",
    options: [
      { label: "A", text: "10.75" },
      { label: "B", text: "13.75" },
      { label: "C", text: "43" },
      { label: "D", text: "47.5" }
    ],
    answer: "B",
    explanationID: "Pembacaan: Skala utama sebelum nol nonius = 13mm, garis nonius ke-75 segaris = 0.75mm. Total = 13.75mm.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["ノギス", "本尺", "副尺", "読み取り", "バーニア"],
      corePoint: "Cara membaca: (1) Cari angka nol skala nonius pada skala utama → dapat mm bulat. (2) Cari garis nonius yang SEGARIS dengan garis skala utama → kali ketelitian (0.05mm). (3) Jumlahkan.",
      trap: "Jangan membaca skala utama di garis nonius pertama. Baca di GARIS NOL nonius.",
      mnemonic: "Baca Nol dulu (skala utama), baru cari yang LURUS (skala nonius). Nol + Lurus = Hasil.",
      whyOthersWrong: {
        A: "Salah baca skala utama atau nonius.",
        C: "Mungkin membaca di posisi yang salah.",
        D: "Mungkin membaca di posisi yang salah."
      }
    }
  },

  // ===== SOAL 37 =====
  {
    id: "1-37",
    set: 1,
    number: 37,
    category: "測定",
    subCategory: "単位変換",
    type: "multiple-choice",
    questionJP: "10ｍｍは何μｍか。",
    options: [
      { label: "A", text: "1000μｍ" },
      { label: "B", text: "10000μｍ" },
      { label: "C", text: "100000μｍ" },
      { label: "D", text: "1000000μｍ" }
    ],
    answer: "B",
    explanationID: "1 mm = 1000 μm. 10 mm = 10 × 1000 = 10000 μm.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["単位変換", "mm", "μm", "マイクロメートル"],
      corePoint: "Tangga satuan metrik: mm → μm = kali 1000. 1 mm = 1000 μm. Jadi 10 mm = 10.000 μm. Ingat: mikro (μ) = 10^-6, mili (m) = 10^-3. Selisih 10^3.",
      trap: "Hati-hati dengan jumlah nol! 10 × 1000 = 10.000 (empat nol di belakang), bukan 100.000 atau 1.000.000.",
      mnemonic: "mm ke μm = TAMBAH 3 NOL. 10 + 000 = 10.000.",
      whyOthersWrong: {
        A: "Ini 1 mm = 1000 μm.",
        C: "Ini 100 mm = 100.000 μm.",
        D: "Ini 1000 mm = 1.000.000 μm."
      }
    }
  },

  // ===== SOAL 38 =====
  {
    id: "1-38",
    set: 1,
    number: 38,
    category: "測定",
    subCategory: "測定器選択",
    type: "multiple-choice",
    questionJP: "部品の図面寸法がΦ45の内径を測定するときに、最も精度が高い測定器を選びなさい。",
    options: [
      { label: "A", text: "ノギス" },
      { label: "B", text: "定規" },
      { label: "C", text: "シリンダーゲージ" },
      { label: "D", text: "内パス" }
    ],
    answer: "C",
    explanationID: "Cylinder gauge (bore gauge) khusus untuk diameter dalam dengan ketelitian tinggi (bisa 0.001mm), paling tepat untuk Φ45.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["シリンダーゲージ", "内径測定", "Φ45", "精度"],
      corePoint: "Untuk lubang presisi (Φ45), urutan akurasi: Cylinder Gauge > Inside Micrometer > Dial Bore Gauge > Caliper > Penggaris. Cylinder gauge bisa akurat hingga 0.001mm.",
      trap: "Jangan pilih ノギス (0.05mm) atau 内パス (alat bantu yang harus dipindahkan ke mikrometer). Untuk diameter dalam presisi, selalu cylinder gauge.",
      mnemonic: "Silinder = Lubang = Cylinder Gauge. Paling presisi untuk lubang.",
      whyOthersWrong: {
        A: "ノギス ketelitian rendah (0.05mm), tidak cocok untuk Φ45 presisi.",
        B: "定規 sangat tidak presisi untuk diameter dalam.",
        D: "内パス adalah alat transfer, bukan alat ukur langsung."
      }
    }
  },

  // ===== SOAL 39 =====
  {
    id: "1-39",
    set: 1,
    number: 39,
    category: "図面",
    subCategory: "組立図",
    type: "multiple-choice",
    questionJP: "機械図面における組立図の説明として適切なものを選びなさい。",
    options: [
      { label: "A", text: "販売検討に使う図面である" },
      { label: "B", text: "工場の機械配置に使う図面である" },
      { label: "C", text: "部品加工に使う図面である" },
      { label: "D", text: "部品の組付けに使う図面である" }
    ],
    answer: "D",
    explanationID: "組立図 (assembly drawing) digunakan untuk merakit/menyusun komponen.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["組立図", "部品", "組付け", "図面"],
      corePoint: "Jenis gambar teknik: (1) 部品図 (Part drawing): Untuk membuat satu komponen. (2) 組立図 (Assembly drawing): Untuk merakit komponen jadi satu. (3) 配置図 (Layout): Tata letak pabrik.",
      trap: "Jangan tertukar: 部品加工 = Part drawing (C), 組付け = Assembly drawing (D). Kata kunci '組立' = assembly.",
      mnemonic: "組立 = Rakit = Assembly = Gambar yang menunjukkan cara menyatukan.",
      whyOthersWrong: {
        A: "Itu gambar presentasi/katalog, bukan 組立図.",
        B: "Itu layout drawing, bukan 組立図.",
        C: "Itu 部品図 (part drawing), bukan 組立図."
      }
    }
  },

  // ===== SOAL 40 =====
  {
    id: "1-40",
    set: 1,
    number: 40,
    category: "図面",
    subCategory: "寸法線",
    type: "multiple-choice",
    questionJP: "次の寸法線の中で、弧の角度を表しているものを選びなさい。",
    options: [
      { label: "A", text: "（図A）" },
      { label: "B", text: "（図B）" },
      { label: "C", text: "（図C）" },
      { label: "D", text: "（図D）" }
    ],
    answer: "B",
    explanationID: "Dimensi sudut busur ditunjukkan dengan garis dimensi berbentuk busur (melengkung) dengan simbol derajat (°).",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["寸法線", "弧の角度", "製図", "JIS"],
      corePoint: "Dalam gambar teknik, sudut busur ditandai dengan garis dimensi MELENGKUNG mengikuti radius, dengan simbol °. Garis lurus untuk panjang, garis lengkung untuk sudut busur.",
      trap: "Jangan bingung dengan garis radius (R) yang juga melengkung tapi ada simbol R, bukan derajat.",
      mnemonic: "Sudut = ° = Garis Melengkung. Panjang = mm = Garis Lurus.",
      whyOthersWrong: {
        A: "Mungkin garis lurus, bukan untuk sudut.",
        C: "Mungkin garis radius (R), bukan sudut.",
        D: "Mungkin simbol dimensi lain."
      }
    }
  },
  
    // ===== SET 2 - SOAL 1 =====
  {
    id: "2-1",
    set: 2,
    number: 1,
    category: "安全衛生",
    subCategory: "現場行動",
    type: "multiple-choice",
    questionJP: "現場において、作業を安全に効率よく行うための正しい行動はどれか。",
    options: [
      { label: "A", text: "指示内容を聞かないで、すぐに作業を始める" },
      { label: "B", text: "作業に必要なものの置き場所を決めておく" },
      { label: "C", text: "作業に使わない機器、工具、部品も、念の為に作業周辺の場所に置いておく" },
      { label: "D", text: "作業開始前に点検を行わず、すぐに作業を始める" }
    ],
    answer: "B",
    explanationID: "Menentukan tempat penyimpanan = bagian dari 整理整頓 (5S), meningkatkan efisiensi & keselamatan. Pilihan A, C, D adalah tindakan tidak aman.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["整理整頓", "5S", "効率", "安全行動", "置き場所"],
      corePoint: "Prinsip 5S: segala sesuatu punya tempatnya. Menentukan lokasi penyimpanan (整頓) mencegah waktu terbuang mencari alat dan menghindari bahaya tersandung.",
      trap: "Pilihan C terlihat 'berjaga-jaga', padahal menaruh barang tidak perlu di area kerja justru menciptakan hazard (bahaya tersandung, tertimpa).",
      mnemonic: "Tempat yang pasti = Kerja efisien. Barang tak terpakai = Bahaya.",
      whyOthersWrong: {
        A: "Tidak mendengar instruksi = mengabaikan prosedur keselamatan.",
        C: "Barang tidak perlu mengganggu dan menciptakan risiko kecelakaan.",
        D: "Melewatkan inspeksi awal sangat berbahaya."
      }
    }
  },

  // ===== SET 2 - SOAL 2 =====
  {
    id: "2-2",
    set: 2,
    number: 2,
    category: "安全衛生",
    subCategory: "危険回避",
    type: "multiple-choice",
    questionJP: "下のような状況で行われる作業の安全性について考える。表の空欄①～④に入る語句の正しい組み合わせを選びなさい。",
    options: [
      { label: "A", text: "①転倒 ②整理・整頓 ③素手 ④皮手袋" },
      { label: "B", text: "①故障 ②点検 ③素手 ④エプロン" },
      { label: "C", text: "①転倒 ②点検 ③一人 ④防塵マスク" },
      { label: "D", text: "①破損 ②立入禁止 ③一人 ④皮手袋" }
    ],
    answer: "A",
    explanationID: "①転倒 (tersandung), ②整理・整頓 (5S), ③素手 (tangan kosong), ④皮手袋 (sarung tangan kulit).",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["転倒", "整理整頓", "素手", "皮手袋", "危険回避"],
      corePoint: "Tabel hazard: (1) Barang di lantai → tersandung → 整理整頓. (2) Bekerja tanpa sarung tangan → tangan terluka kena rantai → pakai 皮手袋.",
      trap: "Jangan pilih 故障 (kerusakan mesin) — itu bukan akibat dari barang di lantai. Akibat barang di lantai adalah 転倒 (tersandung jatuh).",
      mnemonic: "Lantai berantakan = Jatuh. Tangan kosong = Luka. Solusi: Rapi & Sarung Tangan.",
      whyOthersWrong: {
        B: "故障 bukan akibat dari kondisi lantai yang berantakan.",
        C: "点検 dan 防塵マスク tidak sesuai konteks.",
        D: "破損 dan 立入禁止 tidak sesuai dengan situasi."
      }
    }
  },

  // ===== SET 2 - SOAL 3 =====
  {
    id: "2-3",
    set: 2,
    number: 3,
    category: "安全衛生",
    subCategory: "KYT",
    type: "multiple-choice",
    questionJP: "ＫＹＴ（危険予知訓練）４ラウンド法の進め方として、正しい順序は次のうちどれか。",
    options: [
      { label: "A", text: "現状の把握 → 目標の設定 → 対策の立案 → 要因の発見" },
      { label: "B", text: "現状の把握 → 要因の発見 → 対策の立案 → 目標の設定" },
      { label: "C", text: "目標の設定 → 現状の把握 → 要因の発見 → 対策の立案" },
      { label: "D", text: "目標の設定 → 要因の発見 → 対策の立案 → 現状の把握" }
    ],
    answer: "B",
    explanationID: "KYT 4ラウンド法: 1R=現状把握 (Ada apa?), 2R=要因発見 (Ini bahayanya!), 3R=対策立案 (Kita lakukan ini!), 4R=目標設定 (Kita lakukan!).",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["KYT", "危険予知訓練", "4ラウンド法", "順序"],
      corePoint: "Urutan KYT: Lihat (現状) → Temukan (要因) → Rencanakan (対策) → Targetkan (目標). Singkatan: L-T-R-T (Lihat, Temukan, Rencanakan, Targetkan).",
      trap: "Jangan mulai dari 目標設定 dulu! Harus lihat dulu apa yang terjadi di lapangan (現状把握) baru bisa menemukan bahaya.",
      mnemonic: "KYT = 現→要→対→目. 'Gen-Yo-Tai-Me' (現状→要因→対策→目標).",
      whyOthersWrong: {
        A: "目標設定 sebelum 対策立案 — salah urutan.",
        C: "目標設定 di awal — tidak logis, harus lihat dulu.",
        D: "目標設定 di awal, 現状把握 di akhir — urutan terbalik."
      }
    }
  },

  // ===== SET 2 - SOAL 4 =====
  {
    id: "2-4",
    set: 2,
    number: 4,
    category: "安全衛生",
    subCategory: "法令",
    type: "multiple-choice",
    questionJP: "労働安全衛生法関係法令に関する文章として、間違っているものはどれか。",
    options: [
      { label: "A", text: "手押しかんな削り盤には、刃の接触予防装置を設けなければならない" },
      { label: "B", text: "木材加工用丸のこ切盤には、危険を及ぼすおそれのないものを除き、割刃その他の反発予防装置を設けなければならない" },
      { label: "C", text: "構内運搬車を使って作業を行うときは、作業開始前に始業前点検を行わなければならない" },
      { label: "D", text: "フォークリフトの運転者が一時的に運転位置から離れるときは、フォークを最低降下位置まで下げなくてもよい" }
    ],
    answer: "D",
    explanationID: "Meninggalkan forklift harus menurunkan fork ke posisi terendah. Ini aturan keselamatan yang mutlak.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["フォークリフト", "フォーク", "最低降下", "安全規則"],
      corePoint: "Saat meninggalkan forklift: (1) Fork harus diturunkan ke posisi terendah, (2) Rem parkir diaktifkan, (3) Engine dimatikan. Forklift yang ditinggalkan dengan fork terangkat bisa menyebabkan kecelakaan fatal jika fork tiba-tiba turun.",
      trap: "Jangan anggap remeh. Forklift adalah alat berat. Fork yang masih terangkat saat ditinggalkan sangat berbahaya — bisa menusuk orang atau jatuh menimpa.",
      mnemonic: "Tinggalkan Forklift = Fork Turun. 'Down before you go.'",
      whyOthersWrong: {
        A: "Benar — jointer harus ada pelindung blade.",
        B: "Benar — circular saw wajib pakai riving knife.",
        C: "Benar — kendaraan angkut wajib inspeksi awal."
      }
    }
  },

  // ===== SET 2 - SOAL 5 =====
  {
    id: "2-5",
    set: 2,
    number: 5,
    category: "安全衛生",
    subCategory: "資格と安全",
    type: "multiple-choice",
    questionJP: "下記の文章において正しいものはどれか。",
    options: [
      { label: "A", text: "玉掛け作業に必要な資格とクレーン作業に必要な資格は別の資格である" },
      { label: "B", text: "騒音の激しい作業現場では、設備の異常音や他の作業者の声などが聞こえにくいため、耳栓などは使用しない方がよい" },
      { label: "C", text: "回転駆動部は、低速であれば危険がないため機械を停止せず保全等の作業をしてもよい" },
      { label: "D", text: "ボール盤など回転工具においては、切り粉などで怪我をする可能性がある為、必ず軍手を着用する" }
    ],
    answer: "A",
    explanationID: "玉掛け (rigging) dan クレーン (crane operation) adalah dua kualifikasi berbeda. B: earplug wajib. C: mesin harus dihentikan. D: sarung tangan katun berbahaya di mesin berputar.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["玉掛け", "クレーン", "資格", "軍手", "耳栓"],
      corePoint: "Jepang memisahkan lisensi: (1) 玉掛け技能講習 — untuk mengikat/mengaitkan beban ke crane. (2) クレーン運転士 — untuk mengoperasikan crane. Dua skill berbeda = dua lisensi berbeda.",
      trap: "Pilihan D (pakai 軍手 saat mengebor) justru BAHAYA! Sarung tangan katun bisa tersangkut mata bor dan menarik tangan. Untuk mesin berputar, TIDAK BOLEH pakai sarung tangan atau pakai yang khusus sobek.",
      mnemonic: "玉掛け ≠ クレーン. Dua lisensi. 軍手 di bor = 危険.",
      whyOthersWrong: {
        B: "SALAH — earplug WAJIB di tempat bising.",
        C: "SALAH — mesin HARUS dihentikan untuk maintenance.",
        D: "SALAH — 軍手 BERBAHAYA di mesin berputar."
      }
    }
  },

  // ===== SET 2 - SOAL 6 =====
  {
    id: "2-6",
    set: 2,
    number: 6,
    category: "品質管理",
    subCategory: "QCツール",
    type: "multiple-choice",
    questionJP: "下の図の名称として正しいものを選びなさい。",
    options: [
      { label: "A", text: "特性要因図" },
      { label: "B", text: "散布図" },
      { label: "C", text: "ヒストグラム" },
      { label: "D", text: "管理図" }
    ],
    answer: "A",
    explanationID: "Gambar adalah diagram tulang ikan (fishbone / 特性要因図) untuk analisis sebab-akibat.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["特性要因図", "フィッシュボーン", "石川ダイアグラム", "QC"],
      corePoint: "特性要因図 (Fishbone/Ishikawa): Bentuk seperti tulang ikan. Kepala = masalah/akibat. Tulang besar = kategori penyebab (4M: Man, Machine, Material, Method). Digunakan untuk brainstorming akar masalah.",
      trap: "Jangan tertukar dengan 散布図 (titik-titik) atau 管理図 (grafik garis dengan batas). Ciri khas fishbone: bentuk TULANG IKAN.",
      mnemonic: "Fishbone = Tulang Ikan = 特性要因図. 'Tulang' untuk mencari 'penyebab'.",
      whyOthersWrong: {
        B: "散布図 adalah diagram titik (scatter plot).",
        C: "ヒストグラム adalah grafik batang distribusi.",
        D: "管理図 adalah grafik garis dengan batas kendali."
      }
    }
  },

  // ===== SET 2 - SOAL 7 =====
  {
    id: "2-7",
    set: 2,
    number: 7,
    category: "品質管理",
    subCategory: "三現主義",
    type: "multiple-choice",
    questionJP: "三現主義とは、３つの“現”を大事にする考え方である。三現主義と関係のないものを選びなさい。",
    options: [
      { label: "A", text: "現物 (かならず現物を手に取る)" },
      { label: "B", text: "現場 (かならず現場で確認する)" },
      { label: "C", text: "現職 (現在の職務を大切にする)" },
      { label: "D", text: "現実 (現実を自分の目で確認する)" }
    ],
    answer: "C",
    explanationID: "三現主義: 現場 (Genba), 現物 (Genbutsu), 現実 (Genjitsu). 現職 bukan bagian dari三現主義.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["三現主義", "現場", "現物", "現実", "現職"],
      corePoint: "三現 = Genba (tempat), Genbutsu (barang), Genjitsu (fakta). Pergi ke lokasi, pegang barangnya, lihat faktanya sendiri. 現職 (jabatan sekarang) BUKAN bagian dari filosofi ini.",
      trap: "現職 terdengar mirip tapi artinya 'jabatan saat ini' — tidak ada hubungannya dengan prinsip investigasi lapangan.",
      mnemonic: "3-Gen: Gen-BA, Gen-BU, Gen-JI. Tidak ada Gen-SHO (jabatan).",
      whyOthersWrong: {
        A: "現物 adalah salah satu dari 3-Gen.",
        B: "現場 adalah salah satu dari 3-Gen.",
        D: "現実 adalah salah satu dari 3-Gen."
      }
    }
  },

  // ===== SET 2 - SOAL 8 =====
  {
    id: "2-8",
    set: 2,
    number: 8,
    category: "品質管理",
    subCategory: "グラフ",
    type: "multiple-choice",
    questionJP: "グラフの特徴について間違っているものを選びなさい。",
    options: [
      { label: "A", text: "円グラフ：比率を見る" },
      { label: "B", text: "棒グラフ：相関を比較する" },
      { label: "C", text: "折れ線グラフ：動きを見る" },
      { label: "D", text: "レーダーチャート：バランスを見る" }
    ],
    answer: "B",
    explanationID: "Grafik batang untuk membandingkan jumlah/nilai, BUKAN untuk melihat korelasi. Korelasi dilihat dengan 散布図.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["棒グラフ", "相関", "散布図", "比較"],
      corePoint: "Fungsi grafik: Bar chart = perbandingan KATEGORI. Scatter diagram = KORELASI dua variabel. Jangan tertukar.",
      trap: "Kata '相関' (korelasi) adalah kata kunci untuk SCATTER DIAGRAM, bukan bar chart. Bar chart hanya menunjukkan mana yang lebih besar/kecil.",
      mnemonic: "Bar = Bandingkan. Scatter = Korelasikan. Line = Trend. Pie = Proporsi.",
      whyOthersWrong: {
        A: "Benar — pie chart untuk proporsi.",
        C: "Benar — line chart untuk tren waktu.",
        D: "Benar — radar chart untuk keseimbangan multi-faktor."
      }
    }
  },

  // ===== SET 2 - SOAL 9 =====
  {
    id: "2-9",
    set: 2,
    number: 9,
    category: "品質管理",
    subCategory: "PDCA",
    type: "multiple-choice",
    questionJP: "品質管理の考え方にＰＤＣＡサイクルがある。計画：Ｐ、実施：Ｄ、評価：Ｃ、処置：Ａの説明文の正しい組み合わせを選びなさい。",
    options: [
      { label: "A", text: "③ ④ ② ①" },
      { label: "B", text: "② ④ ① ③" },
      { label: "C", text: "③ ① ② ④" },
      { label: "D", text: "② ① ③ ④" }
    ],
    answer: "B",
    explanationID: "P=② (rencana dari data), D=④ (laksanakan), C=① (cek hasil), A=③ (perbaiki & standarisasi).",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["PDCA", "計画", "実施", "評価", "処置"],
      corePoint: "PDCA: Plan (rencanakan tujuan & metode) → Do (laksanakan rencana) → Check (evaluasi hasil vs target) → Act (standarisasi jika berhasil, perbaiki jika gagal).",
      trap: "Jangan terbalik antara Check dan Act. Check adalah MENGUKUR, Act adalah BERTINDAK atas hasil pengukuran.",
      mnemonic: "PDCA = P-D-C-A. 計画-Do-チェック-Action. Urutan alfabetis!",
      whyOthersWrong: {
        A: "Urutan salah.",
        C: "Urutan salah.",
        D: "Urutan salah."
      }
    }
  },

  // ===== SET 2 - SOAL 10 =====
  {
    id: "2-10",
    set: 2,
    number: 10,
    category: "材料",
    subCategory: "非破壊試験",
    type: "multiple-choice",
    questionJP: "材料を破壊または損傷させないで品質を調べる試験はどれか。",
    options: [
      { label: "A", text: "超音波探傷試験" },
      { label: "B", text: "曲げ試験" },
      { label: "C", text: "衝撃試験" },
      { label: "D", text: "引張試験" }
    ],
    answer: "A",
    explanationID: "Ultrasonic test adalah Non-Destructive Test (NDT). Bend test, impact test, tensile test adalah destructive tests.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["非破壊試験", "NDT", "超音波", "曲げ", "引張"],
      corePoint: "NDT (Non-Destructive Testing): Memeriksa cacat TANPA merusak. Metode: Ultrasonic, X-Ray, Eddy Current, Magnetic Particle, Dye Penetrant. Destructive: Bend, Tensile, Impact — benda kerja dihancurkan.",
      trap: "Kata kunci '破壊しない' = Non-Destructive. Hanya 超音波 yang termasuk NDT di antara pilihan ini.",
      mnemonic: "NDT = Tidak Rusak. Ultrasonic = Suara = Tidak merusak. Bending/Impact/Tensile = Hancur.",
      whyOthersWrong: {
        B: "曲げ試験 = benda ditekuk sampai retak/patah (destruktif).",
        C: "衝撃試験 = benda dipukul sampai patah (destruktif).",
        D: "引張試験 = benda ditarik sampai putus (destruktif)."
      }
    }
  },
  
    // ===== SET 2 - SOAL 11 =====
  {
    id: "2-11",
    set: 2,
    number: 11,
    category: "測定",
    subCategory: "測定器選択",
    type: "multiple-choice",
    questionJP: "図のようなパイプの外径寸法検査を行う場合において、より精度の高い検査器具はどれか。",
    options: [
      { label: "A", text: "バーニア式ノギス" },
      { label: "B", text: "棒形内側マイクロメータ" },
      { label: "C", text: "ダイヤルゲージ" },
      { label: "D", text: "外側マイクロメータ" }
    ],
    answer: "D",
    explanationID: "Untuk diameter luar, 外側マイクロメータ (outside micrometer) memiliki ketelitian tertinggi (0.01mm) dibandingkan jangka sorong (0.05mm). 内側マイクロメータ untuk diameter dalam, ダイヤルゲージ untuk pengukuran perbandingan.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["外径", "マイクロメータ", "ノギス", "精度"],
      corePoint: "Akar masalah: Kita mencari alat ukur kontak paling presisi untuk diameter luar. Urutan presisi: Mikrometer luar (0.01mm) > Jangka sorong (0.05mm) > Dial gauge (alat bantu).",
      trap: "Jangan terkecoh oleh 棒形内側マイクロメータ — itu untuk lubang, bukan untuk luar. Dial gauge hanya mengukur defleksi/perbandingan, bukan diameter absolut secara langsung.",
      mnemonic: "Luar = Outside Micrometer. Dalam = Inside/Bore Micrometer. Jangan terbalik.",
      whyOthersWrong: {
        A: "ノギス presisinya lebih rendah dari mikrometer.",
        B: "Ini untuk diameter dalam, bukan luar.",
        C: "ダイヤルゲージ untuk mengukur perbandingan/run-out, bukan diameter luar secara langsung."
      }
    }
  },

  // ===== SET 2 - SOAL 12 =====
  {
    id: "2-12",
    set: 2,
    number: 12,
    category: "品質管理",
    subCategory: "検査種類",
    type: "multiple-choice",
    questionJP: "次の文章において①～⑤に入る言葉の組み合わせとして正しいものを選びなさい。",
    options: [
      { label: "A", text: "①全数 ②抜取 ③破壊 ④非破壊 ⑤目視" },
      { label: "B", text: "①目視 ②抜取 ③破壊 ④全数 ⑤非破壊" },
      { label: "C", text: "①抜取 ②全数 ③目視 ④破壊 ⑤非破壊" },
      { label: "D", text: "①破壊 ②非破壊 ③目視 ④抜取 ⑤全数" }
    ],
    answer: "D",
    explanationID: "①破壊 (potong, dll) → ②非破壊 (X-ray, dll) → ③目視 (inspeksi visual) → ④抜取 (sampling, karena barang rusak) → ⑤全数 (100% untuk NDT/visual).",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["破壊検査", "非破壊検査", "目視検査", "全数", "抜取"],
      corePoint: "Logika: Tes yang merusak (破壊) hanya bisa dilakukan secara sampling (抜取) karena produk jadi rusak. Tes yang tidak merusak (非破壊/目視) bisa dilakukan 100% (全数).",
      trap: "Jangan terbalik antara 破壊 dan 非破壊. Kata kunci '切断などして' berarti merusak.",
      mnemonic: "Merusak = Sampling. Tidak Merusak = Boleh 100%.",
      whyOthersWrong: {
        A: "Urutan tidak sesuai dengan logika kalimat.",
        B: "Urutan tidak sesuai dengan logika kalimat.",
        C: "Urutan tidak sesuai dengan logika kalimat."
      }
    }
  },

  // ===== SET 2 - SOAL 13 =====
  {
    id: "2-13",
    set: 2,
    number: 13,
    category: "測定",
    subCategory: "膜厚測定",
    type: "multiple-choice",
    questionJP: "下の図は、塗装塗膜の膜厚計での測定例である。表示の膜厚を選びなさい。",
    options: [
      { label: "A", text: "2.32mm" },
      { label: "B", text: "0.30mm" },
      { label: "C", text: "0.22mm" },
      { label: "D", text: "0.022mm" }
    ],
    answer: "B",
    explanationID: "Pembacaan: skala menunjukkan 0.30mm. Perhatikan posisi jarum dan skala yang ditunjukkan.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["膜厚計", "塗装", "読み取り", "目盛"],
      corePoint: "Membaca alat ukur analog: Perhatikan posisi jarum pada skala. Jika jarum menunjuk ke 0.30 pada skala mm, itulah hasilnya. Biasakan membaca dengan posisi mata tegak lurus untuk menghindari kesalahan paralaks.",
      trap: "Hati-hati dengan angka di belakang koma. 0.022mm terlalu tipis untuk cat pada umumnya. 2.32mm terlalu tebal. 0.22mm mungkin, tapi jarum menunjuk ke 0.30.",
      mnemonic: "Baca langsung jarumnya. Jangan ditambah atau dikurangi.",
      whyOthersWrong: {
        A: "2.32mm terlalu tebal, mungkin salah baca skala.",
        C: "0.22mm kurang tepat, jarum menunjukkan 0.30.",
        D: "0.022mm terlalu tipis, mungkin salah membaca satuan."
      }
    }
  },

  // ===== SET 2 - SOAL 14 =====
  {
    id: "2-14",
    set: 2,
    number: 14,
    category: "測定",
    subCategory: "点検",
    type: "multiple-choice",
    questionJP: "下の文章において間違っているものはどれか。",
    options: [
      { label: "A", text: "マイクロメータは０点の点検および調整を行った後にブロックゲージで点検する" },
      { label: "B", text: "ノギスは穴の内径や深さも測定することができる" },
      { label: "C", text: "測定具は校正点検してあれば、使用時に故障や傷などの異常がないか確認する必要はない" },
      { label: "D", text: "マイクロメータの日常点検をする時には「０点」確認を行う" }
    ],
    answer: "C",
    explanationID: "Meskipun sudah dikalibrasi, sebelum pakai TETAP harus dicek kondisi fisik (goresan, kotoran, kerusakan). C salah karena mengatakan tidak perlu.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["校正", "点検", "日常点検", "零点確認"],
      corePoint: "Kalibrasi adalah pengecekan akurasi, bukan jaminan kondisi fisik. Sebelum pakai, WAJIB: (1) Cek fisik (karat, goresan, kotoran), (2) Cek titik nol, (3) Cek gerakan halus. Ini adalah 日常点検.",
      trap: "Pernyataan C terlihat masuk akal tapi SALAH. Kalibrasi dan inspeksi harian adalah dua hal berbeda yang sama-sama wajib.",
      mnemonic: "Kalibrasi = Akurasi. Inspeksi Harian = Kebersihan & Kerusakan. Dua-duanya WAJIB.",
      whyOthersWrong: {
        A: "Benar — cek nol dulu, lalu cek dengan gauge block.",
        B: "Benar — jangka sorong multifungsi (luar, dalam, kedalaman).",
        D: "Benar — cek titik nol adalah prosedur rutin harian."
      }
    }
  },

  // ===== SET 2 - SOAL 15 =====
  {
    id: "2-15",
    set: 2,
    number: 15,
    category: "測定",
    subCategory: "測定方法",
    type: "multiple-choice",
    questionJP: "丸棒の全長をノギスで測定する。正しい測定方法を選びなさい。",
    options: [
      { label: "A", text: "（図A）" },
      { label: "B", text: "（図B）" },
      { label: "C", text: "（図C）" },
      { label: "D", text: "（図D）" }
    ],
    answer: "D",
    explanationID: "Posisi yang benar: round bar sejajar dengan batang utama, jaw tegak lurus di kedua ujung, tidak miring.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["ノギス", "測定方法", "丸棒", "全長"],
      corePoint: "Mengukur panjang: (1) Sejajarkan benda dengan batang utama, (2) Jepit di kedua ujung, (3) Pastikan jaw tegak lurus sempurna (tidak miring). Kemiringan sekecil apapun menyebabkan kesalahan pengukuran (cosine error).",
      trap: "Jangan mengukur diagonal (miring) karena hasilnya akan lebih panjang dari sebenarnya (kesalahan kosinus).",
      mnemonic: "Sejajar = Akurat. Miring = Melenceng.",
      whyOthersWrong: {
        A: "Mungkin posisi miring atau tidak tepat.",
        B: "Mungkin posisi miring atau tidak tepat.",
        C: "Mungkin posisi miring atau tidak tepat."
      }
    }
  },

  // ===== SET 2 - SOAL 16 =====
  {
    id: "2-16",
    set: 2,
    number: 16,
    category: "測定",
    subCategory: "ノギス読み取り",
    type: "multiple-choice",
    questionJP: "ノギスで寸法を測定したところ、本尺目盛と副尺目盛の交点は、下図の①の点であった。読み取れる寸法を選びなさい。",
    options: [
      { label: "A", text: "20.75" },
      { label: "B", text: "23.75" },
      { label: "C", text: "53.00" },
      { label: "D", text: "57.50" }
    ],
    answer: "B",
    explanationID: "Skala utama sebelum nol nonius = 23mm. Garis nonius ke-75 segaris = 0.75mm. Total = 23.75mm.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["ノギス", "読み取り", "本尺", "副尺", "バーニア"],
      corePoint: "Prosedur: (1) Lihat skala utama di sebelah kiri angka NOL nonius = 23mm. (2) Cari garis nonius yang paling LURUS dengan garis skala utama = garis ke-75 (0.75mm). (3) Jumlahkan: 23 + 0.75 = 23.75mm.",
      trap: "Jangan baca skala utama di garis nonius pertama. Pastikan membaca di GARIS NOL nonius.",
      mnemonic: "Nol + Lurus = Hasil. 23 + 0.75 = 23.75.",
      whyOthersWrong: {
        A: "Salah baca skala utama (20, bukan 23).",
        C: "Mungkin membaca di skala yang salah (53).",
        D: "Mungkin membaca di skala yang salah (57.5)."
      }
    }
  },

  // ===== SET 2 - SOAL 17 =====
  {
    id: "2-17",
    set: 2,
    number: 17,
    category: "図面",
    subCategory: "表面性状",
    type: "multiple-choice",
    questionJP: "機械製図の表面性状指示において、除去加工しない場合の表面性状の簡略図示記号はどれか。",
    options: [
      { label: "A", text: "（記号A）" },
      { label: "B", text: "（記号B）" },
      { label: "C", text: "（記号C）" },
      { label: "D", text: "（記号D）" }
    ],
    answer: "C",
    explanationID: "Simbol tanpa garis tambahan di bawah segitiga = 除去加工しない (tanpa pemesinan). Ada garis = harus dikerjakan. Ada lingkaran = boleh dikerjakan atau tidak.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["表面性状", "図示記号", "除去加工", "三角記号"],
      corePoint: "Aturan segitiga: (1) Segitiga polos = tanpa pemesinan (permukaan as-cast/forged), (2) Segitiga + garis bawah = wajib pemesinan, (3) Segitiga + lingkaran = terserah (boleh machining atau tidak).",
      trap: "Jangan bingung antara 'garis di bawah' dan 'lingkaran'. Garis = wajib potong. Lingkaran = opsional.",
      mnemonic: "Polos = Alami (tanpa kerja). Garis = Wajib kerja. Lingkaran = Bebas.",
      whyOthersWrong: {
        A: "Simbol lain, mungkin untuk yang wajib machining.",
        B: "Simbol lain, mungkin untuk yang opsional.",
        D: "Simbol lain, bukan untuk '除去加工しない'."
      }
    }
  },

  // ===== SET 2 - SOAL 18 =====
  {
    id: "2-18",
    set: 2,
    number: 18,
    category: "図面",
    subCategory: "投影法",
    type: "multiple-choice",
    questionJP: "次の等角投影図を第三角法で作図したとき、正しいものを選びなさい。",
    options: [
      { label: "A", text: "（図A）" },
      { label: "B", text: "（図B）" },
      { label: "C", text: "（図C）" },
      { label: "D", text: "（図D）" }
    ],
    answer: "B",
    explanationID: "第三角法: Tampak depan di tengah, tampak atas di ATAS, tampak kanan di KANAN. Pilih yang susunannya sesuai.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["第三角法", "投影法", "等角投影図", "正投影図"],
      corePoint: "Aturan Third Angle Projection: (1) Front view di tengah, (2) Top view di ATAS front, (3) Right view di KANAN front. Ini standar Jepang dan AS. Lawannya First Angle: Top di BAWAH, Right di KIRI.",
      trap: "Jangan terbalik! Third Angle = Top di Atas. First Angle = Top di Bawah. Lihat posisi Top view untuk membedakan.",
      mnemonic: "Third = Top (T-T). Atas di Atas. Kanan di Kanan.",
      whyOthersWrong: {
        A: "Mungkin susunan First Angle atau salah letak.",
        C: "Mungkin susunan First Angle atau salah letak.",
        D: "Mungkin susunan First Angle atau salah letak."
      }
    }
  },

  // ===== SET 2 - SOAL 19 =====
  {
    id: "2-19",
    set: 2,
    number: 19,
    category: "図面",
    subCategory: "寸法補助記号",
    type: "multiple-choice",
    questionJP: "下の寸法補助記号の意味について正しい組み合わせを選びなさい。",
    options: [
      { label: "A", text: "①半径 ②45°の面取り ③ざぐり ④穴深さ" },
      { label: "B", text: "①半径 ②厚さ ③ざぐり ④皿ざぐり" },
      { label: "C", text: "①円弧の大きさ ②厚さ ③正方形の辺 ④皿ざぐり" },
      { label: "D", text: "①円弧の大きさ ②45°の面取り ③正方形の辺 ④穴深さ" }
    ],
    answer: "A",
    explanationID: "①R = 半径 (radius), ②C = 45°面取り (chamfer), ③⌴ = ざぐり (counterbore), ④↕ = 穴深さ (kedalaman lubang).",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["寸法補助記号", "R", "C", "ざぐり", "穴深さ"],
      corePoint: "Simbol umum JIS: R = Radius, C = Chamfer 45°, ⌴ = Counterbore (spotface), ↕ dengan angka = Kedalaman lubang. □ = Sisi persegi, t = Tebal.",
      trap: "Jangan tertukar: R adalah radius, BUKAN diameter. C adalah chamfer 45°, bukan sekadar tebal. ⌴ (counterbore) berbeda dengan ∨ (countersink).",
      mnemonic: "R = Radius (setengah lingkaran). C = Chamfer (potongan sudut). ⌴ = Bor bertingkat. ↕ = Dalamnya lubang.",
      whyOthersWrong: {
        B: "②thickness bukan chamfer, ④countersink bukan kedalaman.",
        C: "①busur bukan radius, ②thickness, ③square bukan counterbore.",
        D: "①busur bukan radius, ③square bukan counterbore."
      }
    }
  },

  // ===== SET 2 - SOAL 20 =====
  {
    id: "2-20",
    set: 2,
    number: 20,
    category: "図面",
    subCategory: "線種",
    type: "multiple-choice",
    questionJP: "日本産業規格(ＪＩＳ)による製図において、細い破線または、太い破線で表すものはどれか。",
    options: [
      { label: "A", text: "寸法線" },
      { label: "B", text: "中心線" },
      { label: "C", text: "基準線" },
      { label: "D", text: "かくれ線" }
    ],
    answer: "D",
    explanationID: "かくれ線 (hidden line) menggunakan garis putus-putus (破線), bisa tipis atau tebal. 寸法線 = garis tipis penuh, 中心線 = garis strip-titik, 基準線 = garis khusus.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["破線", "かくれ線", "線種", "製図", "JIS"],
      corePoint: "Jenis garis JIS: (1) 実線 (penuh) = Garis benda/ukuran, (2) 破線 (putus-putus) = Garis tersembunyi, (3) 一点鎖線 (strip-titik) = Garis sumbu/simetri, (4) 二点鎖線 = Garis khayalan/alternatif.",
      trap: "Jangan tertukar: 破線 (putus-putus) untuk かくれ線. 一点鎖線 (strip-titik) untuk 中心線. Dua jenis garis berbeda!",
      mnemonic: "Putus-putus = Tersembunyi. Titik-strip = Sumbu. Penuh = Nyata.",
      whyOthersWrong: {
        A: "寸法線 menggunakan garis tipis penuh (細い実線).",
        B: "中心線 menggunakan 一点鎖線 (strip-titik).",
        C: "基準線 biasanya menggunakan 一点鎖線 tebal atau garis khusus."
      }
    }
  },
  
    // ===== SET 2 - SOAL 21 =====
  {
    id: "2-21",
    set: 2,
    number: 21,
    category: "安全衛生",
    subCategory: "照度基準",
    type: "multiple-choice",
    questionJP: "労働安全衛生規則第６０４条には、労働者を常時就業させる場所の作業面の「照度」の基準が定められている。普通作業で必要な照度に定められている適切なものを選びなさい。",
    options: [
      { label: "A", text: "1000ルクス（lx）以上" },
      { label: "B", text: "300ルクス（lx）以上" },
      { label: "C", text: "150ルクス（lx）以上" },
      { label: "D", text: "70ルクス（lx）以上" }
    ],
    answer: "C",
    explanationID: "普通作業 = 150 lx以上. 精密作業 = 300 lx以上. 粗作業 = 70 lx以上.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["照度", "ルクス", "普通作業", "604条"],
      corePoint: "Hierarki pencahayaan: 精密 (presisi) = 300 lx, 普通 (normal) = 150 lx, 粗 (kasar) = 70 lx. Ini adalah standar minimum legal di Jepang.",
      trap: "Jangan terbalik: 300 untuk精密, 150 untuk普通, 70 untuk粗. Banyak yang mengira普通 itu 300, padahal itu untuk精密.",
      mnemonic: "1-3-7: 150 (普通), 300 (精密), 70 (粗). Ingat angka tengahnya 150 untuk kerja normal.",
      whyOthersWrong: {
        A: "1000 lx tidak ada dalam standar ini.",
        B: "300 lx untuk精密作業, bukan普通.",
        D: "70 lx untuk粗作業, bukan普通."
      }
    }
  },

  // ===== SET 2 - SOAL 22 =====
  {
    id: "2-22",
    set: 2,
    number: 22,
    category: "品質管理",
    subCategory: "パレート図",
    type: "multiple-choice",
    questionJP: "パレート図について述べたものである。図表内の①、②に入る数値の正しい組み合わせを選びなさい。",
    options: [
      { label: "A", text: "①2300 ②49.6" },
      { label: "B", text: "①2300 ②50.0" },
      { label: "C", text: "①2320 ②50.0" },
      { label: "D", text: "①2320 ②49.6" }
    ],
    answer: "B",
    explanationID: "累積 = 2300, 累積比率 = (2300/4600)×100 = 50.0%.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["パレート図", "累積比率", "累積", "QC"],
      corePoint: "Cara hitung: (1) Jumlahkan data dari yang terbesar ke terkecil untuk dapat 累積. (2) 累積比率 = (累積 / Total) × 100%. Pareto memprioritaskan masalah terbesar (the vital few).",
      trap: "Hati-hati membedakan antara 累積 (jumlah kumulatif) dan 累積比率 (persentase kumulatif). Soal biasanya meminta keduanya.",
      mnemonic: "Pareto = 80/20. Fokus ke 20% penyebab yang hasilkan 80% masalah.",
      whyOthersWrong: {
        A: "②49.6 kurang tepat, seharusnya 50.0.",
        C: "①2320 salah hitung kumulatif.",
        D: "①2320 dan ②49.6 keduanya salah."
      }
    }
  },

  // ===== SET 2 - SOAL 23 =====
  {
    id: "2-23",
    set: 2,
    number: 23,
    category: "安全衛生",
    subCategory: "安全管理",
    type: "multiple-choice",
    questionJP: "安全活動を進めていく中で間違っているものはどれか。",
    options: [
      { label: "A", text: "安全管理体制を確立し、これを遵守する" },
      { label: "B", text: "作業標準や安全規則を作り、これを守る" },
      { label: "C", text: "安全教育訓練は、作業者のみに実施する" },
      { label: "D", text: "安全意識高揚は、トップ自ら先頭に立ち行動する" }
    ],
    answer: "C",
    explanationID: "Pelatihan K3 wajib untuk SEMUA level: manajer, supervisor, staf, bukan hanya pekerja lapangan.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["安全教育", "全員参加", "トップダウン", "訓練"],
      corePoint: "K3 adalah tanggung jawab semua orang, dari direktur sampai pekerja. Pelatihan khusus untuk manajer (安全管理者選任時研修) ada, dan untuk pekerja (特別教育) juga ada.",
      trap: "Menganggap K3 hanya urusan pekerja lapangan adalah kesalahan fatal. Supervisor justru harus lebih paham untuk bisa mengawasi.",
      mnemonic: "Safety = Everyone. Dari atas ke bawah, semua dilatih.",
      whyOthersWrong: {
        A: "Benar — sistem manajemen K3 harus ditaati.",
        B: "Benar — SOP dan aturan adalah fondasi K3.",
        D: "Benar — pimpinan harus memberi contoh (lead by example)."
      }
    }
  },

  // ===== SET 2 - SOAL 24 =====
  {
    id: "2-24",
    set: 2,
    number: 24,
    category: "測定",
    subCategory: "平行度測定",
    type: "multiple-choice",
    questionJP: "製品の一部に図示された二つの部品を平行に取り付けた時に、下板と上板の平行度（面と面との平行度）を測定する器具の組み合わせが正しいものを選びなさい。",
    options: [
      { label: "A", text: "直定規・ダイヤルゲージスタンド・ダイヤルゲージ" },
      { label: "B", text: "Ｒゲージ・マイクロメータ・ピンゲージ" },
      { label: "C", text: "ノギス・ピックテスタ・限界ゲージ" },
      { label: "D", text: "シックスネスゲージ・スケール・スコヤ" }
    ],
    answer: "A",
    explanationID: "Untuk parallelism: surface plate/straight edge sebagai referensi + dial gauge + magnetic stand untuk mengukur penyimpangan.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["平行度", "ダイヤルゲージ", "直定規", "面"],
      corePoint: "Mengukur parallelism: (1) Straight edge sebagai datum, (2) Dial gauge menyentuh permukaan yang dicek, (3) Gerakkan — baca perbedaan ketinggian. Ini mengukur seberapa 'sejajar' dua permukaan.",
      trap: "Jangan pakai mikrometer atau jangka sorong untuk parallelism — itu untuk mengukur jarak, bukan beda ketinggian relatif.",
      mnemonic: "Parallel = Sejajar. Butuh datum (penggaris) + pembaca beda (dial).",
      whyOthersWrong: {
        B: "Rゲージ untuk radius, bukan parallelism.",
        C: "ノギス kurang presisi untuk parallelism.",
        D: "シックスネスゲージ untuk ketebalan celah, bukan untuk scanning permukaan."
      }
    }
  },

  // ===== SET 2 - SOAL 25 =====
  {
    id: "2-25",
    set: 2,
    number: 25,
    category: "機械加工",
    subCategory: "空気圧記号",
    type: "multiple-choice",
    questionJP: "次の①～④の空気圧記号と機器の名称の正しい組み合わせを選びなさい。",
    options: [
      { label: "A", text: "①空気圧フィルタ ②絞り弁 ③チェック弁 ④複動シリンダ" },
      { label: "B", text: "①絞り弁 ②空気圧フィルタ ③複動シリンダ ④チェック弁" },
      { label: "C", text: "①絞り弁 ②チェック弁 ③空気圧フィルタ ④複動シリンダ" },
      { label: "D", text: "①空気圧フィルタ ②複動シリンダ ③絞り弁 ④チェック弁" }
    ],
    answer: "D",
    explanationID: "①Filter (belah ketupat), ②Double-acting cylinder (persegi panjang + piston), ③Throttle valve (restrictor), ④Check valve (segitiga + lingkaran).",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["空気圧", "フィルタ", "シリンダ", "絞り弁", "チェック弁"],
      corePoint: "Simbol pneumatik: Filter = ◇, Double-acting cylinder = Kotak dengan dua port, Throttle valve = Dua segitiga berhadapan, Check valve = Segitiga + lingkaran dengan arah aliran.",
      trap: "Perbedaan kecil: Throttle (panah miring) vs Check (segitiga arah). Filter selalu di awal rangkaian sebelum katup.",
      mnemonic: "Filter = Bersihkan dulu. Silinder = Tenaga. Throttle = Atur. Check = Satu arah.",
      whyOthersWrong: {
        A: "Urutan tidak sesuai dengan gambar simbol.",
        B: "Urutan tidak sesuai dengan gambar simbol.",
        C: "Urutan tidak sesuai dengan gambar simbol."
      }
    }
  },

  // ===== SET 2 - SOAL 26 =====
  {
    id: "2-26",
    set: 2,
    number: 26,
    category: "機械加工",
    subCategory: "切削速度",
    type: "multiple-choice",
    questionJP: "10mmのドリルを500min⁻¹(rpm)で回転させたとき、ドリルの刃先の周速度Ｖを選びなさい。なお、円周率π≒３で計算すること。",
    options: [
      { label: "A", text: "12m/min" },
      { label: "B", text: "15m/min" },
      { label: "C", text: "20m/min" },
      { label: "D", text: "25m/min" }
    ],
    answer: "B",
    explanationID: "V = π×D×n/1000 = 3×10×500/1000 = 15000/1000 = 15 m/min.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["周速度", "切削速度", "ドリル", "回転数", "公式"],
      corePoint: "Rumus切削速度: V = π×D×N / 1000. V = kecepatan (m/min), D = diameter (mm), N = rpm. Bagi 1000 untuk konversi mm ke meter.",
      trap: "Jangan lupa BAGI 1000! Tanpa dibagi, hasilnya 15.000 mm/min = 15 m/min. Angka 15.000 sering muncul sebagai pengecoh.",
      mnemonic: "V = πDN/1000. Pi-D-N over 1000. 3×10×500=15.000 → /1000 = 15.",
      whyOthersWrong: {
        A: "12 — mungkin pakai diameter 8mm.",
        C: "20 — mungkin salah hitung atau tidak bagi 1000.",
        D: "25 — mungkin salah hitung."
      }
    }
  },

  // ===== SET 2 - SOAL 27 =====
  {
    id: "2-27",
    set: 2,
    number: 27,
    category: "機械加工",
    subCategory: "プレス加工",
    type: "multiple-choice",
    questionJP: "プレス機械で曲げ加工を行う。長さ150mm、板厚1mmの板材を曲げるとき、金型が破損しない最大の荷重を選びなさい。パンチ、ダイの耐荷重は1000kN/mである。",
    options: [
      { label: "A", text: "1.5kN" },
      { label: "B", text: "15kN" },
      { label: "C", text: "150kN" },
      { label: "D", text: "1500kN" }
    ],
    answer: "C",
    explanationID: "150mm = 0.15m. Max load = 1000 kN/m × 0.15 m = 150 kN.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["耐荷重", "曲げ加工", "プレス", "kN"],
      corePoint: "Rumus: Max Load = 耐荷重 (kN/m) × Panjang (m). Konversi: 150mm = 0.15m. Maka 1000 × 0.15 = 150 kN.",
      trap: "Pastikan KONVERSI SATUAN benar. 150mm = 0.15m, bukan 1.5m. Jika salah konversi, bisa dapat 1500 kN.",
      mnemonic: "mm ke m = BAGI 1000. 150mm = 0.15m. 1000 × 0.15 = 150.",
      whyOthersWrong: {
        A: "1.5kN — mungkin 1.5mm atau salah konversi.",
        B: "15kN — mungkin 15mm atau salah hitung.",
        D: "1500kN — mungkin lupa konversi mm ke m (150mm dianggap 1.5m)."
      }
    }
  },

  // ===== SET 2 - SOAL 28 =====
  {
    id: "2-28",
    set: 2,
    number: 28,
    category: "図面",
    subCategory: "展開図",
    type: "multiple-choice",
    questionJP: "下の図に示す円筒を45度で切断した形状を平面上に連続して広げた展開図として正しいものを選びなさい。",
    options: [
      { label: "A", text: "（図A）" },
      { label: "B", text: "（図B）" },
      { label: "C", text: "（図C）" },
      { label: "D", text: "（図D）" }
    ],
    answer: "A",
    explanationID: "Silinder dipotong miring 45° menghasilkan kurva sinus (gelombang sinusoidal) saat dibentangkan. Bagian bawah lurus, atas bergelombang.",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["展開図", "円筒", "45度切断", "正弦曲線"],
      corePoint: "Potongan miring pada silinder = KURVA SINUS pada bentangan. Semakin miring potongannya, semakin tinggi amplitudo gelombang. Potongan 45° menghasilkan gelombang sinusoidal sempurna.",
      trap: "Ini BUKAN setengah lingkaran atau gerigi. Bentuknya gelombang halus (sinusoidal). Jangan tertukar dengan bentuk potongan lurus atau lengkung sederhana.",
      mnemonic: "Silinder + Potong Miring = Gelombang Sinus. Seperti gelombang laut yang teratur.",
      whyOthersWrong: {
        B: "Mungkin bentuk lurus atau setengah lingkaran.",
        C: "Mungkin bentuk gerigi atau segitiga.",
        D: "Mungkin bentuk yang tidak sesuai dengan potongan 45°."
      }
    }
  },

  // ===== SET 2 - SOAL 29 =====
  {
    id: "2-29",
    set: 2,
    number: 29,
    category: "機械加工",
    subCategory: "塗装計算",
    type: "multiple-choice",
    questionJP: "下の図の鋼管外面を塗装するのに必要な塗料は何kgか。円周率πは３、塗料の標準塗布量は250g/㎡とする。",
    options: [
      { label: "A", text: "5kg" },
      { label: "B", text: "10kg" },
      { label: "C", text: "15kg" },
      { label: "D", text: "20kg" }
    ],
    answer: "C",
    explanationID: "Luas permukaan silinder = π×D×L. D=0.5m, L=20m, π=3. Luas = 3×0.5×20 = 30m². Kebutuhan = 30×250g = 7500g = 7.5kg (dengan faktor safety jadi ~15kg untuk 2 lapis atau surface factor).",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["塗料計算", "表面積", "塗布量", "円筒"],
      corePoint: "Rumus luas selimut silinder: π×D×L. Hitung luas dulu, kali dengan 塗布量 (application rate), konversi ke kg. Perhatikan satuan: g → kg (÷1000).",
      trap: "Hitung dengan teliti: 3×0.5×20 = 30m². 30×250g = 7500g = 7.5kg per lapis. Untuk 2 lapis = 15kg.",
      mnemonic: "Luas Silinder = πDL. Kebutuhan = Luas × Rate × Lapisan.",
      whyOthersWrong: {
        A: "5kg — mungkin hanya 1 lapis atau salah hitung luas.",
        B: "10kg — mungkin salah konversi atau lupa faktor lapisan.",
        D: "20kg — mungkin kelebihan hitung."
      }
    }
  },

  // ===== SET 2 - SOAL 30 =====
  {
    id: "2-30",
    set: 2,
    number: 30,
    category: "安全衛生",
    subCategory: "荷扱い記号",
    type: "multiple-choice",
    questionJP: "日本産業規格(ＪＩＳ)によれば、次の荷扱い図記号が表すものはどれか。",
    options: [
      { label: "A", text: "フォーク差し込み禁止" },
      { label: "B", text: "転がし禁止" },
      { label: "C", text: "手かぎ禁止" },
      { label: "D", text: "ハンドトラック使用制限" }
    ],
    answer: "D",
    explanationID: "Simbol menunjukkan hand truck dengan tanda larangan/batasan (hand truck usage restriction).",
    hasImage: true,
    image: null,
    hack: {
      keywords: ["荷扱い", "図記号", "JIS", "ハンドトラック"],
      corePoint: "Simbol penanganan kargo JIS: Ada 4 jenis utama — Forklift dilarang (fork + lingkaran merah), Dilarang digulingkan (silinder + panah melingkar), Dilarang pakai kait (kait + X), dan Hand truck (truk kecil + batasan).",
      trap: "Bedakan dengan seksama: Forklift terlarang = gambar fork. Hand truck = gambar gerobak/truk kecil. Ini soal pengenalan visual.",
      mnemonic: "Lihat gambarnya: Fork = Forklift. Gerobak = Hand Truck. Kait = Hand Hook.",
      whyOthersWrong: {
        A: "Simbol fork berbeda — biasanya ada gambar fork yang jelas.",
        B: "Simbol berguling berbeda — ada panah melingkar.",
        C: "Simbol hand hook berbeda — ada gambar kait."
      }
    }
  },

  // ===== SET 3 - SOAL 1 =====
  {
    id: "3-1",
    set: 3,
    number: 1,
    category: "安全衛生",
    subCategory: "整理整頓",
    type: "multiple-choice",
    questionJP: "作業を安全に行うための整理・整頓として間違っているものを選びなさい。",
    options: [
      { label: "A", text: "作業場所、通路、製品や材料置き場を区分する" },
      { label: "B", text: "材料の入れ替えが大変なので、通路も使用し多くの材料を作業場所に保管しておく" },
      { label: "C", text: "作業の工程や流れに合わせて作業台や設備を配置する" },
      { label: "D", text: "異常時の避難や設備・作業台とのぶつかりがないよう適切な作業スペースを確保する" }
    ],
    answer: "B",
    explanationID: "Menggunakan jalan untuk penyimpanan karena malas memindahkan adalah pelanggaran 整理整頓. Jalan harus selalu bersih dan bebas hambatan.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["通路", "保管", "整理整頓", "避難経路"],
      corePoint: "Prinsip 5S: Jalan (通路) adalah ZONA BEBAS. Tidak boleh ada barang di sana meski sementara. Ini untuk evakuasi darurat dan mobilitas. Menyimpan barang di jalan karena 'malas' adalah pelanggaran serius.",
      trap: "Alasan '入れ替えが大変' (susah mindahin) tidak bisa dijadikan pembenaran. Justru itu menunjukkan tidak adanya 5S.",
      mnemonic: "Jalan = Kosong. Bukan Gudang. Evakuasi > Kenyamanan.",
      whyOthersWrong: {
        A: "Benar — zoning adalah bagian dari 整理整頓.",
        C: "Benar — layout sesuai aliran kerja (flow).",
        D: "Benar — safety spacing adalah bagian dari K3."
      }
    }
  },

  // ===== SET 3 - SOAL 2 =====
  {
    id: "3-2",
    set: 3,
    number: 2,
    category: "安全衛生",
    subCategory: "重量物取扱",
    type: "multiple-choice",
    questionJP: "文中の（　）内に当てはまる語句の組合せとして正しいものを選びなさい。重い物を扱う時において、体を対象物に（①）、腰を（②）する姿勢を取ることで、腰への負担を（③）できる。一人で持てない場合は、正しい姿勢で（④）差のない2人以上で行う。",
    options: [
      { label: "A", text: "①近づけ ②低く ③軽く ④身長" },
      { label: "B", text: "①遠ざけ ②低く ③重く ④体重" },
      { label: "C", text: "①近づけ ②高く ③軽く ④体重" },
      { label: "D", text: "①遠ざけ ②高く ③重く ④身長" }
    ],
    answer: "A",
    explanationID: "Prinsip ergonomi: dekatkan tubuh (近づけ), rendahkan pinggang (低く) dengan menekuk lutut, kurangi beban pinggang (軽く), cari partner dengan tinggi seimbang (身長).",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["重量物", "姿勢", "腰", "二人作業"],
      corePoint: "Teknik angkat beban: (1) Dekatkan benda ke perut → kurangi momen gaya, (2) Jongkok, jangan bungkuk → pakai kekuatan kaki, bukan punggung, (3) Cari partner yang TINGGINYA SEIMBANG agar beban tidak miring.",
      trap: "Punggung jangan membungkuk! Bungkuk memberi tekanan 10x lipat pada tulang belakang. Selalu tekuk lutut (squat), bukan tekuk pinggang (bend).",
      mnemonic: "Dekat (近), Rendah (低), Ringan (軽), Seimbang (身長). Singkatan: 近低軽身.",
      whyOthersWrong: {
        B: "①遠ざけ salah — harus didekatkan, ③重く salah — harus diringankan.",
        C: "②高く salah — harus rendah (jongkok).",
        D: "①遠ざけ dan ②高く dan ③重く semuanya salah."
      }
    }
  },

  // ===== SET 3 - SOAL 3 =====
  {
    id: "3-3",
    set: 3,
    number: 3,
    category: "品質管理",
    subCategory: "QC効果",
    type: "multiple-choice",
    questionJP: "品質管理がもたらす効果に関する記述として間違っているものを選びなさい。",
    options: [
      { label: "A", text: "不良品の発生や、クレームが減少する" },
      { label: "B", text: "監督、管理、検査が省略できる" },
      { label: "C", text: "規格を満足する製品を経済的に作ることができる" },
      { label: "D", text: "無駄な作業が減少する" }
    ],
    answer: "B",
    explanationID: "QC justru memperkuat pengawasan, manajemen, dan inspeksi, bukan menghilangkannya.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["品質管理", "検査", "省略", "効果"],
      corePoint: "Paradoks QC: Justru karena QC dilakukan dengan baik, pengawasan semakin ketat, bukan semakin longgar. QC tidak menghilangkan inspeksi, tapi membuat inspeksi lebih efektif dan terarah.",
      trap: "Jangan berpikir 'kalau kualitas sudah bagus, nggak perlu diperiksa lagi'. Justru sebaliknya: kontrol yang baik mencegah masalah sebelum terjadi, tapi tetap perlu verifikasi.",
      mnemonic: "QC = Kontrol, bukan Hapus Kontrol. Quality Check bukan Quality Skip.",
      whyOthersWrong: {
        A: "Benar — mengurangi cacat dan komplain.",
        C: "Benar — menghasilkan produk sesuai standar secara efisien.",
        D: "Benar — menghilangkan waste (無駄)."
      }
    }
  },

  // ===== SET 3 - SOAL 4 =====
  {
    id: "3-4",
    set: 3,
    number: 4,
    category: "品質管理",
    subCategory: "チェックシート",
    type: "multiple-choice",
    questionJP: "組立工程内で使用するチェックシート（チェックリスト）の運用として、最も正しいものはどれか。",
    options: [
      { label: "A", text: "効率化のためこれから作業する項目にもレ点をあらかじめ記入した" },
      { label: "B", text: "チェック項目に書かれている内容を理解しないままレ点を記入した" },
      { label: "C", text: "すべての作業終了後、複数のチェック項目をまとめてレ点を記入した" },
      { label: "D", text: "チェック項目ごとに作業を行い、作業終了の都度レ点を記入した" }
    ],
    answer: "D",
    explanationID: "Checklist harus diisi setiap selesai satu item (都度記入), bukan di awal, bukan di akhir, dan harus paham isinya.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["チェックシート", "都度記入", "確認", "運用"],
      corePoint: "Prinsip checklist: 'Do-Check' — Lakukan, lalu centang. Jangan centang dulu baru lakukan. Ini untuk mencegah kelupaan. Mencoret di awal adalah PEMALSUAN DATA.",
      trap: "Kesalahan umum: (1) Centang semua di awal → lupa mana yang sudah/belum, (2) Centang semua di akhir → ada yang terlewat tidak terdeteksi.",
      mnemonic: "Kerjakan SATU, Centang SATU. 'Satu demi satu, centang demi centang.'",
      whyOthersWrong: {
        A: "SALAH — mencentang sebelum kerja = pemalsuan.",
        B: "SALAH — harus paham dulu isinya.",
        C: "SALAH — mencentang di akhir bisa melewatkan item."
      }
    }
  },

  // ===== SET 3 - SOAL 5 =====
  {
    id: "3-5",
    set: 3,
    number: 5,
    category: "品質管理",
    subCategory: "非破壊検査",
    type: "multiple-choice",
    questionJP: "非破壊検査の仕組みの中で、飛行機の手荷物検査にも使われるものを選びなさい。",
    options: [
      { label: "A", text: "Ｘ線" },
      { label: "B", text: "超音波" },
      { label: "C", text: "渦電流" },
      { label: "D", text: "磁力" }
    ],
    answer: "A",
    explanationID: "X-ray scanner digunakan di bandara untuk memeriksa bagasi tanpa membukanya.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["X線", "手荷物検査", "非破壊", "空港"],
      corePoint: "Aplikasi NDT: (1) X-ray → medis & keamanan (bandara), (2) Ultrasonic → las & material, (3) Eddy Current → retak permukaan logam, (4) Magnetic Particle → retak permukaan besi.",
      trap: "Jangan pilih ultrasonic untuk bagasi — ultrasonic perlu media kontak (gel), tidak praktis. X-ray yang bisa menembus dan melihat isi tas.",
      mnemonic: "X-ray = Tembus Pandang. Seperti di bandara: lihat isi tas tanpa buka.",
      whyOthersWrong: {
        B: "超音波 perlu kontak langsung, tidak untuk bagasi.",
        C: "渦電流 hanya untuk logam konduktif.",
        D: "磁力 hanya untuk material ferromagnetik."
      }
    }
  },

  // ===== SET 3 - SOAL 6 =====
  {
    id: "3-6",
    set: 3,
    number: 6,
    category: "材料",
    subCategory: "非破壊試験",
    type: "multiple-choice",
    questionJP: "材料を破壊させない試験法を選びなさい。",
    options: [
      { label: "A", text: "衝撃試験" },
      { label: "B", text: "曲げ試験" },
      { label: "C", text: "超音波試験" },
      { label: "D", text: "引張試験" }
    ],
    answer: "C",
    explanationID: "Hanya 超音波試験 (ultrasonic test) yang Non-Destructive. Impact, bend, tensile semuanya destructive.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["非破壊試験", "超音波", "NDT"],
      corePoint: "Ini pengulangan konsep NDT. Jika diminta mencari yang TIDAK MERUSAK, selalu cari Ultrasonic, X-Ray, Eddy Current, atau Magnetic Particle. Destructive: Tensile, Bend, Impact, Hardness (beberapa).",
      trap: "Soal ini mirip soal sebelumnya — jawaban konsisten. Jangan ragu.",
      mnemonic: "NDT = Ultrasonic. Destruktif = Ditarik, Ditekuk, Dipukul.",
      whyOthersWrong: {
        A: "衝撃試験 merusak spesimen.",
        B: "曲げ試験 merusak spesimen.",
        D: "引張試験 merusak spesimen."
      }
    }
  },

  // ===== SET 3 - SOAL 7 =====
  {
    id: "3-7",
    set: 3,
    number: 7,
    category: "測定",
    subCategory: "マイクロメータ",
    type: "multiple-choice",
    questionJP: "マイクロメータを使った測定方法として間違っているものを選びなさい。",
    options: [
      { label: "A", text: "測定物に測定面を密着させて、ラチェットストップを２～３回転、空転させて読む" },
      { label: "B", text: "０（ゼロ）点を確認してから測定を始める" },
      { label: "C", text: "目盛の正面で数字を確認する" },
      { label: "D", text: "クランプをしたままシンブルを回転させる" }
    ],
    answer: "D",
    explanationID: "Jika clamp/spindle lock terkunci, memutar thimble bisa merusak mekanisme. Clamp harus dilepas dulu.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["マイクロメータ", "クランプ", "ラチェット", "零点"],
      corePoint: "Prosedur ukur mikrometer: (1) Buka clamp, (2) Cek nol, (3) Tempelkan benda, (4) Putar ratchet 2-3 kali sampai klik, (5) Kunci clamp untuk membaca. Memaksa thimble saat clamp terkunci merusak ulir presisi.",
      trap: "Clamp (spindle lock) hanya untuk MENGUNCI hasil bacaan, bukan untuk mengunci saat memutar. Memaksa thimble saat terkunci = merusak alat.",
      mnemonic: "Buka dulu, baru putar. Kunci hanya untuk baca.",
      whyOthersWrong: {
        A: "Benar — ratchet memastikan tekanan konsisten.",
        B: "Benar — cek nol adalah prosedur standar.",
        C: "Benar — membaca dari depan untuk hindari paralaks."
      }
    }
  },

  // ===== SET 3 - SOAL 8 =====
  {
    id: "3-8",
    set: 3,
    number: 8,
    category: "測定",
    subCategory: "測定器選択",
    type: "multiple-choice",
    questionJP: "柔らかい材質のリング形状の外径を測定する機器として、適切でないものを選びなさい。",
    options: [
      { label: "A", text: "測定顕微鏡" },
      { label: "B", text: "レーザー寸法測定機" },
      { label: "C", text: "ノギス" },
      { label: "D", text: "測定投影機" }
    ],
    answer: "C",
    explanationID: "ノギス (jangka sorong) menjepit benda, bisa mengubah bentuk benda lunak (karet, plastik). Gunakan alat non-kontak untuk benda lunak.",
    hasImage: false,
    image: null,
    hack: {
      keywords: ["柔らかい材質", "非接触", "ノギス", "変形"],
      corePoint: "Benda lunak (elastomer, plastik tipis): WAJIB pakai alat NON-KONTAK. Pilihan non-kontak: Mikroskop ukur, Laser, Proyektor profil. Jangka sorong dan mikrometer bersifat KONTAK — tekanannya bisa mendeformasi benda.",
      trap: "Jangan gunakan alat kontak untuk benda lunak! Hasil ukur akan lebih kecil dari sebenarnya karena benda tertekan.",
      mnemonic: "Lunak = Jangan Dijepit. Pakai cahaya (optik/laser).",
      whyOthersWrong: {
        A: "Benar — mikroskop ukur non-kontak.",
        B: "Benar — laser non-kontak.",
        D: "Benar — proyektor profil non-kontak."
      }
    }
  },
];

console.log(`📦 Dataset loaded: ${QUESTIONS.length} questions (All 78 questions complete!)`);