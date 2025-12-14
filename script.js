 // Data for computer components
        const components = [
            {
                id: 1,
                name: "Процессор (CPU)",
                icon: "fas fa-microchip",
                description: "Центральный процессор (CPU) - это мозг компьютера. Он выполняет все основные вычисления и обработку данных.",
                details: {
                    function: "Обработка данных и выполнение инструкций программ.",
                    characteristics: "Скорость процессора измеряется в гигагерцах (ГГц). Чем выше скорость, тем быстрее процессор выполняет задачи.",
                    examples: "Intel Core i5, AMD Ryzen 5, Apple M1"
                }
            },
            {
                id: 2,
                name: "Оперативная память (RAM)",
                icon: "fas fa-memory",
                description: "Оперативная память хранит данные, с которыми компьютер работает в данный момент.",
                details: {
                    function: "Временное хранение данных для быстрого доступа процессора.",
                    characteristics: "Измеряется в гигабайтах (ГБ). При выключении компьютера данные в оперативной памяти стираются.",
                    examples: "DDR4, DDR5"
                }
            },
            {
                id: 3,
                name: "Жёсткий диск (HDD)",
                icon: "fas fa-hdd",
                description: "Жёсткий диск - это устройство для долговременного хранения данных.",
                details: {
                    function: "Постоянное хранение операционной системы, программ и файлов.",
                    characteristics: "Имеет большую ёмкость (обычно 500 ГБ - 2 ТБ), но работает медленнее, чем SSD.",
                    examples: "Western Digital, Seagate, Toshiba"
                }
            },
            {
                id: 4,
                name: "SSD накопитель",
                icon: "fas fa-compact-disc",
                description: "SSD (твердотельный накопитель) - современный быстрый накопитель без движущихся частей.",
                details: {
                    function: "Быстрое хранение и загрузка данных.",
                    characteristics: "Работает значительно быстрее HDD, более надёжен, но обычно имеет меньшую ёмкость при той же цене.",
                    examples: "Samsung EVO, Kingston A2000, Crucial MX500"
                }
            },
            {
                id: 5,
                name: "Материнская плата",
                icon: "fas fa-project-diagram",
                description: "Главная плата компьютера, к которой подключаются все остальные компоненты.",
                details: {
                    function: "Обеспечивает связь между всеми компонентами компьютера.",
                    characteristics: "Содержит слоты для процессора, памяти, видеокарты и другие разъёмы.",
                    examples: "ASUS, MSI, Gigabyte, ASRock"
                }
            },
            {
                id: 6,
                name: "Видеокарта (GPU)",
                icon: "fas fa-gamepad",
                description: "Видеокарта обрабатывает графику и выводит изображение на монитор.",
                details: {
                    function: "Обработка графических данных и вывод изображения.",
                    characteristics: "Особенно важна для игр, работы с видео и графическими редакторами.",
                    examples: "NVIDIA GeForce, AMD Radeon"
                }
            },
            {
                id: 7,
                name: "Блок питания",
                icon: "fas fa-plug",
                description: "Преобразует напряжение из розетки в напряжение, необходимое компонентам компьютера.",
                details: {
                    function: "Обеспечивает питание всех компонентов компьютера.",
                    characteristics: "Мощность измеряется в ваттах (Вт). Важно выбирать блок питания достаточной мощности.",
                    examples: "Corsair, Seasonic, Be Quiet!"
                }
            },
            {
                id: 8,
                name: "Устройства ввода/вывода",
                icon: "fas fa-keyboard",
                description: "Устройства для взаимодействия с компьютером (ввод информации и получение результатов).",
                details: {
                    function: "Ввод данных (клавиатура, мышь) и вывод информации (монитор, принтер).",
                    characteristics: "Позволяют пользователю взаимодействовать с компьютером.",
                    examples: "Клавиатура, мышь, монитор, принтер, сканер"
                }
            }
        ];

        // Quiz questions
        const quizQuestions = [
            {
                question: "Что такое процессор (CPU)?",
                options: [
                    "Устройство для хранения данных",
                    "Мозг компьютера, который выполняет вычисления",
                    "Устройство для вывода изображения",
                    "Источник питания компьютера"
                ],
                correct: 1
            },
            {
                question: "Что происходит с данными в оперативной памяти при выключении компьютера?",
                options: [
                    "Они сохраняются на жёсткий диск",
                    "Они стираются",
                    "Они передаются в процессор",
                    "Они копируются в облако"
                ],
                correct: 1
            },
            {
                question: "Какое устройство предназначено для долговременного хранения данных?",
                options: [
                    "Оперативная память",
                    "Процессор",
                    "Жёсткий диск",
                    "Блок питания"
                ],
                correct: 2
            },
            {
                question: "Какое устройство выводит изображение на экран?",
                options: [
                    "Процессор",
                    "Видеокарта",
                    "Материнская плата",
                    "SSD накопитель"
                ],
                correct: 1
            },
            {
                question: "Что обеспечивает питание всех компонентов компьютера?",
                options: [
                    "Материнская плата",
                    "Жёсткий диск",
                    "Блок питания",
                    "Оперативная память"
                ],
                correct: 2
            },
            {
                question: "Какое устройство ввода позволяет набирать текст?",
                options: [
                    "Мышь",
                    "Монитор",
                    "Клавиатура",
                    "Принтер"
                ],
                correct: 2
            }
        ];

        // DOM elements
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const componentsGrid = document.querySelector('.components-grid');
        const componentDetailPage = document.getElementById('component-detail');
        const quizContent = document.querySelector('.quiz-content');
        const progressBar = document.querySelector('.progress-bar');
        const startLearningBtn = document.querySelector('.start-learning');

        // Current state
        let currentComponent = null;
        let currentQuizQuestion = 0;
        let quizScore = 0;
        let userAnswers = [];

        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                // Show selected page
                pages.forEach(page => {
                    page.classList.remove('active');
                    if (page.id === pageId) {
                        page.classList.add('active');
                    }
                });
                
                // If components page, render components
                if (pageId === 'components') {
                    renderComponents();
                }
                
                // If quiz page, initialize quiz
                if (pageId === 'quiz') {
                    initQuiz();
                }
            });
        });

        // Start learning button
        startLearningBtn.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            document.querySelector('.nav-link[data-page="components"]').classList.add('active');
            
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById('components').classList.add('active');
            
            renderComponents();
        });

        // Render components on components page
        function renderComponents() {
            componentsGrid.innerHTML = '';
            
            components.forEach(component => {
                const componentCard = document.createElement('div');
                componentCard.className = 'component-card';
                componentCard.innerHTML = `
                    <div class="component-img">
                        <i class="${component.icon}"></i>
                    </div>
                    <div class="component-content">
                        <h3>${component.name}</h3>
                        <p>${component.description}</p>
                        <button class="learn-more" data-id="${component.id}">Подробнее</button>
                    </div>
                `;
                
                componentsGrid.appendChild(componentCard);
            });
            
            // Add event listeners to "Learn more" buttons
            document.querySelectorAll('.learn-more').forEach(button => {
                button.addEventListener('click', (e) => {
                    const componentId = parseInt(e.target.getAttribute('data-id'));
                    showComponentDetail(componentId);
                });
            });
        }

        // Show component detail page
        function showComponentDetail(componentId) {
            currentComponent = components.find(c => c.id === componentId);
            
            componentDetailPage.innerHTML = `
                <div class="component-detail">
                    <div class="detail-header">
                        <i class="${currentComponent.icon}"></i>
                        <h2>${currentComponent.name}</h2>
                    </div>
                    <div class="detail-content">
                        <h3>Описание</h3>
                        <p>${currentComponent.description}</p>
                        
                        <h3>Основная функция</h3>
                        <p>${currentComponent.details.function}</p>
                        
                        <h3>Основные характеристики</h3>
                        <p>${currentComponent.details.characteristics}</p>
                        
                        <h3>Примеры</h3>
                        <p>${currentComponent.details.examples}</p>
                        
                        <button class="back-button back-to-components">Назад к компонентам</button>
                    </div>
                </div>
            `;
            
            // Show component detail page and hide others
            pages.forEach(page => page.classList.remove('active'));
            componentDetailPage.classList.add('active');
            
            // Add event listener to back button
            document.querySelector('.back-to-components').addEventListener('click', () => {
                pages.forEach(page => page.classList.remove('active'));
                document.getElementById('components').classList.add('active');
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                document.querySelector('.nav-link[data-page="components"]').classList.add('active');
            });
        }

        // Initialize quiz
        function initQuiz() {
            currentQuizQuestion = 0;
            quizScore = 0;
            userAnswers = [];
            
            renderQuizQuestion();
        }

        // Render current quiz question
        function renderQuizQuestion() {
            if (currentQuizQuestion >= quizQuestions.length) {
                showQuizResults();
                return;
            }
            
            const question = quizQuestions[currentQuizQuestion];
            const progress = ((currentQuizQuestion) / quizQuestions.length) * 100;
            progressBar.style.width = `${progress}%`;
            
            let optionsHTML = '';
            question.options.forEach((option, index) => {
                optionsHTML += `
                    <div class="quiz-option" data-index="${index}">
                        ${option}
                    </div>
                `;
            });
            
            quizContent.innerHTML = `
                <div class="quiz-question">${currentQuizQuestion + 1}. ${question.question}</div>
                <div class="quiz-options">${optionsHTML}</div>
                <div class="quiz-controls">
                    <div>Вопрос ${currentQuizQuestion + 1} из ${quizQuestions.length}</div>
                    <button class="cta-button next-question" ${currentQuizQuestion === 0 ? 'disabled' : ''}>Следующий вопрос</button>
                </div>
            `;
            
            // Add event listeners to options
            document.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', () => {
                    // Remove selected class from all options
                    document.querySelectorAll('.quiz-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked option
                    option.classList.add('selected');
                    
                    // Enable next button
                    document.querySelector('.next-question').disabled = false;
                    
                    // Store user's answer
                    userAnswers[currentQuizQuestion] = parseInt(option.getAttribute('data-index'));
                });
            });
            
            // Add event listener to next question button
            document.querySelector('.next-question').addEventListener('click', () => {
                // Check if answer is correct
                if (userAnswers[currentQuizQuestion] === question.correct) {
                    quizScore++;
                }
                
                currentQuizQuestion++;
                renderQuizQuestion();
            });
            
            // If user has already answered this question, show the selected option
            if (userAnswers[currentQuizQuestion] !== undefined) {
                document.querySelector(`.quiz-option[data-index="${userAnswers[currentQuizQuestion]}"]`).classList.add('selected');
                document.querySelector('.next-question').disabled = false;
            }
        }

        // Show quiz results
        function showQuizResults() {
            progressBar.style.width = '100%';
            
            const percentage = Math.round((quizScore / quizQuestions.length) * 100);
            let message = '';
            let icon = '';
            
            if (percentage >= 90) {
                message = 'Отлично! Вы отлично разбираетесь в устройствах компьютера!';
                icon = 'fas fa-trophy';
            } else if (percentage >= 70) {
                message = 'Хорошо! Вы хорошо усвоили материал!';
                icon = 'fas fa-star';
            } else if (percentage >= 50) {
                message = 'Неплохо! Но есть над чем поработать.';
                icon = 'fas fa-check-circle';
            } else {
                message = 'Попробуйте изучить материал еще раз и пройти тест заново.';
                icon = 'fas fa-redo';
            }
            
            quizContent.innerHTML = `
                <div class="quiz-result">
                    <i class="${icon}"></i>
                    <h2>Тест завершен!</h2>
                    <p>Ваш результат: ${quizScore} правильных ответов из ${quizQuestions.length}</p>
                    <p>${message}</p>
                    <button class="cta-button restart-quiz">Пройти тест еще раз</button>
                </div>
            `;
            
            // Add event listener to restart button
            document.querySelector('.restart-quiz').addEventListener('click', initQuiz);
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderComponents();
        });
