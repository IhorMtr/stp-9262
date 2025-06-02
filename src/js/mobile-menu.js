const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.header-mob-button');
const closeBtn = document.querySelector('.menu-close');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
  overlay.classList.remove('is-open');
  document.body.classList.remove('menu-open');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('is-open');
  overlay.classList.remove('is-open');
  document.body.classList.remove('menu-open');
});
