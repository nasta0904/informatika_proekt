 // Game Data
        const componentsData = [
            {
                id: 1,
                name: "Процессор",
                icon: "fas fa-microchip",
                description: "Центральный процессор (CPU) - это мозг компьютера, который выполняет все вычисления.",
                function: "Обработка данных и выполнение команд программ",
                features: ["Тактовая частота", "Количество ядер", "Кэш-память"],
                difficulty: "средняя"
            },
            {
                id: 2,
                name: "Оперативная память",
                icon: "fas fa-memory",
                description: "Быстрая память для временного хранения данных, с которыми работает процессор.",
                function: "Временное хранение данных для быстрого доступа",
                features: ["Объём (ГБ)", "Частота (МГц)", "Тип (DDR4, DDR5)"],
                difficulty: "лёгкая"
            },
            {
                id: 3,
                name: "Жёсткий диск",
                icon: "fas fa-hdd",
                description: "Устройство для долговременного хранения всех файлов и программ.",
                function: "Постоянное хранение данных",
                features: ["Ёмкость", "Скорость вращения", "Тип (HDD/SSD)"],
                difficulty: "лёгкая"
            },
            {
                id: 4,
                name: "Материнская плата",
                icon: "fas fa-project-diagram",
                description: "Основная плата компьютера, к которой подключаются все остальные компоненты.",
                function: "Обеспечение связи между компонентами",
                features: ["Сокет процессора", "Чипсет", "Слоты расширения"],
                difficulty: "сложная"
            },
            {
                id: 5,
                name: "Видеокарта",
                icon: "fas fa-gamepad",
                description: "Устройство для обработки графики и вывода изображения на монитор.",
                function: "Обработка графических данных",
                features: ["Видеопамять", "Частота ядра", "Количество процессоров"],
                difficulty: "средняя"
            },
            {
                id: 6,
                name: "Блок питания",
                icon: "fas fa-plug",
                description: "Преобразует напряжение из розетки для питания всех компонентов компьютера.",
                function: "Обеспечение питания компонентов",
                features: ["Мощность (Вт)", "КПД", "Кабельная система"],
                difficulty: "лёгкая"
            }
        ];

        const quizQuestions = [
            {
                question: "Что такое процессор (CPU)?",
                options: [
                    "Устройство для хранения файлов",
                    "Мозг компьютера, который выполняет вычисления",
                    "Устройство для вывода звука",
                    "Источник питания"
                ],
                correct: 1,
                explanation: "Процессор - это центральное устройство, которое обрабатывает все команды и вычисления."
            },
            {
                question: "Какая память очищается при выключении компьютера?",
                options: [
                    "Жёсткий диск",
                    "SSD накопитель",
                    "Оперативная память",
                    "Флеш-память"
                ],
                correct: 2,
                explanation: "Оперативная память (RAM) используется для временного хранения данных и очищается при выключении."
            },
            {
                question: "Какое устройство преобразует 220В в нужное напряжение?",
                options: [
                    "Материнская плата",
                    "Блок питания",
                    "Процессор",
                    "Видеокарта"
                ],
                correct: 1,
                explanation: "Блок питания преобразует переменное напряжение из розетки в постоянное для компонентов компьютера."
            },
            {
                question: "Что такое видеокарта?",
                options: [
                    "Устройство для хранения видеофайлов",
                    "Устройство для обработки графики",
                    "Устройство для записи видео",
                    "Устройство для воспроизведения звука"
                ],
                correct: 1,
                explanation: "Видеокарта обрабатывает графические данные и выводит изображение на монитор."
            },
            {
                question: "Что соединяет все компоненты компьютера?",
                options: [
                    "Процессор",
                    "Оперативная память",
                    "Материнская плата",
                    "Блок питания"
                ],
                correct: 2,
                explanation: "Материнская плата - это основа, к которой подключаются все остальные компоненты компьютера."
            }
        ];

        // Game State
        let gameState = {
            learnedComponents: 0,
            achievements: [],
            timeSpent: 0,
            quizScore: 0,
            currentQuestion: 0,
            userAnswers: [],
            gameCompleted: false,
            draggedComponent: null
        };

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initializePage();
            loadComponents();
            initializeGame();
            startTimer();
            initializeDragAndDrop();
            updateStats();
        });

        // Page Initialization
        function initializePage() {
            // Smooth scrolling for navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        // Update active nav link
                        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                        
                        // Scroll to target
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            // Initialize tooltips
            initializeTooltips();
        }

        // Load Components
        function loadComponents() {
            const grid = document.getElementById('componentsGrid');
            grid.innerHTML = '';
            
            componentsData.forEach(component => {
                const card = document.createElement('div');
                card.className = 'component-card';
                card.innerHTML = `
                    <div class="card-header">
                        <i class="${component.icon}"></i>
                        <h3>${component.name}</h3>
                    </div>
                    <div class="card-body">
                        <p>${component.description}</p>
                        <div class="component-details">
                            <p><strong>Сложность:</strong> ${component.difficulty}</p>
                            <p><strong>Основная функция:</strong> ${component.function}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <span class="component-status" id="status-${component.id}">
                            <i class="fas fa-book"></i> Изучить
                        </span>
                        <button onclick="learnComponent(${component.id})" class="btn-learn">
                            <i class="fas fa-graduation-cap"></i> Узнать больше
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Learn Component Function
        function learnComponent(componentId) {
            const component = componentsData.find(c => c.id === componentId);
            const statusElement = document.getElementById(`status-${componentId}`);
            
            // Update status
            statusElement.innerHTML = '<i class="fas fa-check"></i> Изучено';
            statusElement.style.color = 'var(--success)';
            
            // Update game state
            if (!gameState.learnedComponents.includes(componentId)) {
                gameState.learnedComponents++;
                updateStats();
                
                // Award achievement
                awardAchievement(`Изучен ${component.name}`, 'fas fa-graduation-cap');
                
                // Show modal with component details
                showComponentModal(component);
            }
        }

        // Show Component Modal
        function showComponentModal(component) {
            const modal = document.getElementById('componentModal');
            const content = document.getElementById('modalContent');
            
            content.innerHTML = `
                <div class="modal-header">
                    <h2><i class="${component.icon}"></i> ${component.name}</h2>
                </div>
                <div class="modal-body">
                    <p>${component.description}</p>
                    <h3>Основные характеристики:</h3>
                    <ul>
                        ${component.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                    <h3>Интересный факт:</h3>
                    <p>${getComponentFact(component.name)}</p>
                </div>
            `;
            
            modal.style.display = 'block';
            
            // Close modal
            document.querySelector('.close-modal').onclick = function() {
                modal.style.display = 'none';
            };
            
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }

        // Get Component Fact
        function getComponentFact(componentName) {
            const facts = {
                'Процессор': 'Современные процессоры содержат миллиарды транзисторов на площади меньше ногтя!',
                'Оперативная память': 'RAM работает в тысячи раз быстрее, чем жесткий диск.',
                'Жёсткий диск': 'Винчестер (HDD) получил название от винтовок Winchester, так как первые модели имели схожие номера.',
                'Материнская плата': 'Это самая большая плата в компьютере, к которой подключаются все остальные компоненты.',
                'Видеокарта': 'Современные видеокарты могут содержать больше транзисторов, чем процессоры.',
                'Блок питания': 'Качественный БП может прослужить 10 и более лет.'
            };
            
            return facts[componentName] || 'Это важный компонент любого компьютера!';
        }

        // Initialize Game
        function initializeGame() {
            const componentsList = document.getElementById('componentsList');
            componentsList.innerHTML = '';
            
            componentsData.forEach(component => {
                const item = document.createElement('div');
                item.className = 'component-item';
                item.id = `game-component-${component.id}`;
                item.draggable = true;
                item.innerHTML = `<i class="${component.icon}"></i> ${component.name}`;
                item.addEventListener('dragstart', dragStart);
                componentsList.appendChild(item);
            });
            
            // Initialize drop zone
            const dropZone = document.getElementById('dropZone');
            dropZone.addEventListener('dragover', dragOver);
            dropZone.addEventListener('drop', drop);
        }

        // Drag and Drop Functions
        function dragStart(e) {
            gameState.draggedComponent = e.target.id;
            e.dataTransfer.setData('text/plain', e.target.id);
        }

        function dragOver(e) {
            e.preventDefault();
            e.currentTarget.style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
        }

        function drop(e) {
            e.preventDefault();
            const componentId = gameState.draggedComponent;
            const component = document.getElementById(componentId);
            
            if (component) {
                const gameBoard = document.getElementById('gameBoard');
                gameBoard.appendChild(component.cloneNode(true));
                component.style.opacity = '0.5';
                component.style.pointerEvents = 'none';
                
                // Update remaining parts
                updateGameProgress();
                
                // Check if game is completed
                checkGameCompletion();
            }
        }

        // Update Game Progress
        function updateGameProgress() {
            const remaining = document.querySelectorAll('.component-item:not([style*="opacity: 0.5"])').length;
            document.getElementById('remainingParts').textContent = remaining;
            
            if (remaining === 0 && !gameState.gameCompleted) {
                gameState.gameCompleted = true;
                awardAchievement('Мастер сборки ПК', 'fas fa-tools');
                showNotification('🎉 Поздравляем! Вы собрали компьютер!');
            }
        }

        // Reset Game
        function resetGame() {
            const componentsList = document.getElementById('componentsList');
            const gameBoard = document.getElementById('gameBoard');
            
            // Reset all components
            document.querySelectorAll('.component-item').forEach(item => {
                item.style.opacity = '1';
                item.style.pointerEvents = 'auto';
            });
            
            // Clear game board
            gameBoard.innerHTML = '<h3>Соберите системный блок</h3><p>Перетащите компоненты в нужные места</p>';
            
            // Update progress
            gameState.gameCompleted = false;
            document.getElementById('remainingParts').textContent = componentsData.length;
        }

        // Initialize Quiz
        function loadQuizQuestion() {
            const question = quizQuestions[gameState.currentQuestion];
            const questionText = document.getElementById('questionText');
            const optionsContainer = document.getElementById('optionsContainer');
            
            questionText.textContent = `${gameState.currentQuestion + 1}. ${question.question}`;
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.onclick = () => selectAnswer(index);
                
                // If user already answered this question
                if (gameState.userAnswers[gameState.currentQuestion] === index) {
                    optionElement.classList.add('selected');
                    if (index === question.correct) {
                        optionElement.classList.add('correct');
                    } else {
                        optionElement.classList.add('wrong');
                    }
                }
                
                optionsContainer.appendChild(optionElement);
            });
            
            // Update progress bar
            updateQuizProgress();
            
            // Update buttons
            document.getElementById('prevBtn').style.display = gameState.currentQuestion > 0 ? 'inline-block' : 'none';
            document.getElementById('nextBtn').style.display = gameState.currentQuestion < quizQuestions.length - 1 ? 'inline-block' : 'none';
            document.getElementById('submitBtn').style.display = gameState.currentQuestion === quizQuestions.length - 1 ? 'inline-block' : 'none';
        }

        // Select Answer
        function selectAnswer(answerIndex) {
            gameState.userAnswers[gameState.currentQuestion] = answerIndex;
            loadQuizQuestion();
        }

        // Next Question
        function nextQuestion() {
            if (gameState.currentQuestion < quizQuestions.length - 1) {
                gameState.currentQuestion++;
                loadQuizQuestion();
            }
        }

        // Previous Question
        function prevQuestion() {
            if (gameState.currentQuestion > 0) {
                gameState.currentQuestion--;
                loadQuizQuestion();
            }
        }

        // Submit Quiz
        function submitQuiz() {
            let correctAnswers = 0;
            
            quizQuestions.forEach((question, index) => {
                if (gameState.userAnswers[index] === question.correct) {
                    correctAnswers++;
                }
            });
            
            const score = Math.round((correctAnswers / quizQuestions.length) * 100);
            gameState.quizScore = score;
            
            const resultDiv = document.getElementById('quizResult');
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <div class="result-card">
                    <h3><i class="fas fa-trophy"></i> Результаты теста</h3>
                    <p class="score">${score}% правильных ответов</p>
                    <p>${correctAnswers} из ${quizQuestions.length} вопросов</p>
                    ${score >= 80 ? 
                        '<p class="success"><i class="fas fa-check-circle"></i> Отличный результат!</p>' : 
                        '<p class="warning"><i class="fas fa-redo"></i> Попробуйте еще раз!</p>'
                    }
                    <button onclick="retakeQuiz()" class="btn-primary">
                        <i class="fas fa-redo"></i> Пройти заново
                    </button>
                </div>
            `;
            
            updateStats();
            
            // Award achievement based on score
            if (score === 100) {
                awardAchievement('Гений компьютерных наук', 'fas fa-brain');
            } else if (score >= 80) {
                awardAchievement('Отличник информатики', 'fas fa-star');
            }
        }

        // Retake Quiz
        function retakeQuiz() {
            gameState.currentQuestion = 0;
            gameState.userAnswers = [];
            loadQuizQuestion();
            document.getElementById('quizResult').style.display = 'none';
        }

        // Update Quiz Progress
        function updateQuizProgress() {
            const progress = ((gameState.currentQuestion + 1) / quizQuestions.length) * 100;
            document.getElementById('quizProgress').style.width = `${progress}%`;
        }

        // Award Achievement
        function awardAchievement(title, icon) {
            if (!gameState.achievements.includes(title)) {
                gameState.achievements.push(title);
                
                const notification = document.createElement('div');
                notification.className = 'achievement-notification';
                notification.innerHTML = `
                    <i class="${icon}"></i>
                    <div>
                        <strong>Достижение получено!</strong>
                        <p>${title}</p>
                    </div>
                `;
                
                const container = document.getElementById('achievementsContainer');
                container.appendChild(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.style.transform = 'translateX(0)';
                }, 100);
                
                // Remove after 5 seconds
                setTimeout(() => {
                    notification.style.transform = 'translateX(120%)';
                    setTimeout(() => notification.remove(), 500);
                }, 5000);
                
                updateStats();
            }
        }

        // Update Stats
        function updateStats() {
            document.getElementById('componentsLearned').textContent = gameState.learnedComponents;
            document.getElementById('achievementsCount').textContent = gameState.achievements.length;
            document.getElementById('quizScore').textContent = `${gameState.quizScore}%`;
            
            // Update achievements list
            const achievementsList = document.getElementById('achievementsList');
            if (gameState.achievements.length > 0) {
                achievementsList.innerHTML = '<h3>Ваши достижения:</h3>' + 
                    gameState.achievements.map(a => `<div class="achievement-item">🏆 ${a}</div>`).join('');
            }
        }

        // Start Timer
        function startTimer() {
            setInterval(() => {
                gameState.timeSpent++;
                const minutes = Math.floor(gameState.timeSpent / 60);
                document.getElementById('timeSpent').textContent = `${minutes} мин`;
                
                // Award time-based achievements
                if (minutes === 5) {
                    awardAchievement('Первый шаг', 'fas fa-walking');
                } else if (minutes === 30) {
                    awardAchievement('Усердный ученик', 'fas fa-clock');
                }
            }, 1000);
        }

        // Initialize Tooltips
        function initializeTooltips() {
            const tooltips = document.querySelectorAll('[data-tooltip]');
            tooltips.forEach(element => {
                element.addEventListener('mouseenter', showTooltip);
                element.addEventListener('mouseleave', hideTooltip);
            });
        }

        function showTooltip(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        }

        function hideTooltip() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        }

        // Start Learning
        function startLearning() {
            document.querySelector('a[href="#components"]').click();
            showNotification('🚀 Начинаем обучение! Выберите первый компонент для изучения.');
        }

        // Show Virtual Tour
        function showTour() {
            const steps = [
                { element: '#components', text: 'Здесь вы можете изучить все основные компоненты компьютера' },
                { element: '#game', text: 'В этом разделе можно потренироваться в сборке компьютера' },
                { element: '#quiz', text: 'Пройдите тест, чтобы проверить свои знания' }
            ];
            
            let currentStep = 0;
            
            function showNextStep() {
                if (currentStep < steps.length) {
                    const step = steps[currentStep];
                    const element = document.querySelector(step.element);
                    
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        showNotification(step.text);
                        
                        // Highlight element
                        element.style.boxShadow = '0 0 0 4px var(--accent)';
                        setTimeout(() => {
                            element.style.boxShadow = '';
                        }, 2000);
                    }
                    
                    currentStep++;
                    setTimeout(showNextStep, 2500);
                }
            }
            
            showNextStep();
        }

        // Show Notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'achievement-notification';
            notification.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <div>
                    <p>${message}</p>
                </div>
            `;
            
            const container = document.getElementById('achievementsContainer');
            container.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(120%)';
                setTimeout(() => notification.remove(), 500);
            }, 3000);
        }

        // Initialize Quiz on load
        loadQuizQuestion();
