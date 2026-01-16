// 1. AI 데이터 리스트 (여기에 계속 추가하면 돼)
const aiData = [
    {
        name: "ChatGPT",
        category: "chat",
        desc: "가장 유명한 대화형 AI",
        link: "https://chat.openai.com",
        popular: "최상"
    },
    {
        name: "Midjourney",
        category: "image",
        desc: "고퀄리티 그림 그려주는 AI",
        link: "https://www.midjourney.com",
        popular: "최상"
    },
    {
        name: "Claude 3",
        category: "chat",
        desc: "글쓰기와 코딩에 강한 AI",
        link: "https://claude.ai",
        popular: "높음"
    },
    {
        name: "Suno",
        category: "video", // 음악이지만 예시로 영상/음악 카테고리 묶음
        desc: "가사만 주면 노래 만들어주는 AI",
        link: "https://suno.ai",
        popular: "높음"
    },
    {
        name: "Gemini",
        category: "chat",
        desc: "구글이 만든 똑똑한 AI",
        link: "https://gemini.google.com",
        popular: "최상"
    },
    {
        name: "Pika",
        category: "video",
        desc: "텍스트로 영상 만드는 AI",
        link: "https://pika.art",
        popular: "높음"
    }
];

// 2. 화면에 AI 카드들을 만들어주는 함수
function displayAIs(data) {
    const container = document.getElementById('ai-container');
    container.innerHTML = ""; // 기존 내용 지우기

    data.forEach(ai => {
        // HTML 코드를 생성해서 넣기
        const cardHTML = `
            <div class="ai-card">
                <span class="category">${ai.category.toUpperCase()}</span>
                <h3>${ai.name}</h3>
                <p>${ai.desc}</p>
                <p>🔥 인기: ${ai.popular}</p>
                <a href="${ai.link}" target="_blank" class="ai-link">바로가기 →</a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 3. 필터 버튼 눌렀을 때 작동하는 함수
function filterAI(category) {
    if (category === 'all') {
        displayAIs(aiData); // 전체 보여주기
    } else {
        // 선택한 카테고리랑 같은 것만 골라내기
        const filtered = aiData.filter(ai => ai.category === category);
        displayAIs(filtered);
    }
}

// 4. 처음 사이트 켰을 때 전체 리스트 보여주기
displayAIs(aiData);