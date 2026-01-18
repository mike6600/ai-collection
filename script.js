// ==========================================
// 1. 번역 데이터 (8개 언어)
// ==========================================
const translations = {
  ko: {
    title: "🤖 AI 도구 모음",
    desc: "카테고리별로 AI를 빠르게 찾고 바로 실행할 수 있게 정리했습니다.",
    searchPlaceholder: "예: ChatGPT / 이미지 / 번역 / 영상",
    usageText: "사용률",
    noResults: "결과 없음",
    noResultsDesc: "검색어나 카테고리를 바꿔보세요.",
    footerNote: "※ 사용률은 추정치이며 비교용 지표입니다.",
    translateBtn: "🌐 언어 변경",
    sortUsage: "사용률 높은순",
    sortName: "이름순(A→Z)",
    all: "전체",
    chat: "챗봇",
    search: "검색/리서치",
    image: "이미지",
    video: "영상",
    audio: "음성/음악",
    coding: "코딩",
    writing: "글쓰기",
    design: "디자인",
    productivity: "생산성",
    education: "교육",
    goBtn: "바로가기",
    priceLabel: "가격"
  },
  en: {
    title: "🤖 AI Tools Hub",
    desc: "Find and use AI tools quickly by category.",
    searchPlaceholder: "Ex: ChatGPT / Image / Translation / Video",
    usageText: "Usage Rate",
    noResults: "No Results",
    noResultsDesc: "Try changing your search or category.",
    footerNote: "※ Usage rates are estimates for comparison.",
    translateBtn: "🌐 Translate",
    sortUsage: "By Usage Rate",
    sortName: "By Name (A→Z)",
    all: "All",
    chat: "Chat",
    search: "Search",
    image: "Image",
    video: "Video",
    audio: "Audio",
    coding: "Coding",
    writing: "Writing",
    design: "Design",
    productivity: "Productivity",
    education: "Education",
    goBtn: "Go →",
    priceLabel: "Price"
  },
  zh: {
    title: "🤖 AI工具合集",
    desc: "按类别快速查找和使用AI工具。",
    searchPlaceholder: "例如：ChatGPT / 图像 / 翻译 / 视频",
    usageText: "使用率",
    noResults: "无结果",
    noResultsDesc: "请尝试更改搜索词或类别。",
    footerNote: "※ 使用率为估计值，仅供比较。",
    translateBtn: "🌐 翻译",
    sortUsage: "按使用率",
    sortName: "按名称(A→Z)",
    all: "全部",
    chat: "聊天",
    search: "搜索",
    image: "图像",
    video: "视频",
    audio: "音频",
    coding: "编程",
    writing: "写作",
    design: "设计",
    productivity: "生产力",
    education: "教育",
    goBtn: "前往 →",
    priceLabel: "价格"
  },
  ja: {
    title: "🤖 AIツールコレクション",
    desc: "カテゴリ別にAIツールをすばやく検索して使用できます。",
    searchPlaceholder: "例：ChatGPT / 画像 / 翻訳 / 動画",
    usageText: "使用率",
    noResults: "結果なし",
    noResultsDesc: "検索語句やカテゴリを変更してください。",
    footerNote: "※ 使用率は推定値であり、比較用です。",
    translateBtn: "🌐 翻訳",
    sortUsage: "使用率順",
    sortName: "名前順(A→Z)",
    all: "すべて",
    chat: "チャット",
    search: "検索",
    image: "画像",
    video: "動画",
    audio: "音声",
    coding: "コーディング",
    writing: "執筆",
    design: "デザイン",
    productivity: "生産性",
    education: "教育",
    goBtn: "移動 →",
    priceLabel: "価格"
  },
  de: {
    title: "🤖 KI-Tools Sammlung",
    desc: "Finden und nutzen Sie KI-Tools schnell nach Kategorie.",
    searchPlaceholder: "z.B. ChatGPT / Bild / Übersetzung / Video",
    usageText: "Nutzungsrate",
    noResults: "Keine Ergebnisse",
    noResultsDesc: "Versuchen Sie, Suchbegriff oder Kategorie zu ändern.",
    footerNote: "※ Nutzungsraten sind Schätzwerte zum Vergleich.",
    translateBtn: "🌐 Übersetzen",
    sortUsage: "Nach Nutzungsrate",
    sortName: "Nach Name (A→Z)",
    all: "Alle",
    chat: "Chat",
    search: "Suche",
    image: "Bild",
    video: "Video",
    audio: "Audio",
    coding: "Codieren",
    writing: "Schreiben",
    design: "Design",
    productivity: "Produktivität",
    education: "Bildung",
    goBtn: "Gehen →",
    priceLabel: "Preis"
  },
  fr: {
    title: "🤖 Collection d'outils IA",
    desc: "Trouvez et utilisez des outils d'IA rapidement par catégorie.",
    searchPlaceholder: "Ex: ChatGPT / Image / Traduction / Vidéo",
    usageText: "Taux d'utilisation",
    noResults: "Aucun résultat",
    noResultsDesc: "Essayez de changer de terme ou de catégorie.",
    footerNote: "※ Les taux d'utilisation sont des estimations à des fins de comparaison.",
    translateBtn: "🌐 Traduire",
    sortUsage: "Par taux d'utilisation",
    sortName: "Par nom (A→Z)",
    all: "Tous",
    chat: "Chat",
    search: "Recherche",
    image: "Image",
    video: "Vidéo",
    audio: "Audio",
    coding: "Code",
    writing: "Écriture",
    design: "Design",
    productivity: "Productivité",
    education: "Éducation",
    goBtn: "Aller →",
    priceLabel: "Prix"
  },
  ru: {
    title: "🤖 Коллекция инструментов ИИ",
    desc: "Быстро находите и используйте инструменты ИИ по категориям.",
    searchPlaceholder: "Напр: ChatGPT / Изображение / Перевод / Видео",
    usageText: "Уровень использования",
    noResults: "Нет результатов",
    noResultsDesc: "Попробуйте изменить запрос или категорию.",
    footerNote: "※ Уровни использования являются оценочными для сравнения.",
    translateBtn: "🌐 Перевести",
    sortUsage: "По уровню использования",
    sortName: "По имени (A→Z)",
    all: "Все",
    chat: "Чат",
    search: "Поиск",
    image: "Изображение",
    video: "Видео",
    audio: "Аудио",
    coding: "Кодинг",
    writing: "Письмо",
    design: "Дизайн",
    productivity: "Продуктивность",
    education: "Образование",
    goBtn: "Перейти →",
    priceLabel: "Цена"
  },
  hi: {
    title: "🤖 AI टूल्स संग्रह",
    desc: "श्रेणी के अनुसार AI टूल्स को तेज़ी से खोजें और उपयोग करें।",
    searchPlaceholder: "उदा: ChatGPT / छवि / अनुवाद / वीडियो",
    usageText: "उपयोग दर",
    noResults: "कोई परिणाम नहीं",
    noResultsDesc: "कृपया खोज शब्द या श्रेणी बदलें।",
    footerNote: "※ उपयोग दर अनुमानित हैं और तुलना के लिए हैं।",
    translateBtn: "🌐 अनुवाद",
    sortUsage: "उपयोग दर के अनुसार",
    sortName: "नाम के अनुसार (A→Z)",
    all: "सभी",
    chat: "चैट",
    search: "खोज",
    image: "छवि",
    video: "वीडियो",
    audio: "ऑडियो",
    coding: "कोडिंग",
    writing: "लेखन",
    design: "डिज़ाइन",
    productivity: "उत्पादकता",
    education: "शिक्षा",
    goBtn: "जाओ →",
    priceLabel: "मूल्य"
  }
};

