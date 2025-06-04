document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.cookie-pop-page');
  const buttons = document.querySelectorAll('[data-btn-close]');
  const LS_KEY = 'cookie-popup-acknowledged';

  if (localStorage.getItem(LS_KEY) === 'true') {
    return;
  }

  popup.classList.add('open');

  const handleClose = () => {
    popup.classList.remove('open');
    localStorage.setItem(LS_KEY, 'true');
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', handleClose, { once: true });
  });
});
