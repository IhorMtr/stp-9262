document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('[data-header-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const body = document.querySelector('body');
  const icon = btn.querySelector('[data-header-icon]');
  const menuList = mobileMenu.querySelector('[data-mobile-menu-list]');

  btn.addEventListener('click', handleOpener);

  function handleOpener() {
    const isOpen = mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
    icon.setAttribute(
      'href',
      isOpen
        ? './img/sprite.svg#icon-close_btn'
        : './img/sprite.svg#icon-burger'
    );
  }

  menuList.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      closeMenu();
    }
  });

  mobileMenu.addEventListener('click', event => {
    if (!event.target.closest('[data-mobile-menu-body]')) {
      closeMenu();
    }
  });

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('no-scroll');
    icon.setAttribute('href', './img/sprite.svg#icon-burger');
  }
});
