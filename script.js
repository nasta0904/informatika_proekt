// JavaScript для анимаций и интерактивности
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 Добро пожаловать на курс "Устройства компьютера"!');
    console.log('💻 Начни изучение с раздела "Компоненты ПК"');

    // Инициализация всех функций
    initScrollAnimations();
    initCardInteractivity();
    initNotificationExample();
    initStepsAnimation();
});

// Функция для анимации при скролле
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.component-card.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    // Создаем анимацию fadeInUp если ее еще нет
    if (!document.querySelector('#fadeInUp-animation-style')) {
        const style = document.createElement('style');
        style.id = 'fadeInUp-animation-style';
        style.textContent = `
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
            
            .animate-on-scroll.animated {
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
                // Добавляем задержку для последовательного появления
                const index = Array.from(animatedElements).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add('animated');
                
                // Перестаем наблюдать за элементом после его появления
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Начинаем наблюдение за всеми элементами
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Функция для интерактивности карточек
function initCardInteractivity() {
    const cards = document.querySelectorAll('.component-card');
    
    cards.forEach(card => {
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
        
        // Добавляем интерактивность при клике
        card.addEventListener('click', function() {
            const title = this.querySelector('h2')?.textContent || 'Компонент';
            showNotification(`Вы выбрали: ${title}`, 'info');
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
    const startButton = document.querySelector('.btn');
    if (startButton) {
        startButton.addEventListener('click', function(e) {
            // Проверяем, ведет ли кнопка на страницу
            const href = this.getAttribute('href');
            if (href && href !== '#' && href !== '') {
                // Если есть ссылка, показываем уведомление и позволяем переход
                e.preventDefault();
                showNotification('🎉 Переходим к следующему уроку!', 'success');
                
                // Через 1.5 секунды переходим на страницу
                setTimeout(() => {
                    window.location.href = href;
                }, 1500);
            } else {
                // Если нет ссылки, показываем уведомление
                e.preventDefault();
                showNotification('🎉 Отличный выбор! Начинаем обучение!', 'success');
            }
        });
    }
}

// Анимация для шагов обучения (если они есть)
function initStepsAnimation() {
    const steps = document.querySelectorAll('.step');
    if (steps.length === 0) return;
    
    // Создаем анимацию bounce если ее еще нет
    if (!document.querySelector('#bounce-animation-style')) {
        const style = document.createElement('style');
        style.id = 'bounce-animation-style';
        style.textContent = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
    
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
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 100);
    });
}

// Функция для плавной прокрутки (если понадобится)
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

// Экспорт функций для глобального использования
window.showNotification = showNotification;
window.animateElements = animateElements;

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('Произошла ошибка:', e.message);
    showNotification('Произошла ошибка при загрузке страницы', 'error');
});



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
        correctAnswer: 0,
        explanation: "Системный блок - это основной корпус компьютера, содержащий важнейшие электронные компоненты."
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
        correctAnswer: 0,
        explanation: "Материнская плата - это основная плата, которая соединяет все компоненты компьютера между собой."
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
        correctAnswer: 0,
        explanation: "CPU (Central Processing Unit) - это центральный процессор, 'мозг' компьютера, выполняющий все вычисления."
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
        correctAnswer: 0,
        explanation: "RAM (оперативная память) - временное хранилище данных, HDD (жёсткий диск) - постоянное хранилище."
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
        correctAnswer: 0,
        explanation: "PSU (Power Supply Unit) - блок питания, который преобразует сетевое напряжение в стабильное питание для компонентов."
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
        correctAnswer: 0,
        explanation: "GPU (Graphics Processing Unit) - видеокарта, которая обрабатывает графическую информацию."
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
        correctAnswer: 0,
        explanation: "Устройства ввода передают информацию от пользователя к компьютеру: клавиатура, мышь, сканер и др."
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
        correctAnswer: 0,
        explanation: "Периферийные устройства - это внешние устройства, подключаемые к компьютеру для ввода, вывода и хранения информации."
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
        correctAnswer: 0,
        explanation: "Сетевые устройства обеспечивают подключение к интернету и локальным сетям: модем, роутер, сетевая карта."
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
        correctAnswer: 0,
        explanation: "Внешние HDD/SSD используются для переноса, резервного копирования и хранения данных вне компьютера."
    }
];

// Функция для получения случайных вопросов (если нужно меньше 10)
function getRandomQuestions(count = 10) {
    if (count >= questions.length) return questions;
    
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
