 // Вопросы для викторины
        const quizQuestions = [
            {
                question: "Что такое процессор (CPU)?",
                options: [
                    "Устройство для хранения данных",
                    "Мозг компьютера, который выполняет вычисления",
                    "Устройство для вывода изображения",
                    "Источник питания компьютера"
                ],
                correct: 1,
                explanation: "Правильно! Процессор - это мозг компьютера, который выполняет все вычисления и команды."
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
                explanation: "Верно! Данные в оперативной памяти стираются при выключении компьютера. Для постоянного хранения нужен жесткий диск."
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
                explanation: "Правильно! Блок питания преобразует электричество из розетки для всех компонентов компьютера."
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let userAnswers = [];
        let quizCompleted = false;

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            initSmoothScroll();
            initScrollAnimations();
            loadQuiz();
            updateProgressBar();
            
            console.log('Обучающий сайт "Устройство компьютера" загружен!');
        });

        // Функция для плавной прокрутки
        function initSmoothScroll() {
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Обновляем активную ссылку в навигации
                    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                    this.classList.add('active');
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Функция для анимаций при прокрутке
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.component-card, .quiz-section, .intro-section').forEach(element => {
                observer.observe(element);
            });
        }

        // Загрузка викторины
        function loadQuiz() {
            if (currentQuestion >= quizQuestions.length) {
                showQuizResults();
                return;
            }

            const question = quizQuestions[currentQuestion];
            const quizContainer = document.getElementById('quizContainer');
            
            let optionsHTML = '';
            question.options.forEach((option, index) => {
                optionsHTML += `
                    <button onclick="checkAnswer(${index})" 
                            ${userAnswers[currentQuestion] !== undefined ? 'disabled' : ''}
                            ${userAnswers[currentQuestion] === index ? 'class="selected"' : ''}>
                        ${option}
                    </button>
                `;
            });

            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <p>${currentQuestion + 1}. ${question.question}</p>
                    <div class="quiz-buttons">
                        ${optionsHTML}
                    </div>
                </div>
            `;
            
            updateProgressBar();
        }

        // Проверка ответа
        function checkAnswer(selectedIndex) {
            if (quizCompleted) return;
            
            const question = quizQuestions[currentQuestion];
            const buttons = document.querySelectorAll('.quiz-buttons button');
            const resultDiv = document.getElementById('quiz-result');
            
            // Записываем ответ пользователя
            userAnswers[currentQuestion] = selectedIndex;
            
            // Отключаем все кнопки
            buttons.forEach(button => button.disabled = true);
            
            // Подсвечиваем правильный и неправильный ответы
            buttons.forEach((button, index) => {
                if (index === question.correct) {
                    button.classList.add('correct');
                } else if (index === selectedIndex && index !== question.correct) {
                    button.classList.add('incorrect');
                }
            });
            
            // Проверяем правильность ответа
            if (selectedIndex === question.correct) {
                score++;
                resultDiv.innerHTML = `
                    <div style="color: #4CAF50;">
                        <i class="fas fa-check-circle"></i> ${question.explanation}
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `
                    <div style="color: #f44336;">
                        <i class="fas fa-times-circle"></i> Неправильно. ${question.explanation}
                    </div>
                `;
            }
            
            // Переход к следующему вопросу через 2 секунды
            setTimeout(() => {
                if (currentQuestion < quizQuestions.length - 1) {
                    currentQuestion++;
                    loadQuiz();
                    resultDiv.innerHTML = '';
                } else {
                    showQuizResults();
                }
            }, 2000);
        }

        // Показать результаты викторины
        function showQuizResults() {
            quizCompleted = true;
            const resultDiv = document.getElementById('quiz-result');
            const percentage = Math.round((score / quizQuestions.length) * 100);
            
            let message, icon, color;
            
            if (percentage >= 90) {
                message = 'Отлично! Ты отлично разбираешься в устройстве компьютера!';
                icon = 'fas fa-trophy';
                color = '#FFD700';
            } else if (percentage >= 70) {
                message = 'Хорошо! Ты хорошо усвоил материал!';
                icon = 'fas fa-star';
                color = '#4CAF50';
            } else if (percentage >= 50) {
                message = 'Неплохо! Но есть над чем поработать.';
                icon = 'fas fa-check-circle';
                color = '#2196F3';
            } else {
                message = 'Попробуй изучить материал еще раз и пройти тест заново.';
                icon = 'fas fa-redo';
                color = '#f44336';
            }
            
            resultDiv.innerHTML = `
                <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 15px;">
                    <i class="${icon}" style="font-size: 3rem; color: ${color}; margin-bottom: 1rem;"></i>
                    <h3 style="color: #1a2980;">Викторина завершена!</h3>
                    <p style="font-size: 1.5rem; font-weight: bold; color: ${color}; margin: 1rem 0;">
                        ${score} из ${quizQuestions.length} правильных ответов
                    </p>
                    <p style="font-size: 1.2rem; color: #666;">${message}</p>
                </div>
            `;
            
            updateProgressBar();
        }

        // Сброс викторины
        function resetQuiz() {
            currentQuestion = 0;
            score = 0;
            userAnswers = [];
            quizCompleted = false;
            
            document.getElementById('quiz-result').innerHTML = '';
            loadQuiz();
        }

        // Обновление прогресс-бара
        function updateProgressBar() {
            const progress = ((currentQuestion) / quizQuestions.length) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;
        }

        // Добавляем анимацию при наведении на карточки
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.component-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
