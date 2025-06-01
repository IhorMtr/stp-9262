const featuresWrapper = document.getElementById('featuresBlock');
const toggleBtn = document.getElementById('toggleBtn');

// По клику переключаем класс .collapsed
toggleBtn.addEventListener('click', () => {
  featuresWrapper.classList.toggle('collapsed');
});
