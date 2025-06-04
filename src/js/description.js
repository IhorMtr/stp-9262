document.addEventListener('DOMContentLoaded', async () => {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    return;
  }

  await import('swiper/css');
  const { default: Swiper } = await import('swiper');
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
  });
});
