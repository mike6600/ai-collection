// ==========================================
// 1. 번역 데이터 (8개 언어 - UI)
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
    footerNote: "※ Les taux d'utilisation sont des estimations.",
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
    footerNote: "※ Уровни использования являются оценочными.",
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
    footerNote: "※ उपयोग दर अनुमानित हैं।",
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
// 2. AI 데이터 (100개 - 8개 언어 설명 + 8개 언어 가격 포함)
// ==========================================
const aiData = [
  // ========== 챗봇 (15개) ==========
  { name:"ChatGPT", category:"chat", link:"https://chat.openai.com/", usage:100,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"범용 챗봇/문서/코딩까지 되는 대표 AI",
      en:"The leading AI for chat, documents, and coding",
      zh:"通用聊天机器人/文档/编程的代表性AI",
      ja:"汎用チャットボット/文書/コーディングまでできる代表的AI",
      de:"Der führende KI-Chatbot für Dokumente und Programmierung",
      fr:"L'IA leader pour le chat, les documents et le code",
      ru:"Ведущий ИИ для чата, документов и программирования",
      hi:"चैट, दस्तावेज़ और कोडिंग के लिए प्रमुख AI"
    }},
  { name:"Gemini", category:"chat", link:"https://gemini.google.com/", usage:90,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"구글의 LLM, 검색/워크스페이스 연계",
      en:"Google's LLM with Search/Workspace integration",
      zh:"谷歌的LLM，搜索/工作区集成",
      ja:"GoogleのLLM、検索/ワークスペース連携",
      de:"Googles LLM mit Such-/Workspace-Integration",
      fr:"LLM de Google avec intégration Recherche/Workspace",
      ru:"LLM от Google с интеграцией Поиска/Workspace",
      hi:"Google का LLM, खोज/कार्यक्षेत्र एकीकरण"
    }},
  { name:"Microsoft Copilot", category:"chat", link:"https://copilot.microsoft.com/", usage:88,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"Bing/Windows/Office 생태계와 연결되는 챗봇",
      en:"Chatbot connected to Bing/Windows/Office",
      zh:"连接Bing/Windows/Office的聊天机器人",
      ja:"Bing/Windows/Office連携チャットボット",
      de:"Chatbot verbunden mit Bing/Windows/Office",
      fr:"Chatbot connecté à Bing/Windows/Office",
      ru:"Чат-бот, связанный с Bing/Windows/Office",
      hi:"Bing/Windows/Office से जुड़ा चैटबॉट"
    }},
  { name:"Claude", category:"chat", link:"https://claude.ai/", usage:82,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"긴 글/문서 분석에 강한 챗봇",
      en:"Chatbot strong in long text/document analysis",
      zh:"擅长长文本/文档分析的聊天机器人",
      ja:"長文/文書分析に強いチャットボット",
      de:"Chatbot stark bei langen Texten/Dokumentenanalyse",
      fr:"Chatbot fort en analyse de longs textes/documents",
      ru:"Чат-бот, сильный в анализе длинных текстов/документов",
      hi:"लंबे पाठ/दस्तावेज़ विश्लेषण में मजबूत चैटबॉट"
    }},
  { name:"Poe", category:"chat", link:"https://poe.com/", usage:62,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"여러 AI 모델 허브",
      en:"Hub for multiple AI models",
      zh:"多个AI模型的中心",
      ja:"複数のAIモデルのハブ",
      de:"Hub für mehrere KI-Modelle",
      fr:"Hub pour plusieurs modèles d'IA",
      ru:"Хаб для нескольких моделей ИИ",
      hi:"कई AI मॉडल का केंद्र"
    }},
  { name:"Character.AI", category:"chat", link:"https://character.ai/", usage:70,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"캐릭터 역할 대화 플랫폼",
      en:"Character role-playing chat platform",
      zh:"角色扮演对话平台",
      ja:"キャラクターロールプレイチャットプラットフォーム",
      de:"Charakter-Rollenspiel-Chat-Plattform",
      fr:"Plateforme de chat de jeu de rôle de personnages",
      ru:"Платформа для ролевых чатов с персонажами",
      hi:"चरित्र भूमिका निभाने वाला चैट प्लेटफॉर्म"
    }},
  { name:"Pi", category:"chat", link:"https://pi.ai/", usage:56,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"친근하고 감정적인 대화 스타일의 AI",
      en:"Friendly conversational AI",
      zh:"友好的对话式AI",
      ja:"フレンドリーな会話スタイルのAI",
      de:"Freundliche Konversations-KI",
      fr:"IA conversationnelle amicale",
      ru:"Дружественный разговорный ИИ",
      hi:"मित्रवत बातचीत शैली AI"
    }},
  { name:"HuggingChat", category:"chat", link:"https://huggingface.co/chat", usage:51,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"오픈소스 기반 무료 챗봇",
      en:"Open-source free chatbot",
      zh:"开源免费聊天机器人",
      ja:"オープンソース無料チャットボット",
      de:"Open-Source kostenloser Chatbot",
      fr:"Chatbot gratuit open-source",
      ru:"Бесплатный чат-бот с открытым исходным кодом",
      hi:"ओपन-सोर्स मुफ्त चैटबॉट"
    }},
  { name:"Cohere", category:"chat", link:"https://cohere.com/", usage:48,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"기업용 LLM 및 챗봇 솔루션",
      en:"Enterprise LLM solution",
      zh:"企业级LLM解决方案",
      ja:"企業向けLLMソリューション",
      de:"Enterprise-LLM-Lösung",
      fr:"Solution LLM pour entreprises",
      ru:"Корпоративное решение LLM",
      hi:"उद्यम LLM समाधान"
    }},
  { name:"Mistral Chat", category:"chat", link:"https://chat.mistral.ai/", usage:52,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"유럽 오픈소스 LLM 챗봇",
      en:"European open-source LLM chatbot",
      zh:"欧洲开源LLM聊天机器人",
      ja:"ヨーロッパのオープンソースLLMチャットボット",
      de:"Europäischer Open-Source-LLM-Chatbot",
      fr:"Chatbot LLM open-source européen",
      ru:"Европейский чат-бот LLM с открытым исходным кодом",
      hi:"यूरोपीय ओपन-सोर्स LLM चैटबॉट"
    }},
  { name:"Llama 2", category:"chat", link:"https://llama.meta.com/", usage:58,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"메타의 오픈소스 LLM",
      en:"Meta's open-source LLM",
      zh:"Meta的开源LLM",
      ja:"Metaのオープンソース LLM",
      de:"Metas Open-Source-LLM",
      fr:"LLM open-source de Meta",
      ru:"LLM от Meta с открытым исходным кодом",
      hi:"Meta का ओपन-सोर्स LLM"
    }},
  { name:"Inflection Pi", category:"chat", link:"https://inflection.ai/", usage:45,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"감성적 대화에 특화",
      en:"Specialized in emotional conversation",
      zh:"专注于情感对话",
      ja:"感情的な会話に特化",
      de:"Spezialisiert auf emotionale Gespräche",
      fr:"Spécialisé dans la conversation émotionnelle",
      ru:"Специализируется на эмоциональных разговорах",
      hi:"भावनात्मक बातचीत में विशेषज्ञ"
    }},
  { name:"Jasper Chat", category:"chat", link:"https://www.jasper.ai/chat", usage:55,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"마케팅 특화 챗봇",
      en:"Marketing-focused chatbot",
      zh:"营销专用聊天机器人",
      ja:"マーケティング特化チャットボット",
      de:"Marketing-fokussierter Chatbot",
      fr:"Chatbot axé sur le marketing",
      ru:"Чат-бот для маркетинга",
      hi:"मार्केटिंग-केंद्रित चैटबॉट"
    }},
  { name:"Chatsonic", category:"chat", link:"https://writesonic.com/chat", usage:50,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"실시간 정보 검색 챗봇",
      en:"Real-time information search chatbot",
      zh:"实时信息搜索聊天机器人",
      ja:"リアルタイム情報検索チャットボット",
      de:"Echtzeit-Informationssuch-Chatbot",
      fr:"Chatbot de recherche d'informations en temps réel",
      ru:"Чат-бот с поиском информации в реальном времени",
      hi:"रीयल-टाइम जानकारी खोज चैटबॉट"
    }},
  { name:"YouChat", category:"chat", link:"https://you.com/chat", usage:47,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"You.com의 AI 챗봇",
      en:"You.com's AI chatbot",
      zh:"You.com的AI聊天机器人",
      ja:"You.comのAIチャットボット",
      de:"You.coms KI-Chatbot",
      fr:"Chatbot IA de You.com",
      ru:"ИИ-чат-бот You.com",
      hi:"You.com का AI चैटबॉट"
    }},

  // ========== 검색/리서치 (8개) ==========
  { name:"Perplexity", category:"search", link:"https://www.perplexity.ai/", usage:78,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"출처 기반 AI 검색/요약",
      en:"Source-based AI search and summary",
      zh:"基于来源的AI搜索/摘要",
      ja:"出典ベースのAI検索/要約",
      de:"Quellenbasierte KI-Suche und Zusammenfassung",
      fr:"Recherche et résumé IA basés sur les sources",
      ru:"Поиск и обобщение ИИ на основе источников",
      hi:"स्रोत-आधारित AI खोज और सारांश"
    }},
  { name:"You.com", category:"search", link:"https://you.com/", usage:54,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"프라이버시 중심 AI 검색",
      en:"Privacy-focused AI search",
      zh:"注重隐私的AI搜索",
      ja:"プライバシー重視のAI検索",
      de:"Datenschutzorientierte KI-Suche",
      fr:"Recherche IA axée sur la confidentialité",
      ru:"ИИ-поиск с акцентом на конфиденциальность",
      hi:"गोपनीयता-केंद्रित AI खोज"
    }},
  { name:"Phind", category:"search", link:"https://www.phind.com/", usage:48,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"개발자 전용 코드 검색",
      en:"Developer-focused code search",
      zh:"开发者专用代码搜索",
      ja:"開発者向けコード検索",
      de:"Entwicklerorientierte Codesuche",
      fr:"Recherche de code pour développeurs",
      ru:"Поиск кода для разработчиков",
      hi:"डेवलपर-केंद्रित कोड खोज"
    }},
  { name:"Elicit", category:"search", link:"https://elicit.org/", usage:46,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"학술 논문 검색/요약",
      en:"Academic paper search and summary",
      zh:"学术论文搜索/摘要",
      ja:"学術論文検索/要約",
      de:"Akademische Papiersuche und Zusammenfassung",
      fr:"Recherche et résumé de papiers académiques",
      ru:"Поиск и обобщение научных статей",
      hi:"अकादमिक पेपर खोज और सारांश"
    }},
  { name:"Consensus", category:"search", link:"https://consensus.app/", usage:44,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"과학 논문 기반 답변",
      en:"Answers based on scientific papers",
      zh:"基于科学论文的答案",
      ja:"科学論文に基づく回答",
      de:"Antworten basierend auf wissenschaftlichen Arbeiten",
      fr:"Réponses basées sur des articles scientifiques",
      ru:"Ответы на основе научных статей",
      hi:"वैज्ञानिक पेपर पर आधारित उत्तर"
    }},
  { name:"Semantic Scholar", category:"search", link:"https://www.semanticscholar.org/", usage:52,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"AI 학술 논문 검색",
      en:"AI academic paper search",
      zh:"AI学术论文搜索",
      ja:"AI学術論文検索",
      de:"KI-Suche für akademische Arbeiten",
      fr:"Recherche d'articles académiques par IA",
      ru:"ИИ-поиск научных статей",
      hi:"AI अकादमिक पेपर खोज"
    }},
  { name:"Scispace", category:"search", link:"https://typeset.io/", usage:43,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"논문 읽기/요약 도우미",
      en:"Paper reading/summary assistant",
      zh:"论文阅读/摘要助手",
      ja:"論文読解/要約アシスタント",
      de:"Assistent zum Lesen/Zusammenfassen von Papieren",
      fr:"Assistant de lecture/résumé de papiers",
      ru:"Помощник для чтения/обобщения статей",
      hi:"पेपर पढ़ने/सारांश सहायक"
    }},
  { name:"Connected Papers", category:"search", link:"https://www.connectedpapers.com/", usage:40,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"논문 관계도 시각화",
      en:"Paper relationship visualization",
      zh:"论文关系图可视化",
      ja:"論文関係図の可視化",
      de:"Visualisierung von Papierbeziehungen",
      fr:"Visualisation des relations entre papiers",
      ru:"Визуализация связей между статьями",
      hi:"पेपर संबंध विज़ुअलाइज़ेशन"
    }},

  // ========== 이미지 (12개) ==========
  { name:"Midjourney", category:"image", link:"https://www.midjourney.com/", usage:84,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"고퀄 이미지 생성(디스코드)",
      en:"High-quality image generation (Discord)",
      zh:"高质量图像生成(Discord)",
      ja:"高品質画像生成(Discord)",
      de:"Hochwertige Bilderzeugung (Discord)",
      fr:"Génération d'images haute qualité (Discord)",
      ru:"Генерация изображений высокого качества (Discord)",
      hi:"उच्च-गुणवत्ता छवि निर्माण (Discord)"
    }},
  { name:"DALL-E 3", category:"image", link:"https://openai.com/dall-e-3", usage:78,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"ChatGPT Plus 이미지 생성",
      en:"ChatGPT Plus image generation",
      zh:"ChatGPT Plus图像生成",
      ja:"ChatGPT Plus画像生成",
      de:"ChatGPT Plus Bilderzeugung",
      fr:"Génération d'images ChatGPT Plus",
      ru:"Генерация изображений ChatGPT Plus",
      hi:"ChatGPT Plus छवि निर्माण"
    }},
  { name:"Adobe Firefly", category:"image", link:"https://firefly.adobe.com/", usage:73,
    price:{
      ko:"부분무료", en:"Partially Free", zh:"部分免费", ja:"一部無料",
      de:"Teilweise kostenlos", fr:"Partiellement gratuit", ru:"Частично бесплатно", hi:"आंशिक रूप से मुफ्त"
    },
    desc:{
      ko:"어도비의 생성형 이미지",
      en:"Adobe generative image",
      zh:"Adobe生成式图像",
      ja:"Adobe生成画像",
      de:"Adobe generative Bilder",
      fr:"Images génératives Adobe",
      ru:"Генеративные изображения Adobe",
      hi:"Adobe जनरेटिव छवि"
    }},
  { name:"Leonardo AI", category:"image", link:"https://leonardo.ai/", usage:60,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"게임 스타일 이미지 생성",
      en:"Game-style image generation",
      zh:"游戏风格图像生成",
      ja:"ゲームスタイル画像生成",
      de:"Spielstil-Bilderzeugung",
      fr:"Génération d'images style jeu",
      ru:"Генерация изображений в игровом стиле",
      hi:"गेम-स्टाइल छवि निर्माण"
    }},
  { name:"Ideogram", category:"image", link:"https://ideogram.ai/", usage:58,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"글자 포함 이미지 생성",
      en:"Image generation with text",
      zh:"包含文字的图像生成",
      ja:"テキスト入り画像生成",
      de:"Bilderzeugung mit Text",
      fr:"Génération d'images avec texte",
      ru:"Генерация изображений с текстом",
      hi:"टेक्स्ट के साथ छवि निर्माण"
    }},
  { name:"DreamStudio", category:"image", link:"https://dreamstudio.ai/", usage:55,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"Stable Diffusion 이미지",
      en:"Stable Diffusion images",
      zh:"Stable Diffusion图像",
      ja:"Stable Diffusion画像",
      de:"Stable Diffusion-Bilder",
      fr:"Images Stable Diffusion",
      ru:"Изображения Stable Diffusion",
      hi:"Stable Diffusion छवियां"
    }},
  { name:"Remove.bg", category:"image", link:"https://www.remove.bg/", usage:75,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"배경 자동 제거",
      en:"Automatic background removal",
      zh:"自动去除背景",
      ja:"背景自動削除",
      de:"Automatische Hintergrundentfernung",
      fr:"Suppression automatique de l'arrière-plan",
      ru:"Автоматическое удаление фона",
      hi:"स्वचालित पृष्ठभूमि हटाना"
    }},
  { name:"Krea AI", category:"image", link:"https://www.krea.ai/", usage:53,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"실시간 이미지 생성",
      en:"Real-time image generation",
      zh:"实时图像生成",
      ja:"リアルタイム画像生成",
      de:"Echtzeit-Bilderzeugung",
      fr:"Génération d'images en temps réel",
      ru:"Генерация изображений в реальном времени",
      hi:"रीयल-टाइम छवि निर्माण"
    }},
  { name:"Playground AI", category:"image", link:"https://playground.com/", usage:56,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"무료 이미지 생성 플랫폼",
      en:"Free image generation platform",
      zh:"免费图像生成平台",
      ja:"無料画像生成プラットフォーム",
      de:"Kostenlose Bilderzeugungsplattform",
      fr:"Plateforme de génération d'images gratuite",
      ru:"Бесплатная платформа для генерации изображений",
      hi:"मुफ्त छवि निर्माण प्लेटफॉर्म"
    }},
  { name:"NightCafe", category:"image", link:"https://nightcafe.studio/", usage:49,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"다양한 스타일 이미지",
      en:"Various style images",
      zh:"多种风格图像",
      ja:"様々なスタイルの画像",
      de:"Verschiedene Stilbilder",
      fr:"Images de styles variés",
      ru:"Изображения в различных стилях",
      hi:"विभिन्न शैली की छवियां"
    }},
  { name:"Lexica", category:"image", link:"https://lexica.art/", usage:47,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 이미지 검색/생성",
      en:"AI image search/generation",
      zh:"AI图像搜索/生成",
      ja:"AI画像検索/生成",
      de:"KI-Bildsuche/Erzeugung",
      fr:"Recherche/génération d'images IA",
      ru:"Поиск/генерация изображений ИИ",
      hi:"AI छवि खोज/निर्माण"
    }},
  { name:"BlueWillow", category:"image", link:"https://www.bluewillow.ai/", usage:44,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"무료 이미지 생성(디스코드)",
      en:"Free image generation (Discord)",
      zh:"免费图像生成(Discord)",
      ja:"無料画像生成(Discord)",
      de:"Kostenlose Bilderzeugung (Discord)",
      fr:"Génération d'images gratuite (Discord)",
      ru:"Бесплатная генерация изображений (Discord)",
      hi:"मुफ्त छवि निर्माण (Discord)"
    }},

  // ========== 영상 (12개) ==========
  { name:"Runway", category:"video", link:"https://runwayml.com/", usage:72,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"텍스트→영상 생성/편집",
      en:"Text-to-video generation/editing",
      zh:"文本→视频生成/编辑",
      ja:"テキスト→動画生成/編集",
      de:"Text-zu-Video-Erzeugung/Bearbeitung",
      fr:"Génération/édition texte vers vidéo",
      ru:"Генерация/редактирование видео из текста",
      hi:"टेक्स्ट-से-वीडियो निर्माण/संपादन"
    }},
  { name:"Pika", category:"video", link:"https://pika.art/", usage:66,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"짧은 영상 생성",
      en:"Short video generation",
      zh:"短视频生成",
      ja:"ショート動画生成",
      de:"Kurzvideo-Erzeugung",
      fr:"Génération de courtes vidéos",
      ru:"Генерация коротких видео",
      hi:"छोटी वीडियो निर्माण"
    }},
  { name:"Luma Dream Machine", category:"video", link:"https://lumalabs.ai/dream-machine", usage:64,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"고품질 영상 생성",
      en:"High-quality video generation",
      zh:"高质量视频生成",
      ja:"高品質動画生成",
      de:"Hochwertige Videoerzeugung",
      fr:"Génération de vidéos haute qualité",
      ru:"Генерация видео высокого качества",
      hi:"उच्च-गुणवत्ता वीडियो निर्माण"
    }},
  { name:"CapCut", category:"video", link:"https://www.capcut.com/", usage:76,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"영상편집 + 자동 자막",
      en:"Video editing + auto subtitles",
      zh:"视频编辑+自动字幕",
      ja:"動画編集+自動字幕",
      de:"Videobearbeitung + automatische Untertitel",
      fr:"Édition vidéo + sous-titres automatiques",
      ru:"Редактирование видео + авто субтитры",
      hi:"वीडियो संपादन + स्वचालित उपशीर्षक"
    }},
  { name:"HeyGen", category:"video", link:"https://www.heygen.com/", usage:62,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 아바타 영상 제작",
      en:"AI avatar video creation",
      zh:"AI头像视频制作",
      ja:"AIアバター動画制作",
      de:"KI-Avatar-Videoerstellung",
      fr:"Création de vidéos d'avatar IA",
      ru:"Создание видео с ИИ-аватарами",
      hi:"AI अवतार वीडियो निर्माण"
    }},
  { name:"Synthesia", category:"video", link:"https://www.synthesia.io/", usage:70,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"AI 아바타 교육 영상",
      en:"AI avatar educational videos",
      zh:"AI头像教育视频",
      ja:"AIアバター教育動画",
      de:"KI-Avatar-Lernvideos",
      fr:"Vidéos éducatives d'avatar IA",
      ru:"Образовательные видео с ИИ-аватарами",
      hi:"AI अवतार शैक्षिक वीडियो"
    }},
  { name:"VEED.IO", category:"video", link:"https://www.veed.io/", usage:68,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"브라우저 영상 편집",
      en:"Browser video editing",
      zh:"浏览器视频编辑",
      ja:"ブラウザ動画編集",
      de:"Browser-Videobearbeitung",
      fr:"Édition vidéo dans le navigateur",
      ru:"Редактирование видео в браузере",
      hi:"ब्राउज़र वीडियो संपादन"
    }},
  { name:"Pictory", category:"video", link:"https://pictory.ai/", usage:58,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"텍스트→짧은 영상",
      en:"Text to short video",
      zh:"文本→短视频",
      ja:"テキスト→ショート動画",
      de:"Text zu Kurzvideo",
      fr:"Texte vers courte vidéo",
      ru:"Текст в короткое видео",
      hi:"टेक्स्ट से छोटी वीडियो"
    }},
  { name:"Descript", category:"video", link:"https://www.descript.com/", usage:65,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"영상/팟캐스트 편집",
      en:"Video/podcast editing",
      zh:"视频/播客编辑",
      ja:"動画/ポッドキャスト編集",
      de:"Video-/Podcast-Bearbeitung",
      fr:"Édition vidéo/podcast",
      ru:"Редактирование видео/подкастов",
      hi:"वीडियो/पॉडकास्ट संपादन"
    }},
  { name:"InVideo", category:"video", link:"https://invideo.io/", usage:60,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"템플릿 기반 영상 제작",
      en:"Template-based video creation",
      zh:"基于模板的视频制作",
      ja:"テンプレートベースの動画制作",
      de:"Vorlagenbasierte Videoerstellung",
      fr:"Création de vidéos basée sur des modèles",
      ru:"Создание видео на основе шаблонов",
      hi:"टेम्पलेट-आधारित वीडियो निर्माण"
    }},
  { name:"Fliki", category:"video", link:"https://fliki.ai/", usage:54,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"텍스트→영상 변환",
      en:"Text to video conversion",
      zh:"文本→视频转换",
      ja:"テキスト→動画変換",
      de:"Text-zu-Video-Konvertierung",
      fr:"Conversion texte en vidéo",
      ru:"Конвертация текста в видео",
      hi:"टेक्स्ट से वीडियो रूपांतरण"
    }},
  { name:"Colossyan", category:"video", link:"https://www.colossyan.com/", usage:52,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"AI 아바타 교육 영상",
      en:"AI avatar training videos",
      zh:"AI头像培训视频",
      ja:"AIアバタートレーニング動画",
      de:"KI-Avatar-Schulungsvideos",
      fr:"Vidéos de formation d'avatar IA",
      ru:"Обучающие видео с ИИ-аватарами",
      hi:"AI अवतार प्रशिक्षण वीडियो"
    }},

  // ========== 음성/음악 (10개) ==========
  { name:"ElevenLabs", category:"audio", link:"https://elevenlabs.io/", usage:68,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"자연스러운 TTS/음성",
      en:"Natural TTS/voice",
      zh:"自然的TTS/语音",
      ja:"自然なTTS/音声",
      de:"Natürliche TTS/Stimme",
      fr:"TTS/voix naturelle",
      ru:"Естественный TTS/голос",
      hi:"प्राकृतिक TTS/आवाज"
    }},
  { name:"Suno", category:"audio", link:"https://suno.ai/", usage:74,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"가사로 노래 생성",
      en:"Generate songs from lyrics",
      zh:"根据歌词生成歌曲",
      ja:"歌詞から曲を生成",
      de:"Songs aus Texten generieren",
      fr:"Générer des chansons à partir de paroles",
      ru:"Генерация песен из текста",
      hi:"गीतों से गाने बनाएं"
    }},
  { name:"Udio", category:"audio", link:"https://www.udio.com/", usage:60,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"고퀄 음악 생성",
      en:"High-quality music generation",
      zh:"高质量音乐生成",
      ja:"高品質音楽生成",
      de:"Hochwertige Musikerzeugung",
      fr:"Génération de musique haute qualité",
      ru:"Генерация музыки высокого качества",
      hi:"उच्च-गुणवत्ता संगीत निर्माण"
    }},
  { name:"Murf AI", category:"audio", link:"https://murf.ai/", usage:59,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"텍스트→음성 변환",
      en:"Text to voice conversion",
      zh:"文本→语音转换",
      ja:"テキスト→音声変換",
      de:"Text-zu-Sprache-Konvertierung",
      fr:"Conversion texte en voix",
      ru:"Конвертация текста в голос",
      hi:"टेक्स्ट से आवाज रूपांतरण"
    }},
  { name:"Otter.ai", category:"audio", link:"https://otter.ai/", usage:72,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"회의 음성→텍스트",
      en:"Meeting voice to text",
      zh:"会议语音→文本",
      ja:"会議音声→テキスト",
      de:"Besprechungssprache zu Text",
      fr:"Voix de réunion en texte",
      ru:"Голос встречи в текст",
      hi:"मीटिंग आवाज से टेक्स्ट"
    }},
  { name:"Stable Audio", category:"audio", link:"https://www.stableaudio.com/", usage:55,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"배경음악/효과음 생성",
      en:"Background music/sound effects",
      zh:"背景音乐/音效生成",
      ja:"BGM/効果音生成",
      de:"Hintergrundmusik/Soundeffekte",
      fr:"Musique de fond/effets sonores",
      ru:"Фоновая музыка/звуковые эффекты",
      hi:"पृष्ठभूमि संगीत/ध्वनि प्रभाव"
    }},
  { name:"Speechify", category:"audio", link:"https://speechify.com/", usage:63,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"텍스트 읽어주기(TTS)",
      en:"Text-to-speech reader",
      zh:"文本朗读(TTS)",
      ja:"テキスト読み上げ(TTS)",
      de:"Text-zu-Sprache-Leser",
      fr:"Lecteur texte-parole",
      ru:"Чтение текста (TTS)",
      hi:"टेक्स्ट-टू-स्पीच रीडर"
    }},
  { name:"Resemble AI", category:"audio", link:"https://www.resemble.ai/", usage:50,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"음성 클론/합성",
      en:"Voice cloning/synthesis",
      zh:"语音克隆/合成",
      ja:"音声クローン/合成",
      de:"Stimmenklonen/Synthese",
      fr:"Clonage/synthèse vocale",
      ru:"Клонирование/синтез голоса",
      hi:"आवाज क्लोनिंग/संश्लेषण"
    }},
  { name:"AIVA", category:"audio", link:"https://www.aiva.ai/", usage:52,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 작곡가",
      en:"AI composer",
      zh:"AI作曲家",
      ja:"AI作曲家",
      de:"KI-Komponist",
      fr:"Compositeur IA",
      ru:"ИИ-композитор",
      hi:"AI संगीतकार"
    }},
  { name:"Boomy", category:"audio", link:"https://boomy.com/", usage:48,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"간단한 음악 생성",
      en:"Simple music generation",
      zh:"简单音乐生成",
      ja:"シンプルな音楽生成",
      de:"Einfache Musikerzeugung",
      fr:"Génération de musique simple",
      ru:"Простая генерация музыки",
      hi:"सरल संगीत निर्माण"
    }},

  // ========== 코딩 (10개) ==========
  { name:"GitHub Copilot", category:"coding", link:"https://github.com/features/copilot", usage:83,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"IDE 코드 자동완성",
      en:"IDE code autocomplete",
      zh:"IDE代码自动完成",
      ja:"IDEコード自動補完",
      de:"IDE-Code-Autovervollständigung",
      fr:"Auto-complétion de code IDE",
      ru:"Автодополнение кода в IDE",
      hi:"IDE कोड ऑटोकम्प्लीट"
    }},
  { name:"Cursor", category:"coding", link:"https://www.cursor.com/", usage:67,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 중심 코드 에디터",
      en:"AI-focused code editor",
      zh:"以AI为中心的代码编辑器",
      ja:"AI中心のコードエディター",
      de:"KI-fokussierter Code-Editor",
      fr:"Éditeur de code axé sur l'IA",
      ru:"Редактор кода с акцентом на ИИ",
      hi:"AI-केंद्रित कोड एडिटर"
    }},
  { name:"Codeium", category:"coding", link:"https://codeium.com/", usage:57,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"무료 코드 자동완성",
      en:"Free code autocomplete",
      zh:"免费代码自动完成",
      ja:"無料コード自動補完",
      de:"Kostenlose Code-Autovervollständigung",
      fr:"Auto-complétion de code gratuite",
      ru:"Бесплатное автодополнение кода",
      hi:"मुफ्त कोड ऑटोकम्प्लीट"
    }},
  { name:"Replit", category:"coding", link:"https://replit.com/", usage:61,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"브라우저 코딩+AI",
      en:"Browser coding + AI",
      zh:"浏览器编程+AI",
      ja:"ブラウザコーディング+AI",
      de:"Browser-Codierung + KI",
      fr:"Codage navigateur + IA",
      ru:"Кодирование в браузере + ИИ",
      hi:"ब्राउज़र कोडिंग + AI"
    }},
  { name:"Tabnine", category:"coding", link:"https://www.tabnine.com/", usage:52,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 코드 자동완성",
      en:"AI code autocomplete",
      zh:"AI代码自动完成",
      ja:"AIコード自動補完",
      de:"KI-Code-Autovervollständigung",
      fr:"Auto-complétion de code IA",
      ru:"ИИ автодополнение кода",
      hi:"AI कोड ऑटोकम्प्लीट"
    }},
  { name:"Amazon CodeWhisperer", category:"coding", link:"https://aws.amazon.com/codewhisperer/", usage:55,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AWS 코드 자동완성",
      en:"AWS code autocomplete",
      zh:"AWS代码自动完成",
      ja:"AWSコード自動補完",
      de:"AWS-Code-Autovervollständigung",
      fr:"Auto-complétion de code AWS",
      ru:"Автодополнение кода AWS",
      hi:"AWS कोड ऑटोकम्प्लीट"
    }},
  { name:"Sourcegraph Cody", category:"coding", link:"https://sourcegraph.com/cody", usage:48,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"코드베이스 AI 검색",
      en:"Codebase AI search",
      zh:"代码库AI搜索",
      ja:"コードベースAI検索",
      de:"Codebasis-KI-Suche",
      fr:"Recherche IA de base de code",
      ru:"ИИ-поиск по кодовой базе",
      hi:"कोडबेस AI खोज"
    }},
  { name:"Blackbox AI", category:"coding", link:"https://www.blackbox.ai/", usage:45,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"코드 자동완성/검색",
      en:"Code autocomplete/search",
      zh:"代码自动完成/搜索",
      ja:"コード自動補完/検索",
      de:"Code-Autovervollständigung/Suche",
      fr:"Auto-complétion/recherche de code",
      ru:"Автодополнение/поиск кода",
      hi:"कोड ऑटोकम्प्लीट/खोज"
    }},
  { name:"AskCodi", category:"coding", link:"https://www.askcodi.com/", usage:42,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"코드 생성/설명",
      en:"Code generation/explanation",
      zh:"代码生成/解释",
      ja:"コード生成/説明",
      de:"Codeerzeugung/Erklärung",
      fr:"Génération/explication de code",
      ru:"Генерация/объяснение кода",
      hi:"कोड निर्माण/व्याख्या"
    }},
  { name:"CodeGPT", category:"coding", link:"https://codegpt.co/", usage:46,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"VS Code AI 확장",
      en:"VS Code AI extension",
      zh:"VS Code AI扩展",
      ja:"VS Code AI拡張",
      de:"VS Code KI-Erweiterung",
      fr:"Extension IA VS Code",
      ru:"Расширение ИИ для VS Code",
      hi:"VS Code AI एक्सटेंशन"
    }},

  // ========== 글쓰기 (10개) ==========
  { name:"Grammarly", category:"writing", link:"https://www.grammarly.com/", usage:77,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"영어 문법 교정",
      en:"English grammar correction",
      zh:"英语语法校正",
      ja:"英語文法修正",
      de:"Englische Grammatikkorrektur",
      fr:"Correction de grammaire anglaise",
      ru:"Корректировка английской грамматики",
      hi:"अंग्रेजी व्याकरण सुधार"
    }},
  { name:"DeepL", category:"writing", link:"https://www.deepl.com/", usage:75,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"고품질 번역기",
      en:"High-quality translator",
      zh:"高质量翻译器",
      ja:"高品質翻訳ツール",
      de:"Hochwertiger Übersetzer",
      fr:"Traducteur de haute qualité",
      ru:"Высококачественный переводчик",
      hi:"उच्च-गुणवत्ता अनुवादक"
    }},
  { name:"QuillBot", category:"writing", link:"https://quillbot.com/", usage:63,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"영어 패러프레이즈",
      en:"English paraphrasing",
      zh:"英语改写",
      ja:"英語パラフレーズ",
      de:"Englisches Paraphrasieren",
      fr:"Paraphrase en anglais",
      ru:"Перефразирование на английском",
      hi:"अंग्रेजी पैराफ्रेजिंग"
    }},
  { name:"Jasper", category:"writing", link:"https://www.jasper.ai/", usage:68,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"마케팅 글쓰기 AI",
      en:"Marketing writing AI",
      zh:"营销写作AI",
      ja:"マーケティングライティングAI",
      de:"Marketing-Schreib-KI",
      fr:"IA d'écriture marketing",
      ru:"ИИ для маркетингового контента",
      hi:"मार्केटिंग लेखन AI"
    }},
  { name:"Copy.ai", category:"writing", link:"https://www.copy.ai/", usage:64,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"광고 카피 생성",
      en:"Ad copy generation",
      zh:"广告文案生成",
      ja:"広告コピー生成",
      de:"Werbetexterstellung",
      fr:"Génération de textes publicitaires",
      ru:"Генерация рекламных текстов",
      hi:"विज्ञापन कॉपी निर्माण"
    }},
  { name:"Writesonic", category:"writing", link:"https://writesonic.com/", usage:61,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"SEO 글쓰기 도구",
      en:"SEO writing tool",
      zh:"SEO写作工具",
      ja:"SEOライティングツール",
      de:"SEO-Schreibwerkzeug",
      fr:"Outil d'écriture SEO",
      ru:"Инструмент для SEO-контента",
      hi:"SEO लेखन उपकरण"
    }},
  { name:"Rytr", category:"writing", link:"https://rytr.me/", usage:55,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"다양한 글 형식 생성",
      en:"Various writing format generation",
      zh:"各种写作格式生成",
      ja:"様々なライティング形式の生成",
      de:"Verschiedene Schreibformate generieren",
      fr:"Génération de divers formats d'écriture",
      ru:"Генерация различных форматов текста",
      hi:"विभिन्न लेखन प्रारूप निर्माण"
    }},
  { name:"Sudowrite", category:"writing", link:"https://www.sudowrite.com/", usage:48,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"소설/창작 글쓰기",
      en:"Novel/creative writing",
      zh:"小说/创意写作",
      ja:"小説/創作ライティング",
      de:"Roman-/Kreativschreiben",
      fr:"Écriture de roman/créative",
      ru:"Написание романов/творческий контент",
      hi:"उपन्यास/रचनात्मक लेखन"
    }},
  { name:"Wordtune", category:"writing", link:"https://www.wordtune.com/", usage:56,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"문장 다듬기/수정",
      en:"Sentence refinement/editing",
      zh:"句子润色/修改",
      ja:"文章の洗練/編集",
      de:"Satzverfeinerung/Bearbeitung",
      fr:"Affinage/édition de phrases",
      ru:"Улучшение/редактирование предложений",
      hi:"वाक्य परिष्करण/संपादन"
    }},
  { name:"Hemingway Editor", category:"writing", link:"https://hemingwayapp.com/", usage:52,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"글 가독성 개선",
      en:"Improve writing readability",
      zh:"提高写作可读性",
      ja:"文章の読みやすさを改善",
      de:"Lesbarkeit des Schreibens verbessern",
      fr:"Améliorer la lisibilité de l'écriture",
      ru:"Улучшение читаемости текста",
      hi:"लेखन पठनीयता में सुधार"
    }},

  // ========== 디자인 (8개) ==========
  { name:"Canva", category:"design", link:"https://www.canva.com/", usage:80,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"디자인 템플릿+AI",
      en:"Design templates + AI",
      zh:"设计模板+AI",
      ja:"デザインテンプレート+AI",
      de:"Designvorlagen + KI",
      fr:"Modèles de design + IA",
      ru:"Шаблоны дизайна + ИИ",
      hi:"डिज़ाइन टेम्पलेट + AI"
    }},
  { name:"Figma AI", category:"design", link:"https://www.figma.com/", usage:66,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"Figma AI 디자인",
      en:"Figma AI design",
      zh:"Figma AI设计",
      ja:"Figma AIデザイン",
      de:"Figma KI-Design",
      fr:"Design Figma IA",
      ru:"Дизайн Figma с ИИ",
      hi:"Figma AI डिज़ाइन"
    }},
  { name:"Uizard", category:"design", link:"https://uizard.io/", usage:49,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"손그림→UI 변환",
      en:"Sketch to UI conversion",
      zh:"手绘→UI转换",
      ja:"手描き→UI変換",
      de:"Skizze zu UI-Konvertierung",
      fr:"Conversion croquis vers UI",
      ru:"Преобразование эскиза в UI",
      hi:"स्केच से UI रूपांतरण"
    }},
  { name:"Framer", category:"design", link:"https://www.framer.com/", usage:58,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 웹사이트 빌더",
      en:"AI website builder",
      zh:"AI网站构建器",
      ja:"AIウェブサイトビルダー",
      de:"KI-Website-Builder",
      fr:"Constructeur de sites web IA",
      ru:"ИИ-конструктор сайтов",
      hi:"AI वेबसाइट बिल्डर"
    }},
  { name:"Looka", category:"design", link:"https://looka.com/", usage:54,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"AI 로고 생성",
      en:"AI logo generation",
      zh:"AI标志生成",
      ja:"AIロゴ生成",
      de:"KI-Logo-Erzeugung",
      fr:"Génération de logo IA",
      ru:"Гénération de logo IA",
      hi:"AI लोगो निर्माण"
    }},
  { name:"Khroma", category:"design", link:"https://www.khroma.co/", usage:45,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"AI 색상 팔레트",
      en:"AI color palette",
      zh:"AI调色板",
      ja:"AIカラーパレット",
      de:"KI-Farbpalette",
      fr:"Palette de couleurs IA",
      ru:"ИИ цветовая палитра",
      hi:"AI कलर पैलेट"
    }},
  { name:"Fontjoy", category:"design", link:"https://fontjoy.com/", usage:42,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"AI 폰트 조합",
      en:"AI font pairing",
      zh:"AI字体搭配",
      ja:"AIフォントペアリング",
      de:"KI-Schriftpaarung",
      fr:"Appariement de polices IA",
      ru:"ИИ подбор шрифтов",
      hi:"AI फॉन्ट पेयरिंग"
    }},
  { name:"Designs.ai", category:"design", link:"https://designs.ai/", usage:50,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"로고/영상/목업 생성",
      en:"Logo/video/mockup generation",
      zh:"标志/视频/样机生成",
      ja:"ロゴ/動画/モックアップ生成",
      de:"Logo-/Video-/Mockup-Erzeugung",
      fr:"Génération de logo/vidéo/maquette",
      ru:"Генерация логотипа/видео/макета",
      hi:"लोगो/वीडियो/मॉकअप निर्माण"
    }},

  // ========== 생산성 (8개) ==========
  { name:"Notion AI", category:"productivity", link:"https://www.notion.so/product/ai", usage:69,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"노션 요약/정리",
      en:"Notion summary/organization",
      zh:"Notion摘要/整理",
      ja:"Notion要約/整理",
      de:"Notion Zusammenfassung/Organisation",
      fr:"Résumé/organisation Notion",
      ru:"Резюме/организация в Notion",
      hi:"Notion सारांश/संगठन"
    }},
  { name:"Hugging Face", category:"productivity", link:"https://huggingface.co/", usage:65,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"오픈소스 AI 모델",
      en:"Open-source AI models",
      zh:"开源AI模型",
      ja:"オープンソースAIモデル",
      de:"Open-Source-KI-Modelle",
      fr:"Modèles d'IA open-source",
      ru:"ИИ-модели с открытым исходным кодом",
      hi:"ओपन-सोर्स AI मॉडल"
    }},
  { name:"Tome", category:"productivity", link:"https://tome.app/", usage:60,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 프레젠테이션",
      en:"AI presentation",
      zh:"AI演示文稿",
      ja:"AIプレゼンテーション",
      de:"KI-Präsentation",
      fr:"Présentation IA",
      ru:"ИИ-презентация",
      hi:"AI प्रस्तुति"
    }},
  { name:"Gamma", category:"productivity", link:"https://gamma.app/", usage:63,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"문서/슬라이드 생성",
      en:"Document/slide generation",
      zh:"文档/幻灯片生成",
      ja:"文書/スライド生成",
      de:"Dokument-/Folienerzeugung",
      fr:"Génération de documents/diapositives",
      ru:"Генерация документов/слайдов",
      hi:"दस्तावेज़/स्लाइड निर्माण"
    }},
  { name:"Beautiful.ai", category:"productivity", link:"https://www.beautiful.ai/", usage:57,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 파워포인트",
      en:"AI PowerPoint",
      zh:"AI演示文稿",
      ja:"AIパワーポイント",
      de:"KI-PowerPoint",
      fr:"PowerPoint IA",
      ru:"ИИ PowerPoint",
      hi:"AI पावरपॉइंट"
    }},
  { name:"Mem", category:"productivity", link:"https://mem.ai/", usage:50,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 메모/지식 관리",
      en:"AI memo/knowledge management",
      zh:"AI备忘录/知识管理",
      ja:"AIメモ/知識管理",
      de:"KI-Memo/Wissensmanagement",
      fr:"Mémo/gestion des connaissances IA",
      ru:"ИИ заметки/управление знаниями",
      hi:"AI मेमो/ज्ञान प्रबंधन"
    }},
  { name:"Taskade", category:"productivity", link:"https://www.taskade.com/", usage:52,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 프로젝트 관리",
      en:"AI project management",
      zh:"AI项目管理",
      ja:"AIプロジェクト管理",
      de:"KIプロジェクト管理",
      fr:"Gestion de projet IA",
      ru:"ИИ управление проектами",
      hi:"AI प्रोजेक्ट प्रबंधन"
    }},
  { name:"Coda AI", category:"productivity", link:"https://coda.io/", usage:48,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"문서+자동화 AI",
      en:"Document + automation AI",
      zh:"文档+自动化AI",
      ja:"文書+自動化AI",
      de:"Dokument + Automatisierungs-KI",
      fr:"Document + IA d'automatisation",
      ru:"Документ + ИИ автоматизация",
      hi:"दस्तावेज़ + स्वचालन AI"
    }},

  // ========== 교육 (7개) ==========
  { name:"Photomath", category:"education", link:"https://photomath.com/", usage:71,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"수학 문제 풀이",
      en:"Math problem solving",
      zh:"数学问题解决",
      ja:"数学問題解決",
      de:"Mathematische Problemlösung",
      fr:"Résolution de problèmes mathématiques",
      ru:"Решение математических задач",
      hi:"गणित समस्या समाधान"
    }},
  { name:"Wolfram|Alpha", category:"education", link:"https://www.wolframalpha.com/", usage:59,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भु भुगतान"
    },
    desc:{
      ko:"계산/지식 질의",
      en:"Calculation/knowledge queries",
      zh:"计算/知识查询",
      ja:"計算/知識クエリ",
      de:"Berechnungs-/Wissensabfragen",
      fr:"Requêtes de calcul/connaissances",
      ru:"Вычисления/запросы знаний",
      hi:"गणना/ज्ञान प्रश्न"
    }},
  { name:"Khanmigo", category:"education", link:"https://www.khanacademy.org/", usage:47,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"칸아카데미 AI 튜터",
      en:"Khan Academy AI tutor",
      zh:"可汗学院AI导师",
      ja:"カーンアカデミーAIチューター",
      de:"Khan Academy KI-Tutor",
      fr:"Tuteur IA Khan Academy",
      ru:"ИИ-репетитор Khan Academy",
      hi:"खान अकादमी AI ट्यूटर"
    }},
  { name:"Quizlet", category:"education", link:"https://quizlet.com/", usage:58,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"AI 학습 플래시카드",
      en:"AI learning flashcards",
      zh:"AI学习闪卡",
      ja:"AI学習フラッシュカード",
      de:"KI-Lernkarten",
      fr:"Cartes mémoire d'apprentissage IA",
      ru:"ИИ обучающие карточки",
      hi:"AI लर्निंग फ्लैशकार्ड"
    }},
  { name:"Duolingo Max", category:"education", link:"https://www.duolingo.com/", usage:65,
    price:{
      ko:"유료", en:"Paid", zh:"付费", ja:"有料",
      de:"Kostenpflichtig", fr:"Payant", ru:"Платно", hi:"भुगतान"
    },
    desc:{
      ko:"AI 언어 학습",
      en:"AI language learning",
      zh:"AI语言学习",
      ja:"AI言語学習",
      de:"KI-Sprachlernen",
      fr:"Apprentissage des langues par IA",
      ru:"ИИ изучение языков",
      hi:"AI भाषा सीखना"
    }},
  { name:"Socratic", category:"education", link:"https://socratic.org/", usage:55,
    price:{
      ko:"무료", en:"Free", zh:"免费", ja:"無料",
      de:"Kostenlos", fr:"Gratuit", ru:"Бесплатно", hi:"मुफ्त"
    },
    desc:{
      ko:"구글의 학습 도우미",
      en:"Google's learning helper",
      zh:"谷歌的学习助手",
      ja:"Googleの学習ヘルパー",
      de:"Googles Lernhelfer",
      fr:"Assistant d'apprentissage de Google",
      ru:"Помощник в обучении от Google",
      hi:"Google का लर्निंग हेल्पर"
    }},
  { name:"Brainly", category:"education", link:"https://brainly.com/", usage:53,
    price:{
      ko:"무료+유료", en:"Free+Paid", zh:"免费+付费", ja:"無料+有料",
      de:"Kostenlos+Kostenpflichtig", fr:"Gratuit+Payant", ru:"Бесплатно+Платно", hi:"मुफ्त+भुगतान"
    },
    desc:{
      ko:"학생 질문/답변 AI",
      en:"Student Q&A AI",
      zh:"学生问答AI",
      ja:"学生Q&A AI",
      de:"Schüler-Q&A-KI",
      fr:"IA de questions-réponses étudiants",
      ru:"ИИ вопросов и ответов для студентов",
      hi:"छात्र Q&A AI"
    }}
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
    
    const descText = item.desc[currentLang] || item.desc.ko || "";
    const priceText = item.price[currentLang] || item.price.ko || "";

    const searchOK = q === "" || 
      item.name.toLowerCase().includes(q) ||
      descText.toLowerCase().includes(q) ||
      priceText.toLowerCase().includes(q); // ⭐ 가격 텍스트 검색 추가

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
    desc.textContent = item.desc[currentLang] || item.desc.ko || "";

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `
      <span class="chip">${t.priceLabel}: ${item.price[currentLang] || item.price.ko || ""}</span>
    `;

    const usageWrap = document.createElement("div");
    usageWrap.className = "usage";
    const usageVal = Math.max(0, Math.min(100, item.usage ?? 0));
    
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