// ==========================================
// 2. AI 데이터 (30개)
// ==========================================
const aiData = [
  { name:"ChatGPT", category:"chat", desc:"범용 챗봇/문서/아이디어/코딩까지 다 되는 대표 AI", link:"https://chat.openai.com/", price:"무료+유료", usage:100 },
  { name:"Gemini", category:"chat", desc:"구글의 LLM, 검색/워크스페이스 연계 강점", link:"https://gemini.google.com/", price:"무료+유료", usage:90 },
  { name:"Microsoft Copilot", category:"chat", desc:"Bing/Windows/Office 생태계와 연결되는 챗봇", link:"https://copilot.microsoft.com/", price:"무료+유료", usage:88 },
  { name:"Claude", category:"chat", desc:"긴 글/문서 분석과 글쓰기에 강한 챗봇", link:"https://claude.ai/", price:"무료+유료", usage:82 },
  { name:"Perplexity", category:"search", desc:"출처 기반 AI 검색/요약에 강함", link:"https://www.perplexity.ai/", price:"무료+유료", usage:78 },
  { name:"Poe", category:"chat", desc:"여러 AI 모델을 한 곳에서 쓰는 허브", link:"https://poe.com/", price:"무료+유료", usage:62 },
  { name:"Character.AI", category:"chat", desc:"캐릭터 대화/역할 기반 챗봇 플랫폼", link:"https://character.ai/", price:"무료+유료", usage:70 },
  { name:"Hugging Face", category:"productivity", desc:"오픈소스 모델/데모(Spaces) 모음", link:"https://huggingface.co/", price:"무료", usage:65 },
  { name:"Midjourney", category:"image", desc:"고퀄 이미지 생성(디스코드 중심)", link:"https://www.midjourney.com/", price:"유료", usage:84 },
  { name:"Adobe Firefly", category:"image", desc:"어도비의 생성형 이미지(PS/Express 연계)", link:"https://firefly.adobe.com/", price:"부분무료+유료", usage:73 },
  { name:"Canva", category:"design", desc:"디자인 템플릿 + AI 이미지/문서 기능", link:"https://www.canva.com/", price:"무료+유료", usage:80 },
  { name:"Leonardo AI", category:"image", desc:"컨셉아트/게임 스타일 이미지 생성에 강함", link:"https://leonardo.ai/", price:"무료+유료", usage:60 },
  { name:"Ideogram", category:"image", desc:"글자 들어간 이미지(포스터/로고)에 강점", link:"https://ideogram.ai/", price:"무료+유료", usage:58 },
  { name:"DreamStudio", category:"image", desc:"Stable Diffusion 계열 이미지 생성", link:"https://dreamstudio.ai/", price:"유료(크레딧)", usage:55 },
  { name:"Runway", category:"video", desc:"텍스트/이미지→영상 생성 및 편집 툴", link:"https://runwayml.com/", price:"무료+유료", usage:72 },
  { name:"Pika", category:"video", desc:"짧은 영상 생성(텍스트/이미지 기반)", link:"https://pika.art/", price:"무료+유료", usage:66 },
  { name:"Luma Dream Machine", category:"video", desc:"고품질 텍스트→영상 생성(성장 중)", link:"https://lumalabs.ai/dream-machine", price:"무료+유료", usage:64 },
  { name:"CapCut", category:"video", desc:"모바일/PC 영상편집 + 자동 자막/템플릿", link:"https://www.capcut.com/", price:"무료+유료", usage:76 },
  { name:"ElevenLabs", category:"audio", desc:"자연스러운 TTS/음성 합성", link:"https://elevenlabs.io/", price:"무료+유료", usage:68 },
  { name:"Suno", category:"audio", desc:"가사/스타일로 노래 생성", link:"https://suno.ai/", price:"무료+유료", usage:74 },
  { name:"Udio", category:"audio", desc:"음악 생성(퀄리티 좋다는 평 많음)", link:"https://www.udio.com/", price:"무료+유료", usage:60 },
  { name:"GitHub Copilot", category:"coding", desc:"IDE에서 코드 자동완성/추천", link:"https://github.com/features/copilot", price:"유료(학생혜택)", usage:83 },
  { name:"Cursor", category:"coding", desc:"AI 중심 코드 에디터(IDE)", link:"https://www.cursor.com/", price:"무료+유료", usage:67 },
  { name:"Codeium", category:"coding", desc:"코드 자동완성/챗(무료 플랜 강함)", link:"https://codeium.com/", price:"무료+유료", usage:57 },
  { name:"Replit", category:"coding", desc:"브라우저에서 코딩/배포 + AI 도우미", link:"https://replit.com/", price:"무료+유료", usage:61 },
  { name:"Notion AI", category:"productivity", desc:"노션에서 요약/정리/작성 보조", link:"https://www.notion.so/product/ai", price:"유료(애드온)", usage:69 },
  { name:"Grammarly", category:"writing", desc:"영어 문법 교정/글쓰기 보조", link:"https://www.grammarly.com/", price:"무료+유료", usage:77 },
  { name:"DeepL", category:"writing", desc:"번역/작문에 강한 번역기(영→한 등)", link:"https://www.deepl.com/", price:"무료+유료", usage:75 },
  { name:"QuillBot", category:"writing", desc:"영어 패러프레이즈/요약(영어 학습용)", link:"https://quillbot.com/", price:"무료+유료", usage:63 },
  { name:"Photomath", category:"education", desc:"수학 문제 촬영 → 풀이/해설", link:"https://photomath.com/", price:"무료+유료", usage:71 },
  { name:"Wolfram|Alpha", category:"education", desc:"계산/지식 질의응답(수학/과학)", link:"https://www.wolframalpha.com/", price:"무료+유료", usage:59 }
];

