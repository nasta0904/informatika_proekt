  // JavaScript для анимаций и интерактивности
        document.addEventListener('DOMContentLoaded', function() {
            // Плавная прокрутка для ссылок
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Анимация появления элементов при прокрутке
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                    }
                });
            }, observerOptions);

            // Наблюдаем за всеми элементами с классом animate-on-scroll
            document.querySelectorAll('.animate-on-scroll').forEach(element => {
                observer.observe(element);
            });

            // Интерактивность для карточек
            document.querySelectorAll('.feature-card, .component-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // Добавляем консольное приветствие
            console.log('🎓 Добро пожаловать на курс "Устройства компьютера"!');
            console.log('💻 Начни изучение с раздела "Компоненты ПК"');
        });

        // Функция для показа уведомления
        function showNotification(message, type = 'info') {
            // Создаем элемент уведомления
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                transform: translateX(150%);
                transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                max-width: 350px;
                display: flex;
                align-items: center;
                gap: 1rem;
            `;
            
            const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
            notification.innerHTML = `
                <i class="fas ${icon}"></i>
                <div>${message}</div>
            `;
            
            document.body.appendChild(notification);
            
            // Показываем уведомление
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // Убираем уведомление через 4 секунды
            setTimeout(() => {
                notification.style.transform = 'translateX(150%)';
                setTimeout(() => notification.remove(), 500);
            }, 4000);
        }

        // Пример использования уведомления при нажатии на кнопку
        document.addEventListener('DOMContentLoaded', function() {
            const startButton = document.querySelector('.btn-primary');
            if (startButton) {
                startButton.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') {
                        e.preventDefault();
                        showNotification('🎉 Отличный выбор! Начинаем обучение!', 'success');
                        
                        // Через 2 секунды показываем следующее уведомление
                        setTimeout(() => {
                            showNotification('💡 Совет: Начни с изучения процессора - это мозг компьютера!', 'info');
                        }, 2500);
                    }
                });
            }
        });

        // Анимация для шагов обучения
        function animateSteps() {
            const steps = document.querySelectorAll('.step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.style.animation = 'bounce 0.5s ease';
                    setTimeout(() => {
                        step.style.animation = '';
                    }, 500);
                }, index * 300);
            });
        }

        // Запускаем анимацию шагов при загрузке
        setTimeout(animateSteps, 1000);

        // Добавляем CSS анимацию bounce
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            .step:hover .step-number {
                animation: bounce 0.5s ease;
            }
        `;
        document.head.appendChild(style);
