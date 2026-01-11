// Основной скрипт теста и практических заданий
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
    const timeSpentEl = document.getElementById('time-spent');
    const knowledgeLevelEl = document.getElementById('knowledge-level');
    const resultFeedback = document.getElementById('result-feedback');
    const restartBtn = document.getElementById('restart-btn');
    const testControls = document.querySelector('.test-controls');

    // Элементы для практических заданий
    const tasksCompletedEl = document.getElementById('tasks-completed');
    const tasksScoreEl = document.getElementById('tasks-score');
    const tasksProgressEl = document.getElementById('tasks-progress');
    const miniProgressFill = document.getElementById('mini-progress-fill');

    // Переменные состояния теста
    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let score = 0;
    let startTime = Date.now();

    // Переменные для практических заданий
    let completedTasks = 0;
    let tasksScore = 0;
    const taskPoints = {
        1: 30,
        2: 25,
        3: 35,
        4: 20
    };

    // Инициализация теста
    function initTest() {
        totalQuestionsEl.textContent = questions.length;
        renderQuestion();
        updateNavigation();
        startTime = Date.now();
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
        
        scoreEl.textContent = score * 10; // 10 баллов за каждый правильный ответ
    }

    // Показать результаты
    function showResults() {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(timeSpent / 60);
        const seconds = timeSpent % 60;
        
        const percentage = Math.round((score / questions.length) * 100);
        
        // Обновляем результаты
        finalScoreEl.textContent = percentage;
        correctAnswersEl.textContent = `${score}/${questions.length}`;
        timeSpentEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Определяем уровень знаний
        let level, levelClass, feedback;
        if (percentage >= 90) {
            level = "Эксперт";
            levelClass = "expert";
            feedback = "Отличный результат! Вы отлично разбираетесь в устройстве компьютера!";
        } else if (percentage >= 70) {
            level = "Продвинутый";
            levelClass = "advanced";
            feedback = "Хороший результат! Вы хорошо знаете основные компоненты компьютера.";
        } else if (percentage >= 50) {
            level = "Средний";
            levelClass = "intermediate";
            feedback = "Неплохо, но есть куда расти. Рекомендуем повторить изученный материал.";
        } else {
            level = "Новичок";
            levelClass = "beginner";
            feedback = "Вам стоит уделить больше времени изучению материала. Попробуйте пройти обучение снова.";
        }
        
        knowledgeLevelEl.textContent = level;
        knowledgeLevelEl.className = `detail-value ${levelClass}`;
        
        // Генерируем обратную связь с рекомендациями
        let feedbackHtml = `
            <h3>Ваши результаты:</h3>
            <p>${feedback}</p>
            <h3>Рекомендации:</h3>
            <ul>
        `;
        
        questions.forEach((question, index) => {
            if (userAnswers[index] !== question.correctAnswer) {
                feedbackHtml += `
                    <li>
                        <strong>Вопрос ${question.id}:</strong> ${question.explanation}
                    </li>
                `;
            }
        });
        
        if (score === questions.length) {
            feedbackHtml += `<li>Все ответы правильные! Вы настоящий эксперт!</li>`;
        }
        
        feedbackHtml += `</ul>`;
        resultFeedback.innerHTML = feedbackHtml;
        
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
        startTime = Date.now();
    });

    // Инициализируем тест
    initTest();

    // ==============================
    // ПРАКТИЧЕСКИЕ ЗАДАНИЯ
    // ==============================

    // Инициализация заданий
    initDragDrop();
    initMatching();
    initErrorSelection();
    updateTasksResults();

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

    // Функция для добавления баллов за задание
    window.addTaskPoints = function(taskNumber, points) {
        if (!window.taskCompleted) window.taskCompleted = {};
        
        if (!window.taskCompleted[taskNumber]) {
            tasksScore += points;
            completedTasks++;
            window.taskCompleted[taskNumber] = true;
            updateTasksResults();
            
            // Анимация добавления баллов
            const taskCard = document.getElementById(`task${taskNumber}`);
            const pointsElement = taskCard.querySelector('.task-points');
            pointsElement.style.transform = 'scale(1.2)';
            pointsElement.style.background = 'linear-gradient(135deg, #4cc9f0, #38b6ff)';
            pointsElement.style.color = 'white';
            
            setTimeout(() => {
                pointsElement.style.transform = 'scale(1)';
            }, 300);
        }
    };

    // Обновление результатов заданий
    function updateTasksResults() {
        tasksCompletedEl.textContent = completedTasks;
        tasksScoreEl.textContent = tasksScore;
        
        const progress = Math.round((completedTasks / 4) * 100);
        tasksProgressEl.textContent = `${progress}%`;
        miniProgressFill.style.width = `${progress}%`;
    }

    // Задание 1: Drag & Drop
    function initDragDrop() {
        const draggables = document.querySelectorAll('.draggable-component');
        const slots = document.querySelectorAll('.mb-slot');
        
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('text/plain', this.dataset.component);
                this.classList.add('dragging');
            });
            
            draggable.addEventListener('dragend', function() {
                this.classList.remove('dragging');
            });
        });
        
        slots.forEach(slot => {
            slot.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('drop-hover');
            });
            
            slot.addEventListener('dragleave', function() {
                this.classList.remove('drop-hover');
            });
            
            slot.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('drop-hover');
                
                const component = e.dataTransfer.getData('text/plain');
                const slotType = this.dataset.slot;
                
                if (component === slotType) {
                    this.classList.add('filled');
                    this.innerHTML = `
                        <div style="color: white; text-align: center;">
                            <i class="fas fa-check" style="font-size: 1.5rem; margin-bottom: 5px;"></i>
                            <div style="font-size: 0.8rem;">${getComponentName(component)}</div>
                        </div>
                    `;
                    
                    // Удаляем компонент из пула
                    const draggable = document.querySelector(`[data-component="${component}"]`);
                    draggable.style.display = 'none';
                    
                    showFeedback('task1-feedback', 'Правильно! Компонент установлен в нужный слот.', 'success');
                } else {
                    showFeedback('task1-feedback', 'Неверно! Этот компонент не подходит для данного слота.', 'error');
                }
            });
        });
    }

    function getComponentName(component) {
        const names = {
            cpu: 'Процессор',
            ram: 'ОЗУ',
            gpu: 'Видеокарта',
            hdd: 'Жёсткий диск',
            psu: 'Блок питания'
        };
        return names[component] || component;
    }

    window.checkTask1 = function() {
        const filledSlots = document.querySelectorAll('.mb-slot.filled');
        const totalSlots = document.querySelectorAll('.mb-slot').length;
        
        if (filledSlots.length === totalSlots) {
            addTaskPoints(1, 30);
            showFeedback('task1-feedback', 'Отлично! Все компоненты правильно установлены! +30 баллов', 'success');
        } else {
            showFeedback('task1-feedback', `Установлено ${filledSlots.length} из ${totalSlots} компонентов. Попробуйте установить все компоненты.`, 'error');
        }
    };

    // Задание 2: Сопоставление
    function initMatching() {
        let selectedLeft = null;
        let selectedRight = null;
        
        const leftItems = document.querySelectorAll('.matching-column:first-child .match-item');
        const rightItems = document.querySelectorAll('.matching-column:last-child .match-item');
        
        const correctMatches = {
            '1': 'e', // CPU -> Выполнение вычислений
            '2': 'a', // RAM -> Временное хранение данных
            '3': 'd', // GPU -> Обработка графики
            '4': 'b', // PSU -> Обеспечение питанием
            '5': 'c'  // HDD -> Постоянное хранение данных
        };
        
        leftItems.forEach(item => {
            item.addEventListener('click', function() {
                if (this.classList.contains('connected')) return;
                
                leftItems.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                selectedLeft = this.dataset.match;
                checkMatch();
            });
        });
        
        rightItems.forEach(item => {
            item.addEventListener('click', function() {
                if (this.classList.contains('connected')) return;
                
                rightItems.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                selectedRight = this.dataset.match;
                checkMatch();
            });
        });
        
        function checkMatch() {
            if (selectedLeft && selectedRight) {
                if (correctMatches[selectedLeft] === selectedRight) {
                    const leftItem = document.querySelector(`[data-match="${selectedLeft}"]`);
                    const rightItem = document.querySelector(`[data-match="${selectedRight}"]`);
                    
                    leftItem.classList.add('connected');
                    rightItem.classList.add('connected');
                    
                    showFeedback('task2-feedback', 'Правильно! Сопоставление верное.', 'success');
                    
                    // Сброс выбора
                    selectedLeft = null;
                    selectedRight = null;
                    leftItems.forEach(i => i.classList.remove('selected'));
                    rightItems.forEach(i => i.classList.remove('selected'));
                    
                    // Проверяем все ли соединены
                    checkAllMatched();
                } else {
                    showFeedback('task2-feedback', 'Неверное сопоставление. Попробуйте еще раз.', 'error');
                    selectedLeft = null;
                    selectedRight = null;
                    leftItems.forEach(i => i.classList.remove('selected'));
                    rightItems.forEach(i => i.classList.remove('selected'));
                }
            }
        }
        
        function checkAllMatched() {
            const connectedLeft = document.querySelectorAll('.matching-column:first-child .match-item.connected').length;
            const totalLeft = leftItems.length;
            
            if (connectedLeft === totalLeft) {
                setTimeout(() => {
                    showFeedback('task2-feedback', 'Отлично! Все сопоставления верны!', 'success');
                }, 500);
            }
        }
    }

    window.checkTask2 = function() {
        const connectedLeft = document.querySelectorAll('.matching-column:first-child .match-item.connected').length;
        const totalLeft = document.querySelectorAll('.matching-column:first-child .match-item').length;
        
        if (connectedLeft === totalLeft) {
            addTaskPoints(2, 25);
            showFeedback('task2-feedback', 'Отлично! Все сопоставления верны! +25 баллов', 'success');
        } else {
            showFeedback('task2-feedback', `Сопоставлено ${connectedLeft} из ${totalLeft} элементов.`, 'error');
        }
    };

    // Задание 3: Кроссворд
    const crosswordAnswers = {
        // Горизонтальные слова
        1: { // "Мозг" компьютера (7 букв)
            word: "ПРОЦЕССОР",
            positions: [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7]]
        },
        3: { // Внешние устройства компьютера (14 букв)
            word: "ПЕРИФЕРИЙНЫЕ",
            positions: [[2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]]
        },
        5: { // Устройство для печати (7 букв)
            word: "ПРИНТЕР",
            positions: [[3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7]]
        },
        // Вертикальные слова
        2: { // Основная плата компьютера (18 букв)
            word: "МАТЕРИНСКАЯПЛАТА",
            positions: [[1,1], [2,1], [3,1]]
        },
        4: { // Временная память (3 буквы)
            word: "ОЗУ",
            positions: [[1,4], [2,4], [3,4]]
        }
    };

    window.checkTask3 = function() {
        // Собираем все ответы пользователя
        const userAnswers = {};
        let totalCells = 0;
        let correctCells = 0;
        
        // Сначала собираем все введенные буквы
        const allCells = document.querySelectorAll('.grid-cell');
        allCells.forEach(cell => {
            const cellId = cell.dataset.cell;
            const input = cell.querySelector('input');
            const value = input.value.trim().toUpperCase();
            
            if (value) {
                userAnswers[cellId] = value;
                totalCells++;
            }
            
            // Сбрасываем подсветку
            input.classList.remove('correct', 'incorrect');
        });
        
        // Проверяем каждое слово отдельно
        Object.keys(crosswordAnswers).forEach(key => {
            const wordData = crosswordAnswers[key];
            const word = wordData.word;
            const positions = wordData.positions;
            
            // Для каждого слова проверяем, совпадают ли буквы
            for (let i = 0; i < positions.length; i++) {
                const [row, col] = positions[i];
                const cellId = `${row}-${col}`;
                const input = document.querySelector(`[data-cell="${cellId}"] input`);
                
                if (input) {
                    const userLetter = userAnswers[cellId] || '';
                    const correctLetter = word[i] || '';
                    
                    if (userLetter === correctLetter && userLetter !== '') {
                        input.classList.add('correct');
                        correctCells++;
                    } else if (userLetter !== '' && userLetter !== correctLetter) {
                        input.classList.add('incorrect');
                    }
                }
            }
        });
        
        if (totalCells === 0) {
            showFeedback('task3-feedback', 'Заполните хотя бы одну клетку кроссворда.', 'error');
            return;
        }
        
        // Вычисляем процент правильности
        const correctPercentage = Math.round((correctCells / totalCells) * 100);
        
        // Для демонстрации - если заполнено более 80% правильно, считаем успешным
        if (correctPercentage >= 80 && totalCells >= 5) {
            addTaskPoints(3, 35);
            showFeedback('task3-feedback', `Отлично! Кроссворд разгадан на ${correctPercentage}%! +35 баллов`, 'success');
        } else {
            showFeedback('task3-feedback', `Правильно заполнено ${correctCells} из ${totalCells} клеток (${correctPercentage}%).`, 'error');
        }
    };

    // Задание 4: Поиск ошибок
    const errorCorrections = {
        1: 'оперативная память',
        2: 'жёсткий диск',
        3: 'видеокарта',
        4: 'устройство ввода',
        5: 'вывода'
    };

    function initErrorSelection() {
        const errorWords = document.querySelectorAll('.error-word');
        
        errorWords.forEach(word => {
            word.addEventListener('click', function() {
                this.classList.toggle('selected');
                
                const errorNum = this.dataset.error;
                const input = document.getElementById(`error${errorNum}`);
                
                if (this.classList.contains('selected')) {
                    input.focus();
                }
            });
        });
        
        // Добавляем обработчики для инпутов
        for (let i = 1; i <= 5; i++) {
            const input = document.getElementById(`error${i}`);
            input.addEventListener('input', function() {
                const errorWord = document.querySelector(`[data-error="${i}"]`);
                errorWord.classList.add('selected');
            });
        }
    }

    window.checkTask4 = function() {
        let correctCount = 0;
        const totalErrors = 5;
        
        for (let i = 1; i <= totalErrors; i++) {
            const input = document.getElementById(`error${i}`);
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = errorCorrections[i];
            
            input.classList.remove('correct', 'incorrect');
            
            if (userAnswer === '') {
                // Пустой ответ
                input.classList.remove('correct', 'incorrect');
            } else if (userAnswer === correctAnswer) {
                input.classList.add('correct');
                correctCount++;
            } else {
                input.classList.add('incorrect');
            }
        }
        
        if (correctCount === totalErrors) {
            addTaskPoints(4, 20);
            showFeedback('task4-feedback', 'Отлично! Все ошибки найдены и исправлены правильно! +20 баллов', 'success');
        } else {
            const percentage = Math.round((correctCount / totalErrors) * 100);
            showFeedback('task4-feedback', `Правильно исправлено ${correctCount} из ${totalErrors} ошибок (${percentage}%).`, 'error');
        }
    };
});

// Глобальная функция для форматирования длинного текста в вариантах ответов
function formatOptionText(text) {
    // Если текст длинный, разбиваем его на несколько строк
    if (text.length > 60) {
        const words = text.split(' ');
        let lines = [];
        let currentLine = '';
        
        words.forEach(word => {
            if ((currentLine + ' ' + word).length > 60) {
                lines.push(currentLine.trim());
                currentLine = word;
            } else {
                currentLine += (currentLine ? ' ' : '') + word;
            }
        });
        
        if (currentLine) {
            lines.push(currentLine.trim());
        }
        
        return lines.join('<br>');
    }
    
    return text;
}
