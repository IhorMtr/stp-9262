document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('[data-header-button]');
  const icon = btn.querySelector('[data-header-icon]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuList = mobileMenu.querySelector('[data-mobile-menu-list]');
  const body = document.body;

  const ICON_BURGER = `
    <path d="M0 0V3.17241H27V0H0ZM0 9.7169V12.8893L27 12.8893V9.7169H0ZM0 19.829V23H27V19.8276L0 19.829Z" fill="#101010" />
  `;

  const ICON_CLOSE = `
    <path d="M13.5272 11.5031L22.5617 2.46836C22.6988 2.33592 22.8082 2.1775 22.8834 2.00234C22.9587 1.82718 22.9983 1.63879 22.9999 1.44816C23.0016 1.25753 22.9653 1.06848 22.8931 0.892041C22.8209 0.715601 22.7143 0.555303 22.5795 0.420503C22.4447 0.285702 22.2844 0.179098 22.1079 0.10691C21.9315 0.0347227 21.7425 -0.00160231 21.5518 5.42073e-05C21.3612 0.00171073 21.1728 0.041316 20.9976 0.116559C20.8225 0.191802 20.6641 0.301176 20.5316 0.438299L11.4968 9.47272L2.46228 0.438299C2.19205 0.174007 1.82849 0.0269437 1.45051 0.0290253C1.07253 0.0311069 0.710617 0.182165 0.443315 0.449417C0.176014 0.716669 0.0248916 1.07855 0.0227431 1.45653C0.0205947 1.83451 0.167594 2.19809 0.43184 2.46836L9.46669 11.5031L0.43184 20.5379C0.296085 20.6707 0.188017 20.8291 0.113895 21.0039C0.0397724 21.1787 0.00106752 21.3665 2.1773e-05 21.5564C-0.00102397 21.7463 0.0356102 21.9345 0.107803 22.1101C0.179995 22.2858 0.286311 22.4453 0.420596 22.5796C0.554881 22.7138 0.714466 22.8201 0.890111 22.8923C1.06576 22.9645 1.25397 23.0011 1.44386 23C1.63375 22.9989 1.82153 22.9602 1.99635 22.886C2.17116 22.8119 2.32953 22.7038 2.46228 22.568L11.4968 13.5336L20.5316 22.568C20.8119 22.8483 21.1795 22.9886 21.5467 22.9886C21.9138 22.9886 22.2817 22.8483 22.5617 22.568C22.8309 22.2987 22.982 21.9336 22.982 21.5529C22.982 21.1723 22.8309 20.8071 22.5617 20.5379L13.5272 11.5031Z" fill="#101010" />
  `;

  btn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
    icon.innerHTML = isOpen ? ICON_CLOSE : ICON_BURGER;
  });

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
    icon.innerHTML = ICON_BURGER;
  }
});
