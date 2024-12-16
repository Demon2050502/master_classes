// Функция для плавной прокрутки
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
})


const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Функция для обновления слайдера
function updateSlider(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Обработчики кнопок
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
    updateSlider(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
});

// Обработчики точек
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

// Обработчик отправки формы
document.querySelector('.signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Показываем модальное окно
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    // Очищаем форму после отправки
    this.reset();

    // Закрытие модального окна по клику вне его содержимого
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Отменяем стандартное поведение формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
});