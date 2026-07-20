const track = document.querySelector('.carousel-track');
const slides = [...document.querySelectorAll('.slide')];
const dotsContainer = document.querySelector('.carousel-dots');
const previousButton = document.querySelector('.carousel-button.previous');
const nextButton = document.querySelector('.carousel-button.next');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

let currentSlide = 0;
let autoplayTimer;
let touchStartX = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === currentSlide);
    dot.setAttribute('aria-current', dotIndex === currentSlide ? 'true' : 'false');
  });
}

function restartAutoplay() {
  clearInterval(autoplayTimer);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    autoplayTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
  }
}

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = 'carousel-dot';
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show image ${index + 1}`);
  dot.addEventListener('click', () => {
    showSlide(index);
    restartAutoplay();
  });
  dotsContainer.appendChild(dot);
});

previousButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
  restartAutoplay();
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
  restartAutoplay();
});

track.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

track.addEventListener('touchend', event => {
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) > 45) {
    showSlide(currentSlide + (distance < 0 ? 1 : -1));
    restartAutoplay();
  }
}, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('current-year').textContent = new Date().getFullYear();
showSlide(0);
restartAutoplay();
