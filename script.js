  // Функция для проверки ответов в викторине
        function checkAnswer(questionNumber, correctAnswer) {
            const resultDiv = document.getElementById('quiz-result');
            const buttons = event.target.parentElement.getElementsByTagName('button');
            
            // Сбрасываем цвет всех кнопок в вопросе
            for (let button of buttons) {
                button.style.backgroundColor = '';
            }
            
            // Проверяем ответ
            if (event.target.textContent === correctAnswer) {
                event.target.style.backgroundColor = '#90EE90'; // Зеленый для правильного ответа
                resultDiv.textContent = 'Правильно! Молодец!';
                resultDiv.style.color = 'green';
            } else {
                event.target.style.backgroundColor = '#FFB6C1'; // Красный для неправильного
                resultDiv.textContent = 'Попробуй еще раз!';
                resultDiv.style.color = 'red';
            }
        }

        // Функция для плавной прокрутки к разделам
        function initSmoothScroll() {
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Функция для добавления анимаций при прокрутке
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Наблюдаем за карточками компонентов
            document.querySelectorAll('.component-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        }

        // Функция для добавления дополнительного вопроса в викторину
        function addQuizQuestion() {
            const quizSection = document.getElementById('quiz');
            const newQuestion = document.createElement('div');
            newQuestion.className = 'quiz-question';
            newQuestion.innerHTML = `
                <p><strong>3. Какое устройство используется для постоянного хранения данных?</strong></p>
                <button onclick="checkAnswer(3, 'Жесткий диск')">Оперативная память</button>
                <button onclick="checkAnswer(3, 'Жесткий диск')">Процессор</button>
                <button onclick="checkAnswer(3, 'Жесткий диск')">Жесткий диск</button>
            `;
            quizSection.insertBefore(newQuestion, document.getElementById('quiz-result'));
        }

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            initSmoothScroll();
            initScrollAnimations();
            
            // Добавляем дополнительный вопрос через 3 секунды после загрузки
            setTimeout(addQuizQuestion, 3000);
            
            console.log('Сайт "Устройство компьютера" загружен!');
        });

        // Дополнительная функция для сброса викторины
        function resetQuiz() {
            const buttons = document.querySelectorAll('.quiz-question button');
            const resultDiv = document.getElementById('quiz-result');
            
            buttons.forEach(button => {
                button.style.backgroundColor = '';
            });
            
            resultDiv.textContent = '';
        }

        // Добавляем кнопку сброса викторины
        document.addEventListener('DOMContentLoaded', function() {
            const quizSection = document.getElementById('quiz');
            const resetButton = document.createElement('button');
            resetButton.textContent = 'Начать викторину заново';
            resetButton.onclick = resetQuiz;
            resetButton.style.marginTop = '1rem';
            quizSection.appendChild(resetButton);
        });
