// Вопросы для теста
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
        correctAnswer: 0
    },
    {
        id: 2,
        question: "Какую функцию выполняет материнская плата?",
        options: [
            "Соединяет все компоненты компьютера между собой",
            "Обрабатывает графическую информацию",
            "Хранит временные данные",
            "Обеспечивает питание компонентов"
        ],
        correctAnswer: 0
    },
    {
        id: 3,
        question: "Что такое CPU и какую функцию он выполняет?",
        options: [
            "Центральный процессор - выполняет вычисления и обработку данных",
            "Графический процессор - обрабатывает изображения",
            "Блок питания - обеспечивает питание",
            "Оперативная память - хранит временные данные"
        ],
        correctAnswer: 0
    },
    {
        id: 4,
        question: "Чем отличается RAM от HDD?",
        options: [
            "RAM - временное хранилище, HDD - постоянное",
            "RAM - постоянное хранилище, HDD - временное",
            "Оба являются временными хранилищами",
            "Оба являются постоянными хранилищами"
        ],
        correctAnswer: 0
    },
    {
        id: 5,
        question: "Что такое PSU и зачем он нужен?",
        options: [
            "Блок питания - преобразует сетевое напряжение",
            "Процессор - выполняет вычисления",
            "Видеокарта - обрабатывает графику",
            "Система охлаждения - охлаждает компоненты"
        ],
        correctAnswer: 0
    },
    {
        id: 6,
        question: "Какое устройство отвечает за обработку графической информации?",
        options: [
            "Видеокарта (GPU)",
            "Процессор (CPU)",
            "Оперативная память (RAM)",
            "Материнская плата"
        ],
        correctAnswer: 0
    },
    {
        id: 7,
        question: "Какие устройства относятся к устройствам ввода?",
        options: [
            "Клавиатура, мышь, сканер",
            "Монитор, принтер, колонки",
            "Флешки, внешние диски",
            "Веб-камера, микрофон"
        ],
        correctAnswer: 0
    },
    {
        id: 8,
        question: "Что такое периферийные устройства?",
        options: [
            "Внешние устройства, подключаемые к компьютеру",
            "Внутренние компоненты системного блока",
            "Только устройства вывода информации",
            "Только устройства хранения данных"
        ],
        correctAnswer: 0
    },
    {
        id: 9,
        question: "Какие устройства относятся к сетевым?",
        options: [
            "Модем, роутер, сетевая карта",
            "Клавиатура, мышь, джойстик",
            "Монитор, принтер, сканер",
            "Колонки, наушники, микрофон"
        ],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "Какую функцию выполняют внешние HDD/SSD?",
        options: [
            "Перенос, резервное копирование и хранение данных",
            "Обработка графической информации",
            "Охлаждение компонентов компьютера",
            "Ввод текстовой информации"
        ],
        correctAnswer: 0
    }
];

// Основной скрипт теста
document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
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
                <div class="${optionClass}" data-index="${index}" onclick="selectOption(${index})">
                    <div class="option-check"></div>
                    <div class="option-text">${option}</div>
                </div>
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
        prevBtn.disabled = currentQuestionIndex === 0;
        
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            submitBtn.style.display = 'none';
        }
    }

    // Следующий вопрос
    nextBtn.addEventListener('click', function() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
            updateNavigation();
        }
    });

    // Предыдущий вопрос
    prevBtn.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
            updateNavigation();
        }
    });

    // Завершение теста
    submitBtn.addEventListener('click', function() {
        calculateScore();
        showResults();
    });

    // Расчет результатов
    function calculateScore() {
        score = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });
        
        scoreEl.textContent = score * 10;
    }

    // Показать результаты
    function showResults() {
        const percentage = Math.round((score / questions.length) * 100);
        
        // Обновляем результаты
        finalScoreEl.textContent = percentage;
        correctAnswersEl.textContent = `${score}/${questions.length}`;
        
        // Определяем уровень знаний
        let level, levelClass;
        if (percentage >= 90) {
            level = "Эксперт";
            levelClass = "expert";
        } else if (percentage >= 70) {
            level = "Продвинутый";
            levelClass = "advanced";
        } else if (percentage >= 50) {
            level = "Средний";
            levelClass = "intermediate";
        } else {
            level = "Новичок";
            levelClass = "beginner";
        }
        
        knowledgeLevelEl.textContent = level;
        knowledgeLevelEl.className = `detail-value ${levelClass}`;
        
        // Анимируем прогресс-круг
        const circleFill = document.querySelector('.circle-fill');
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (percentage / 100) * circumference;
        circleFill.style.strokeDashoffset = offset;
        
        // Показываем результаты
        questionsContainer.style.display = 'none';
        testControls.style.display = 'none';
        resultsContainer.style.display = 'block';
    }

    // Перезапуск теста
    restartBtn.addEventListener('click', function() {
        currentQuestionIndex = 0;
        userAnswers = new Array(questions.length).fill(null);
        score = 0;
        
        scoreEl.textContent = '0';
        questionsContainer.style.display = 'block';
        testControls.style.display = 'flex';
        resultsContainer.style.display = 'none';
        
        initTest();
    });

    // Инициализируем тест
    initTest();
});
