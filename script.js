        // Данные для сайта
        const componentsData = [
            {
                id: 1,
                name: "Процессор (CPU)",
                icon: "fas fa-microchip",
                description: "Центральный процессор - это мозг компьютера, который выполняет все вычисления и команды программ.",
                details: {
                    function: "Обработка данных и выполнение инструкций",
                    characteristics: ["Тактовая частота (ГГц)", "Количество ядер", "Кэш-память", "Архитектура"],
                    fact: "Современные процессоры содержат миллиарды транзисторов на площади меньше ногтя!"
                },
                learned: false
            },
            {
                id: 2,
                name: "Оперативная память (RAM)",
                icon: "fas fa-memory",
                description: "Быстрая память для временного хранения данных, с которыми компьютер работает в данный момент.",
                details: {
                    function: "Временное хранение данных для быстрого доступа процессора",
                    characteristics: ["Объём (ГБ)", "Частота (МГц)", "Тип (DDR4, DDR5)", "Тайминги"],
                    fact: "При выключении компьютера данные в оперативной памяти стираются!"
                },
                learned: false
            },
            {
                id: 3,
                name: "Жёсткий диск (HDD/SSD)",
                icon: "fas fa-hdd",
                description: "Устройство для долговременного хранения всех файлов, программ и операционной системы.",
                details: {
                    function: "Постоянное хранение данных",
                    characteristics: ["Ёмкость (ГБ/ТБ)", "Скорость вращения (об/мин)", "Тип (HDD/SSD)", "Скорость чтения/записи"],
                    fact: "SSD работают в 5-10 раз быстрее традиционных HDD!"
                },
                learned: false
            },
            {
                id: 4,
                name: "Видеокарта (GPU)",
                icon: "fas fa-gamepad",
                description: "Устройство для обработки графики и вывода изображения на монитор.",
                details: {
                    function: "Обработка графических данных и вывод изображения",
                    characteristics: ["Видеопамять (ГБ)", "Частота ядра (МГц)", "Количество процессоров", "Разрядность шины"],
                    fact: "Современные видеокарты могут содержать больше транзисторов, чем процессоры!"
                },
                learned: false
            },
            {
                id: 5,
                name: "Материнская плата",
                icon: "fas fa-project-diagram",
                description: "Главная плата компьютера, к которой подключаются все остальные компоненты.",
                details: {
                    function: "Обеспечение связи между всеми компонентами компьютера",
                    characteristics: ["Сокет процессора", "Чипсет", "Слоты расширения", "Порты и разъёмы"],
                    fact: "Это самая большая плата в компьютере!"
                },
                learned: false
            },
            {
                id: 6,
                name: "Блок питания",
                icon: "fas fa-plug",
                description: "Преобразует напряжение из розетки в напряжение, необходимое компонентам компьютера.",
                details: {
                    function: "Обеспечение питания всех компонентов компьютера",
                    characteristics: ["Мощность (Вт)", "КПД", "Кабельная система", "Защитные механизмы"],
                    fact: "Качественный блок питания может прослужить 10 и более лет!"
                },
                learned: false
            }
        ];

        const quizQuestions = [
            {
                question: "Что такое процессор (CPU)?",
                options: [
                    "Устройство для хранения файлов",
                    "Мозг компьютера, который выполняет вычисления",
                    "Устройство для вывода звука",
                    "Источник питания компьютера"
                ],
                correct: 1,
                explanation: "Правильно! Процессор - это центральное устройство, которое обрабатывает все команды и вычисления."
            },
            {
                question: "Что происходит с данными в оперативной памяти при выключении компьютера?",
                options: [
                    "Они сохраняются на жёсткий диск",
                    "Они стираются",
                    "Они передаются в процессор",
                    "Они копируются в облако"
                ],
                correct: 1,
                explanation: "Верно! Данные в оперативной памяти стираются при выключении компьютера."
            },
            {
                question: "Какое устройство предназначено для долговременного хранения данных?",
                options: [
                    "Оперативная память",
                    "Процессор",
                    "Жесткий диск",
                    "Блок питания"
                ],
                correct: 2,
                explanation: "Правильно! Жесткий диск (HDD/SSD) предназначен для долговременного хранения данных."
            },
            {
                question: "Какое устройство выводит изображение на экран?",
                options: [
                    "Процессор",
                    "Видеокарта",
                    "Материнская плата",
                    "SSD накопитель"
                ],
                correct: 1,
                explanation: "Верно! Видеокарта обрабатывает графику и выводит изображение на монитор."
            },
            {
                question: "Что обеспечивает питание всех компонентов компьютера?",
                options: [
                    "Материнская плата",
                    "Жесткий диск",
                    "Блок питания",
                    "Оперативная память"
                ],
                correct: 2,
                explanation: "Правильно! Блок питания преобразует электричество из розетки для всех компонентов."
            }
        ];

        const achievementsData = [
            { id: 1, name: "Первый шаг", description: "Изучи первый компонент", icon: "fas fa-walking", unlocked: false },
            { id: 2, name: "Знаток железа", description: "Изучи все компоненты", icon: "fas fa-microchip", unlocked: false },
            { id: 3, name: "Мастер сборки", description: "Собери компьютер в игре", icon: "fas fa-tools", unlocked: false },
            { id: 4, name: "Отличник", description: "Набери 100% в тесте", icon: "fas fa-star", unlocked: false },
            { id: 5, name: "Усердный ученик", description: "Проведи 10 минут на сайте", icon: "fas fa-clock", unlocked: false },
            { id: 6, name: "Эксперт", description: "Получи все достижения", icon: "fas fa-trophy", unlocked: false }
        ];

        // Состояние приложения
        const appState = {
            learnedComponents: 0,
            achievements: [],
            timeSpent: 0,
            quizScore: 0,
            currentQuestion: 0,
            userAnswers: [],
            gameCompleted: false,
            gameComponents: 6
        };

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            initializeNavigation();
            loadComponents();
            initializeDragAndDrop();
            loadQuizQuestion();
            loadAchievements();
            startTimer();
            updateStats();
            
            // Показываем домашнюю страницу
            showSection('home');
            
            console.log('Сайт "Устройство компьютера" успешно загружен!');
        });

        // Навигация
        function initializeNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Убираем активный класс у всех ссылок
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Добавляем активный класс текущей ссылке
                    this.classList.add('active');
                    
                    // Получаем ID раздела
                    const sectionId = this.getAttribute('href').substring(1);
                    
                    // Показываем соответствующий раздел
                    showSection(sectionId);
                });
            });
        }

        // Показать раздел
        function showSection(sectionId) {
            // Скрываем все разделы
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Показываем выбранный раздел
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
                
                // Прокручиваем к началу раздела
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }

        // Загрузка компонентов
        function loadComponents() {
            const container = document.getElementById('componentsContainer');
            container.innerHTML = '';
            
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
                        <button class="learn-btn" onclick="showComponentDetails(${component.id})">
                            <i class="fas fa-graduation-cap"></i> Узнать больше
                        </button>
                        <div class="component-status" style="margin-top: 0.8rem; font-size: 0.9rem; color: ${component.learned ? '#28a745' : '#666'}">
                            <i class="fas ${component.learned ? 'fa-check-circle' : 'fa-book'}"></i>
                            ${component.learned ? 'Изучено' : 'Не изучено'}
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Показать детали компонента
        function showComponentDetails(componentId) {
            const component = componentsData.find(c => c.id === componentId);
            
            if (!component) return;
            
            // Отмечаем компонент как изученный
            if (!component.learned) {
                component.learned = true;
                appState.learnedComponents++;
                updateStats();
                loadComponents(); // Перезагружаем компоненты для обновления статуса
                
                // Проверяем достижения
                checkAchievements();
                
                // Показываем уведомление
                showNotification(`Вы изучили компонент: ${component.name}`, 'success');
            }
            
            // Заполняем модальное окно
            document.getElementById('modalTitle').innerHTML = `
                <i class="${component.icon}"></i> ${component.name}
            `;
            
            document.getElementById('modalBody').innerHTML = `
                <p>${component.description}</p>
                
                <h3><i class="fas fa-cogs"></i> Основная функция</h3>
                <p>${component.details.function}</p>
                
                <h3><i class="fas fa-list"></i> Основные характеристики</h3>
                <ul>
                    ${component.details.characteristics.map(char => `<li>${char}</li>`).join('')}
                </ul>
                
                <h3><i class="fas fa-lightbulb"></i> Интересный факт</h3>
                <p>${component.details.fact}</p>
                
                <div style="margin-top: 1.5rem; padding: 1rem; background: #f8f9ff; border-radius: 8px;">
                    <p><strong>Статус:</strong> <span style="color: #28a745;"><i class="fas fa-check-circle"></i> Изучено</span></p>
                </div>
            `;
            
            // Показываем модальное окно
            document.getElementById('componentModal').style.display = 'flex';
            
            // Закрытие модального окна
            document.querySelector('.close-modal').onclick = function() {
                document.getElementById('componentModal').style.display = 'none';
            };
            
            // Закрытие по клику вне окна
            window.onclick = function(event) {
                const modal = document.getElementById('componentModal');
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }

        // Drag and Drop для игры
        function initializeDragAndDrop() {
            const draggableComponents = document.querySelectorAll('.draggable-component');
            const dropZone = document.querySelector('.drag-area');
            
            draggableComponents.forEach(component => {
                component.addEventListener('dragstart', function(e) {
                    this.classList.add('dragging');
                    e.dataTransfer.setData('text/plain', this.getAttribute('data-component'));
                });
                
                component.addEventListener('dragend', function() {
                    this.classList.remove('dragging');
                });
            });
            
            dropZone.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
            });
            
            dropZone.addEventListener('dragleave', function() {
                this.style.backgroundColor = '';
            });
            
            dropZone.addEventListener('drop', function(e) {
                e.preventDefault();
                this.style.backgroundColor = '';
                
                const componentName = e.dataTransfer.getData('text/plain');
                const component = Array.from(draggableComponents).find(c => c.getAttribute('data-component') === componentName);
                
                if (component && !component.style.opacity) {
                    // Добавляем компонент в системный блок
                    const gameBoard = document.getElementById('gameBoard');
                    
                    // Удаляем сообщение "Пока здесь пусто..."
                    if (gameBoard.querySelector('p')) {
                        gameBoard.innerHTML = '';
                    }
                    
                    // Создаем элемент для добавленного компонента
                    const addedComponent = document.createElement('div');
                    addedComponent.className = 'draggable-component';
                    addedComponent.innerHTML = `<i class="${component.querySelector('i').className}"></i> ${componentName}`;
                    addedComponent.style.margin = '5px';
                    addedComponent.style.pointerEvents = 'none';
                    
                    gameBoard.appendChild(addedComponent);
                    
                    // Помечаем компонент как использованный
                    component.style.opacity = '0.5';
                    component.style.pointerEvents = 'none';
                    component.style.textDecoration = 'line-through';
                    
                    // Обновляем счетчик
                    appState.gameComponents--;
                    updateGameProgress();
                    
                    // Проверяем завершение игры
                    if (appState.gameComponents === 0 && !appState.gameCompleted) {
                        appState.gameCompleted = true;
                        showNotification('🎉 Поздравляем! Вы успешно собрали компьютер!', 'success');
                        
                        // Разблокируем достижение
                        unlockAchievement(3); // Мастер сборки
                    }
                }
            });
        }

        // Обновить прогресс игры
        function updateGameProgress() {
            document.getElementById('remainingParts').textContent = appState.gameComponents;
        }

        // Сбросить игру
        function resetGame() {
            // Сбрасываем состояние игры
            appState.gameComponents = 6;
            appState.gameCompleted = false;
            
            // Очищаем игровое поле
            document.getElementById('gameBoard').innerHTML = '<p style="color: #999; margin-top: 2rem;">Пока здесь пусто...</p>';
            
            // Восстанавливаем компоненты
            const draggableComponents = document.querySelectorAll('.draggable-component');
            draggableComponents.forEach(component => {
                component.style.opacity = '';
                component.style.pointerEvents = '';
                component.style.textDecoration = '';
            });
            
            // Обновляем счетчик
            updateGameProgress();
            
            showNotification('Игра сброшена. Можете начать заново!', 'info');
        }

        // Загрузка вопроса викторины
        function loadQuizQuestion() {
            const question = quizQuestions[appState.currentQuestion];
            const questionText = document.getElementById('questionText');
            const optionsContainer = document.getElementById('optionsContainer');
            
            questionText.textContent = `${appState.currentQuestion + 1}. ${question.question}`;
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.onclick = () => selectAnswer(index);
                
                // Если пользователь уже ответил на этот вопрос
                if (appState.userAnswers[appState.currentQuestion] === index) {
                    optionElement.classList.add('selected');
                }
                
                optionsContainer.appendChild(optionElement);
            });
            
            // Обновляем прогресс-бар
            updateQuizProgress();
            
            // Обновляем кнопки
            document.getElementById('prevBtn').style.display = appState.currentQuestion > 0 ? 'inline-flex' : 'none';
            document.getElementById('nextBtn').style.display = appState.currentQuestion < quizQuestions.length - 1 ? 'inline-flex' : 'none';
            document.getElementById('submitBtn').style.display = appState.currentQuestion === quizQuestions.length - 1 ? 'inline-flex' : 'none';
        }

        // Выбор ответа
        function selectAnswer(answerIndex) {
            // Сбрасываем выделение у всех вариантов
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Выделяем выбранный вариант
            event.target.classList.add('selected');
            
            // Сохраняем ответ пользователя
            appState.userAnswers[appState.currentQuestion] = answerIndex;
        }

        // Следующий вопрос
        function nextQuestion() {
            if (appState.currentQuestion < quizQuestions.length - 1) {
                appState.currentQuestion++;
                loadQuizQuestion();
            }
        }

        // Предыдущий вопрос
        function prevQuestion() {
            if (appState.currentQuestion > 0) {
                appState.currentQuestion--;
                loadQuizQuestion();
            }
        }

        // Отправить тест
        function submitQuiz() {
            let correctAnswers = 0;
            
            quizQuestions.forEach((question, index) => {
                if (appState.userAnswers[index] === question.correct) {
                    correctAnswers++;
                }
            });
            
            const score = Math.round((correctAnswers / quizQuestions.length) * 100);
            appState.quizScore = score;
            
            const resultDiv = document.getElementById('quizResult');
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <h3 style="color: var(--secondary); margin-bottom: 1rem;">
                    <i class="fas fa-trophy"></i> Результаты теста
                </h3>
                <p style="font-size: 2rem; font-weight: bold; color: ${score >= 80 ? '#28a745' : score >= 60 ? '#ffc107' : '#dc3545'}; margin: 1rem 0;">
                    ${score}%
                </p>
                <p style="margin-bottom: 1rem;">${correctAnswers} правильных ответов из ${quizQuestions.length}</p>
                
                ${score === 100 ? 
                    '<p style="color: #28a745; margin-bottom: 1rem;"><i class="fas fa-check-circle"></i> Отличный результат! Вы настоящий эксперт!</p>' : 
                    score >= 80 ? 
                    '<p style="color: #28a745; margin-bottom: 1rem;"><i class="fas fa-check-circle"></i> Хороший результат! Вы хорошо усвоили материал!</p>' :
                    score >= 60 ?
                    '<p style="color: #ffc107; margin-bottom: 1rem;"><i class="fas fa-exclamation-circle"></i> Неплохо, но можно лучше. Повторите материал!</p>' :
                    '<p style="color: #dc3545; margin-bottom: 1rem;"><i class="fas fa-times-circle"></i> Нужно повторить материал. Попробуйте еще раз!</p>'
                }
                
                <button class="btn btn-primary" onclick="retakeQuiz()" style="margin-top: 1rem;">
                    <i class="fas fa-redo"></i> Пройти тест заново
                </button>
            `;
            
            // Обновляем статистику
            updateStats();
            
            // Разблокируем достижения в зависимости от результата
            if (score === 100) {
                unlockAchievement(4); // Отличник
            }
            
            showNotification(`Тест завершен! Ваш результат: ${score}%`, 'success');
        }

        // Перепройти тест
        function retakeQuiz() {
            appState.currentQuestion = 0;
            appState.userAnswers = [];
            appState.quizScore = 0;
            loadQuizQuestion();
            document.getElementById('quizResult').style.display = 'none';
            updateStats();
            showNotification('Тест сброшен. Удачи!', 'info');
        }

        // Обновить прогресс теста
        function updateQuizProgress() {
            const progress = ((appState.currentQuestion + 1) / quizQuestions.length) * 100;
            document.getElementById('quizProgress').style.width = `${progress}%`;
        }

        // Загрузка достижений
        function loadAchievements() {
            const grid = document.getElementById('achievementsGrid');
            grid.innerHTML = '';
            
            achievementsData.forEach(achievement => {
                const card = document.createElement('div');
                card.className = `achievement-card ${achievement.unlocked ? '' : 'locked'}`;
                card.innerHTML = `
                    <i class="${achievement.icon}"></i>
                    <div>
                        <h4 style="margin-bottom: 0.3rem; color: ${achievement.unlocked ? 'var(--secondary)' : '#666'}">
                            ${achievement.name}
                        </h4>
                        <p style="font-size: 0.9rem; color: ${achievement.unlocked ? '#666' : '#999'}">
                            ${achievement.description}
                        </p>
                        <p style="font-size: 0.8rem; margin-top: 0.3rem; color: ${achievement.unlocked ? '#28a745' : '#999'}">
                            <i class="fas ${achievement.unlocked ? 'fa-unlock' : 'fa-lock'}"></i>
                            ${achievement.unlocked ? 'Разблокировано' : 'Заблокировано'}
                        </p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Разблокировать достижение
        function unlockAchievement(achievementId) {
            const achievement = achievementsData.find(a => a.id === achievementId);
            
            if (achievement && !achievement.unlocked) {
                achievement.unlocked = true;
                appState.achievements.push(achievement);
                
                // Обновляем отображение
                loadAchievements();
                updateStats();
                
                // Показываем уведомление
                showNotification(`🎉 Новое достижение: ${achievement.name}`, 'success');
                
                // Проверяем достижение "Эксперт"
                checkExpertAchievement();
            }
        }

        // Проверить достижения
        function checkAchievements() {
            // Первый шаг
            if (appState.learnedComponents >= 1 && !achievementsData[0].unlocked) {
                unlockAchievement(1);
            }
            
            // Знаток железа
            if (appState.learnedComponents >= componentsData.length && !achievementsData[1].unlocked) {
                unlockAchievement(2);
            }
            
            // Усердный ученик
            if (appState.timeSpent >= 600 && !achievementsData[4].unlocked) { // 10 минут = 600 секунд
                unlockAchievement(5);
            }
        }

        // Проверить достижение "Эксперт"
        function checkExpertAchievement() {
            const allUnlocked = achievementsData.every(a => a.unlocked);
            if (allUnlocked && !achievementsData[5].unlocked) {
                unlockAchievement(6);
            }
        }

        // Таймер времени обучения
        function startTimer() {
            setInterval(() => {
                appState.timeSpent++;
                updateStats();
                
                // Проверяем достижения каждую минуту
                if (appState.timeSpent % 60 === 0) {
                    checkAchievements();
                }
            }, 1000);
        }

        // Обновить статистику
        function updateStats() {
            document.getElementById('componentsCount').textContent = appState.learnedComponents;
            document.getElementById('achievementsCount').textContent = appState.achievements.length;
            
            const minutes = Math.floor(appState.timeSpent / 60);
            document.getElementById('timeSpent').textContent = `${minutes} мин`;
            
            document.getElementById('quizScore').textContent = `${appState.quizScore}%`;
        }

        // Показать уведомление
        function showNotification(message, type = 'info') {
            const notificationArea = document.getElementById('notificationArea');
            
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
                <div>${message}</div>
            `;
            
            notificationArea.appendChild(notification);
            
            // Показываем уведомление
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            // Убираем уведомление через 5 секунд
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 5000);
        }

        // Начать обучение
        function startLearning() {
            showSection('components');
            document.querySelector('.nav-link[href="#components"]').click();
            showNotification('Давайте начнем изучение компонентов компьютера!', 'info');
        }

        // Экскурсия по сайту
        function takeTour() {
            const steps = [
                { section: 'components', message: 'Здесь вы можете изучить все компоненты компьютера' },
                { section: 'game', message: 'Попробуйте собрать компьютер в нашей игре!' },
                { section: 'quiz', message: 'Проверьте свои знания в тесте' },
                { section: 'achievements', message: 'Следите за своими достижениями здесь' },
                { section: 'home', message: 'Вернитесь на главную, чтобы увидеть свою статистику' }
            ];
            
            let currentStep = 0;
            
            function nextStep() {
                if (currentStep < steps.length) {
                    const step = steps[currentStep];
                    
                    // Переходим к разделу
                    showSection(step.section);
                    document.querySelector(`.nav-link[href="#${step.section}"]`).click();
                    
                    // Показываем сообщение
                    showNotification(step.message, 'info');
                    
                    currentStep++;
                    
                    // Ждем 3 секунды перед следующим шагом
                    if (currentStep < steps.length) {
                        setTimeout(nextStep, 3000);
                    }
                }
            }
            
            nextStep();
        }

        // Закрыть модальное окно при нажатии ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                document.getElementById('componentModal').style.display = 'none';
            }
        });