// ==========================================
// 3. 상태 관리
// ==========================================
let currentLang = localStorage.getItem("lang") || "ko";
let activeCategory = "all";

const CATEGORIES = {
  all:"all", chat:"chat", search:"search", image:"image", 
  video:"video", audio:"audio", coding:"coding", writing:"writing",
  design:"design", productivity:"productivity", education:"education"
};

// ==========================================
// 4. DOM 요소
// ==========================================
const aiContainer = document.getElementById("aiContainer");
const categoryButtons = document.getElementById("categoryButtons");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const translateBtn = document.getElementById("translateBtn");
const langModal = document.getElementById("langModal");
const closeModal = document.getElementById("closeModal");
const mainTitle = document.getElementById("mainTitle");
const mainDesc = document.getElementById("mainDesc");
const footerNote = document.getElementById("footerNote");

// ==========================================
// 5. 언어 변경 함수
// ==========================================
function changeLanguage(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);
  updateUIText();
  renderCategoryButtons();
  render();
  langModal.classList.remove("show");
}

function updateUIText(){
  const t = translations[currentLang];
  mainTitle.textContent = t.title;
  mainDesc.textContent = t.desc;
  searchInput.placeholder = t.searchPlaceholder;
  translateBtn.textContent = t.translateBtn;
  footerNote.textContent = t.footerNote;
  
  sortSelect.innerHTML = `
    <option value="usage">${t.sortUsage}</option>
    <option value="name">${t.sortName}</option>
  `;
}

