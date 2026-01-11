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

    // ====================================
    // ПРАКТИЧЕСКИЕ ЗАДАНИЯ
    // ====================================

    // Инициализация заданий
    initTrueFalseTask();
    initMatchingTask();

    // Функция для показа фидбека
    window.showFeedback = function(elementId, message, type) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.className = 'task-feedback show ' + type;
        
        // Автоматически скрыть через 5 секунд
        setTimeout(() => {
            element.className = 'task-feedback';
        }, 5000);
    };

    // Задание 1: Короткие вопросы
    window.checkTask1 = function() {
        const answers = {
            q1: 'процессор',
            q2: 'оперативная память',
            q3: 'монитор'
        };
        
        let correctCount = 0;
        const totalQuestions = 3;
        
        for (let i = 1; i <= totalQuestions; i++) {
            const input = document.getElementById(`q${i}`);
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = answers[`q${i}`];
            
            input.classList.remove('correct', 'incorrect');
            
            if (userAnswer === correctAnswer) {
                input.classList.add('correct');
                correctCount++;
            } else if (userAnswer !== '') {
                input.classList.add('incorrect');
            }
        }
        
        if (correctCount === totalQuestions) {
            showFeedback('task1-feedback', 'Отлично! Все ответы правильные!', 'success');
        } else {
            const percentage = Math.round((correctCount / totalQuestions) * 100);
            showFeedback('task1-feedback', `Правильно ${correctCount} из ${totalQuestions} (${percentage}%).`, 'error');
        }
    };

    // Задание 2: Верно/Неверно
    function initTrueFalseTask() {
        const tfButtons = document.querySelectorAll('.tf-btn');
        
        tfButtons.forEach(button => {
            button.addEventListener('click', function() {
                const questionNum = this.dataset.question;
                
                // Снимаем выделение с других кнопок этого вопроса
                const otherButtons = document.querySelectorAll(`.tf-btn[data-question="${questionNum}"]`);
                otherButtons.forEach(btn => {
                    btn.classList.remove('selected-true', 'selected-false');
                });
                
                // Выделяем нажатую кнопку
                if (this.dataset.answer === 'true') {
                    this.classList.add('selected-true');
                } else {
                    this.classList.add('selected-false');
                }
            });
        });
    }

    window.checkTask2 = function() {
        const correctAnswers = {
            1: 'false',  // Процессор НЕ хранит файлы
            2: 'true',   // Клавиатура - устройство ввода
            3: 'false'   // Монитор НЕ подключается к сокету процессора
        };
        
        let correctCount = 0;
        const totalQuestions = 3;
        
        for (let i = 1; i <= totalQuestions; i++) {
            const selectedButton = document.querySelector(`.tf-btn[data-question="${i}"].selected-true, .tf-btn[data-question="${i}"].selected-false`);
            
            if (selectedButton && selectedButton.dataset.answer === correctAnswers[i]) {
                correctCount++;
                selectedButton.classList.remove('selected-true', 'selected-false');
                selectedButton.classList.add(correctAnswers[i] === 'true' ? 'selected-true' : 'selected-false');
            }
        }
        
        if (correctCount === totalQuestions) {
            showFeedback('task2-feedback', 'Отлично! Все ответы верны!', 'success');
        } else {
            const percentage = Math.round((correctCount / totalQuestions) * 100);
            showFeedback('task2-feedback', `Правильно ${correctCount} из ${totalQuestions} (${percentage}%).`, 'error');
        }
    };

    // Задание 3: Подбери пару
    function initMatchingTask() {
        const matchItems = document.querySelectorAll('.match-item');
        let selectedLeft = null;
        let selectedRight = null;
        
        const correctMatches = {
            '1': 'a', // Процессор -> Выполнение вычислений
            '2': 'c', // RAM -> Временная память
            '3': 'b'  // Видеокарта -> Обработка графики
        };
        
        matchItems.forEach(item => {
            item.addEventListener('click', function() {
                // Определяем, левый это элемент или правый
                const parent = this.parentElement;
                const isLeft = parent.classList.contains('match-left');
                
                // Снимаем выделение с элементов той же колонки
                const itemsInColumn = parent.querySelectorAll('.match-item');
                itemsInColumn.forEach(i => i.classList.remove('selected'));
                
                // Выделяем текущий элемент
                this.classList.add('selected');
                
                // Сохраняем выбор
                if (isLeft) {
                    selectedLeft = this.dataset.match;
                } else {
                    selectedRight = this.dataset.match;
                }
                
                // Проверяем, если выбраны оба
                if (selectedLeft && selectedRight) {
                    checkMatchPair(selectedLeft, selectedRight);
                    selectedLeft = null;
                    selectedRight = null;
                }
            });
        });
        
        function checkMatchPair(left, right) {
            const leftItems = document.querySelectorAll('.match-left .match-item');
            const rightItems = document.querySelectorAll('.match-right .match-item');
            
            if (correctMatches[left] === right) {
                // Правильное сопоставление
                leftItems.forEach(item => {
                    if (item.dataset.match === left) {
                        item.classList.remove('selected');
                        item.classList.add('correct');
                    }
                });
                
                rightItems.forEach(item => {
                    if (item.dataset.match === right) {
                        item.classList.remove('selected');
                        item.classList.add('correct');
                    }
                });
                
                // Проверяем все ли сопоставлены
                checkAllMatched();
            } else {
                // Неправильное сопоставление
                leftItems.forEach(item => {
                    if (item.dataset.match === left && !item.classList.contains('correct')) {
                        item.classList.remove('selected');
                        item.classList.add('incorrect');
                        
                        setTimeout(() => {
                            item.classList.remove('incorrect');
                        }, 1000);
                    }
                });
                
                rightItems.forEach(item => {
                    if (item.dataset.match === right && !item.classList.contains('correct')) {
                        item.classList.remove('selected');
                        item.classList.add('incorrect');
                        
                        setTimeout(() => {
                            item.classList.remove('incorrect');
                        }, 1000);
                    }
                });
            }
        }
        
        function checkAllMatched() {
            const correctItems = document.querySelectorAll('.match-item.correct');
            if (correctItems.length === 6) { // Все 6 элементов сопоставлены
                setTimeout(() => {
                    showFeedback('task3-feedback', 'Отлично! Все пары подобраны правильно!', 'success');
                }, 500);
            }
        }
    }

    window.checkTask3 = function() {
        const correctItems = document.querySelectorAll('.match-item.correct');
        const totalItems = document.querySelectorAll('.match-item').length;
        
        if (correctItems.length === totalItems) {
            showFeedback('task3-feedback', 'Отлично! Все пары подобраны правильно!', 'success');
        } else {
            const percentage = Math.round((correctItems.length / totalItems) * 100);
            showFeedback('task3-feedback', `Правильно подобрано ${correctItems.length/2} из 3 пар (${percentage}%).`, 'error');
        }
    };
});
