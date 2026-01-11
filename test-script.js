// Вопросы для теста - правильные ответы на РАЗНЫХ строках
const questions = [
    {
        id: 1,
        question: "Что такое системный блок?",
        options: [
            "Корпус, содержащий основные компоненты компьютера",
            "Монитор компьютера",
            "Внешнее устройство хранения данных",
            "Источник бесперебойного питания"
        ],
        correctAnswer: 0 // Первая строка
    },
    {
        id: 2,
        question: "Какую функцию выполняет материнская плата?",
        options: [
            "Обрабатывает графическую информацию",
            "Соединяет все компоненты компьютера между собой",
            "Хранит временные данные",
            "Обеспечивает питание компонентов"
        ],
        correctAnswer: 1 // Вторая строка
    },
    {
        id: 3,
        question: "Что такое CPU и какую функцию он выполняет?",
        options: [
            "Графический процессор - обрабатывает изображения",
            "Блок питания - обеспечивает питание",
            "Центральный процессор - выполняет вычисления и обработку данных",
            "Оперативная память - хранит временные данные"
        ],
        correctAnswer: 2 // Третья строка
    },
    {
        id: 4,
        question: "Чем отличается RAM от HDD?",
        options: [
            "RAM - постоянное хранилище, HDD - временное",
            "Оба являются временными хранилищами",
            "Оба являются постоянными хранилищами",
            "RAM - временное хранилище, HDD - постоянное"
        ],
        correctAnswer: 3 // Четвертая строка
    },
    {
        id: 5,
        question: "Что такое PSU и зачем он нужен?",
        options: [
            "Процессор - выполняет вычисления",
            "Видеокарта - обрабатывает графику",
            "Блок питания - преобразует сетевое напряжение",
            "Система охлаждения - охлаждает компоненты"
        ],
        correctAnswer: 2 // Третья строка
    },
    {
        id: 6,
        question: "Какое устройство отвечает за обработку графической информации?",
        options: [
            "Процессор (CPU)",
            "Оперативная память (RAM)",
            "Видеокарта (GPU)",
            "Материнская плата"
        ],
        correctAnswer: 2 // Третья строка
    },
    {
        id: 7,
        question: "Какие устройства относятся к устройствам ввода?",
        options: [
            "Монитор, принтер, колонки",
            "Клавиатура, мышь, сканер",
            "Флешки, внешние диски",
            "Веб-камера, микрофон"
        ],
        correctAnswer: 1 // Вторая строка
    },
    {
        id: 8,
        question: "Что такое периферийные устройства?",
        options: [
            "Внутренние компоненты системного блока",
            "Только устройства вывода информации",
            "Внешние устройства, подключаемые к компьютеру",
            "Только устройства хранения данных"
        ],
        correctAnswer: 2 // Третья строка
    },
    {
        id: 9,
        question: "Какие устройства относятся к сетевым?",
        options: [
            "Клавиатура, мышь, джойстик",
            "Монитор, принтер, сканер",
            "Колонки, наушники, микрофон",
            "Модем, роутер, сетевая карта"
        ],
        correctAnswer: 3 // Четвертая строка
    },
    {
        id: 10,
        question: "Какую функцию выполняют внешние HDD/SSD?",
        options: [
            "Обработка графической информации",
            "Охлаждение компонентов компьютера",
            "Ввод текстовой информации",
            "Перенос, резервное копирование и хранение данных"
        ],
        correctAnswer: 3 // Четвертая строка
    }
];

// Основной скрипт теста
document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM для теста
    const questionsContainer = document.getElementById('questions-container');
    const progressFill = document.getElementById('progress-fill');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const scoreEl = document.getElementById('score');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('results-container');
    const finalScoreEl = document.getElementById('final-score');
    const correctAnswersEl = document.getElementById('correct-answers');
    const knowledgeLevelEl = document.getElementById('knowledge-level');
    const restartBtn = document.getElementById('restart-btn');
    const testControls = document.querySelector('.test-controls');

    // Переменные состояния
    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let score = 0;

    // Инициализация теста
    function initTest() {
        totalQuestionsEl.textContent = questions.length;
        renderQuestion();
        updateNavigation();
    }

    // Рендер текущего вопроса
    function renderQuestion() {
        const question = questions[currentQuestionIndex];
        
        let optionsHtml = '';
        question.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === index;
            const optionClass = isSelected ? 'option selected' : 'option';
            
            optionsHtml += `
                <button class="${optionClass}" data-index="${index}" onclick="selectOption(${index})">
                    <span class="option-check"></span>
                    <span class="option-text">${option}</span>
                </button>
            `;
        });

        const questionHtml = `
            <div class="question-card">
                <div class="question-header">
                    <div class="question-number">${question.id}</div>
                    <div class="question-text">${question.question}</div>
                </div>
                <div class="options-container">
                    ${optionsHtml}
                </div>
            </div>
        `;

        questionsContainer.innerHTML = questionHtml;
        currentQuestionEl.textContent = question.id;
        
        // Обновляем прогресс
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressFill.style.width = `${progress}%`;
    }

    // Выбор варианта ответа
    window.selectOption = function(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        renderQuestion();
        
        // Проверяем ответ сразу для отображения правильности
        const question = questions[currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            option.classList.remove('correct', 'incorrect');
            
            if (index === question.correctAnswer) {
                option.classList.add('correct');
            } else if (index === optionIndex && index !== question.correctAnswer) {
                option.classList.add('incorrect');
            }
        });
    };

    // Навигация
    function updateNavigation() {
        prevBtn.dis