// ==========================================
// 6. 카테고리 버튼 렌더
// ==========================================
function renderCategoryButtons(){
  const t = translations[currentLang];
  categoryButtons.innerHTML = "";
  Object.keys(CATEGORIES).forEach(key => {
    const btn = document.createElement("button");
    btn.className = "btn" + (key === activeCategory ? " active" : "");
    btn.textContent = t[key] || key;
    btn.addEventListener("click", () => {
      activeCategory = key;
      document.querySelectorAll(".category-buttons .btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render();
    });
    categoryButtons.appendChild(btn);
  });
}

// ==========================================
// 7. 필터/정렬/렌더
// ==========================================
function getFilteredData(){
  const q = (searchInput.value || "").trim().toLowerCase();
  return aiData.filter(item => {
    const catOK = activeCategory === "all" || item.category === activeCategory;
    const searchOK = q === "" || 
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q);
    return catOK && searchOK;
  });
}

function sortData(list){
  const mode = sortSelect.value;
  const copy = [...list];
  if(mode === "name"){
    copy.sort((a,b) => a.name.localeCompare(b.name));
  }else{
    copy.sort((a,b) => (b.usage ?? 0) - (a.usage ?? 0));
  }
  return copy;
}

function badgeColor(category){
  const map = {
    chat: "rgba(106,168,255,0.25)",
    search: "rgba(86,214,168,0.20)",
    image: "rgba(255,120,120,0.18)",
    video: "rgba(140,255,180,0.15)",
    audio: "rgba(220,160,255,0.18)",
    coding: "rgba(255,210,120,0.18)",
    writing: "rgba(190,200,255,0.18)",
    design: "rgba(255,160,220,0.16)",
    productivity: "rgba(170,255,255,0.14)",
    education: "rgba(255,255,160,0.14)"
  };
  return map[category] || "rgba(255,255,255,0.10)";
}

function display(list){
  const t = translations[currentLang];
  aiContainer.innerHTML = "";

  if(list.length === 0){
    aiContainer.innerHTML = `
      <div class="card">
        <h3>${t.noResults}</h3>
        <p class="desc">${t.noResultsDesc}</p>
      </div>
    `;
    return;
  }

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.style.background = badgeColor(item.category);
    badge.textContent = t[item.category] || item.category;

    const h3 = document.createElement("h3");
    h3.textContent = item.name;

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = item.desc;

    const meta = document.createElement("div");
    meta.className = "meta";
    // ⭐ "한국어: 좋음" 칩 제거, 가격만 표시
    meta.innerHTML = `
      <span class="chip">${t.priceLabel}: ${item.price}</span>
    `;

    const usageWrap = document.createElement("div");
    usageWrap.className = "usage";
    const usageVal = Math.max(0, Math.min(100, item.usage ?? 0));
    
    // ⭐ % 표시로 변경
    usageWrap.innerHTML = `
      <div class="usage-row">
        <span>${t.usageText}</span>
        <span class="usage-percent">${usageVal}%</span>
      </div>
      <div class="usage-bar"><div class="usage-fill" style="width:${usageVal}%"></div></div>
    `;

    const a = document.createElement("a");
    a.className = "link";
    a.href = item.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = t.goBtn;

    card.appendChild(badge);
    card.appendChild(h3);
    card.appendChild(desc);
    card.appendChild(meta);
    card.appendChild(usageWrap);
    card.appendChild(a);

    aiContainer.appendChild(card);
  });
}

function render(){
  const filtered = getFilteredData();
  const sorted = sortData(filtered);
  display(sorted);
}

// ==========================================
// 8. 이벤트
// ==========================================
searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

translateBtn.addEventListener("click", () => {
  langModal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  langModal.classList.remove("show");
});

langModal.addEventListener("click", (e) => {
  if(e.target === langModal){
    langModal.classList.remove("show");
  }
});

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    changeLanguage(lang);
  });
});

// ==========================================
// 9. 초기화
// ==========================================
updateUIText();
renderCategoryButtons();
render();
