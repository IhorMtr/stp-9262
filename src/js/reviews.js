import Swiper from 'swiper';
import 'swiper/css';

window.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper('.marquee-swiper', {
    slidesPerView: 'auto', // Slides take up the width defined in our CSS
    spaceBetween: 160, // Adds breathing room between logos
    loop: true, // If it doesn’t loop, what are we even doing here?
    speed: 6000, // Time in ms for one slide to transition. Change this to your liking.
    allowTouchMove: false, // It’s a marquee, not an interactive carnival ride
    autoplay: {
      delay: 1, // 1 millisecond delay: we’re moving nonstop. Try 0 here too :).
      disableOnInteraction: false, // If someone tries to touch, let them fail in peace
    },
  });
});
