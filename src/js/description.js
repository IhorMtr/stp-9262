import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    return;
  }

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
  });
});
