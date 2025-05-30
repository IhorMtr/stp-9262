import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button[data-rev-pagination]');
  btn.addEventListener('click', openPagination);

  function openPagination() {
    const block = document.querySelector('div[data-rev-visibility]');
    block.classList.add('visible');

    btn.classList.add('hidden');
    btn.removeEventListener(openPagination);
  }
});
