document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return;
  }

  const marqueeContainer = document.querySelector('[data-marquee-container]');
  const marqueeContentList = document.querySelector('[data-animate-list]');
  if (!marqueeContainer || !marqueeContentList) {
    return;
  }

  const containerWidth = marqueeContainer.clientWidth;

  let listWidth = 0;
  Array.from(marqueeContentList.children).forEach(el => {
    listWidth += el.offsetWidth;
  });

  const itemsCount = marqueeContentList.children.length;
  if (itemsCount === 0) {
    return;
  }

  const spaceBetween = (containerWidth - listWidth) / itemsCount;

  const allItems = document.querySelectorAll('[data-animate-item]');
  allItems.forEach(el => {
    el.style.marginRight = `${spaceBetween}px`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button[data-rev-pagination]');
  btn.addEventListener('click', openPagination);

  function openPagination() {
    const block = document.querySelector('div[data-rev-visibility]');
    block.classList.add('visible');

    btn.classList.add('hidden');
  }
});
