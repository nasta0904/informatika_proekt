// JavaScript для анимаций и интерактивности
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 Добро пожаловать на курс "Устройства компьютера"!');
    console.log('💻 Начни изучение с раздела "Компоненты ПК"');

    // Инициализация всех функций
    initSmoothScroll();
    initScrollAnimations();
    initCardInteractivity();
    initNotificationExample();
    initStepsAnimation();
});

// Функция для плавной прокрутки
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Отступ для фиксированного хедера
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Функция для анимации при скролле
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    // Создаем анимацию bounce
    if (!document.querySelector('#bounce-animation-style')) {
        const style = document.createElement('style');
        style.id = 'bounce-animation-style';
        style.textContent = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            .step:hover .step-number {
                animation: bounce 0.5s ease;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-on-scroll.visible {
                animation: fadeInUp 0.8s ease forwards;
            }
        `;
        document.head.appendChild(style);
    }

    // Настройки для Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Добавляем задержку для последовательного появления
                const index = Array.from(animatedElements).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.2}s`;
                
                // Перестаем наблюдать за элементом после его появления
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Начинаем наблюдение за всеми элементами
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Инициализируем видимость первых элементов для немедленного показа
    setTimeout(() => {
        const firstElements = document.querySelectorAll('.animate-on-scroll:nth-child(-n+2)');
        firstElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 300);
}

// Функция для интерактивности карточек
function initCardInteractivity() {
    document.querySelectorAll('.feature-card, .component-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) { // Только на десктопе
                this.style.transform = 'translateY(-10px)';
                this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) { // Только на десктопе
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// Функция для уведомлений
function showNotification(message, type = 'info') {
    // Проверяем, существует ли уже уведомление
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        info: '#2196F3',
        warning: '#ff9800'
    };
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(150%);
        transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: min(350px, 90vw);
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
    
    notification.innerHTML = `
        <i class="fas ${icons[type] || icons.info}" style="font-size: 1.2rem;"></i>
        <div style="flex: 1;">${message}</div>
        <i class="fas fa-times" style="cursor: pointer; opacity: 0.8;" onclick="this.parentElement.remove()"></i>
    `;
    
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(150%)';
            setTimeout(() => notification.remove(), 500);
        }
    }, 5000);
}

// Пример использования уведомлений
function initNotificationExample() {
    const startButton = document.querySelector('.btn-primary');
    if (startButton) {
        startButton.addEventListener('click', function(e) {
            // Проверяем, ведет ли кнопка на страницу
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === '') {
                e.preventDefault();
                showNotification('🎉 Отличный выбор! Начинаем обучение!', 'success');
                
                // Через 2 секунды показываем следующее уведомление
                setTimeout(() => {
                    showNotification('💡 Совет: Начни с изучения процессора - это мозг компьютера!', 'info');
                }, 2500);
            }
        });
    }
}

// Анимация для шагов обучения
function initStepsAnimation() {
    const steps = document.querySelectorAll('.step');
    if (steps.length === 0) return;
    
    // Анимируем шаги при загрузке
    setTimeout(() => {
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.style.animation = 'bounce 0.5s ease';
                setTimeout(() => {
                    step.style.animation = '';
                }, 500);
            }, index * 300);
        });
    }, 1000);
}

// Дополнительная функция для принудительного запуска анимации
function animateElements() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    });
}

// Экспорт функций для глобального использования
window.showNotification = showNotification;
window.animateElements = animateElements;

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('Произошла ошибка:', e.message);
    showNotification('Произошла ошибка при загрузке страницы', 'error');
});
     document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                    }
                });
            }, observerOptions);
            
            // Наблюдаем за всеми карточками
            document.querySelectorAll('.component-card').forEach(card => {
                observer.observe(card);
            });
        });
