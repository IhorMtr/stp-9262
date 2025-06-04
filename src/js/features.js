document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('button[data-features-button]');
  const blocks = document.querySelectorAll('li[data-features-block]');
  const btnImg = document.querySelector('[data-features-btn-icon]');

  toggleBtn.addEventListener('click', handleOpener);

  function handleOpener() {
    blocks.forEach(elem => {
      elem.classList.toggle('features-disabled');
    });

    btnImg.classList.toggle('features-chevron-svg-rotated');
  }
});
