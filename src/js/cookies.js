const popup = document.querySelector('[data-cookie-open]');
export const popBtns = document.querySelectorAll('[data-btn-close]');
const LS_KEY = 'pop-open';

export function handleClosePopUp() {
  if (!popup) return;
  popup.dataset.cookieOpen = 'false';
  popup.classList.remove('open');
  setPopUp(false);
}

export function detectCookiePop() {
  if (!popup) return;

  const data = localStorage.getItem(LS_KEY);
  if (data !== null) {
    const popUpState = JSON.parse(data);
    popup.dataset.cookieOpen = `${popUpState}`;
  }
  if (popup.dataset.cookieOpen === 'true') {
    popup.classList.add('open');
  } else {
    popup.classList.remove('open');
  }
}
function setPopUp(state) {
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}
