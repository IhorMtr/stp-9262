# Коротка інформація до проєкту

### ⚠️ УВАГА!

**FILL ТА STROKE ПО ДЕФОЛТУ ОБНУЛЕНІ!**

## Список іконок:

| Icon Name                | Preview                                               |
| ------------------------ | ----------------------------------------------------- |
| **icon-close_btn**       | ![icon-close_btn](./assets/close_btn.svg)             |
| **icon-left_arrow**      | ![icon-left_arrow](./assets/left_arrow.svg)           |
| **icon-burger**          | ![icon-burger](./assets/burger.svg)                   |
| **icon-chevron_desktop** | ![icon-chevron_desktop](./assets/chevron_desktop.svg) |
| **icon-chevron_mobile**  | ![icon-chevron_mobile](./assets/chevron_mob.svg)      |

---

## Корисні класи

- **.visually-hidden** — приховує елемент візуально, але залишає його доступним
  для скрінрідерів.

---

## Іменування гілок

- **`feature/`** — для нових функцій.  
  _Приклад:_ `feature/mobile-menu`

- **`bugfix/`** — для виправлення помилок.  
  _Приклад:_ `bugfix/fix-mobile-menu-opener`

- **`refactor/`** — для покращення структури коду без зміни функціоналу.  
  _Приклад:_ `refactor/clean-mobile-menu`

---

## Корисні Git команди

### Перемикання та робота з гілками

- `git switch -c <branch>`  
  Створити нову гілку і одразу перемкнутись на неї.  
  _Приклад:_ `git switch -c feature/login`

- `git switch <branch>`  
  Перемкнутись на існуючу гілку.

### Отримання змін та злиття

- `git pull origin main`  
   Стягнути останні зміни з віддаленої гілки `main` і змерджити з поточною.

  **!! НЕ ЗАБУДЬТЕ ЗАКОМІТИТИ СВОЮ ГІЛКУ ПЕРЕД ЦІЄЮ КОМАНДОЮ !!**

- `git fetch`  
  Отримати останні зміни з віддаленого репозиторію **без** автоматичного злиття.

- `git merge <branch>`  
  Злити вказану гілку з поточною.

---

# Вимоги до коду

## 1. Оптимізація зображень

- **Перетворення JPEG → WebP**  
  Усі файли `.jpg` / `.jpeg` потрібно конвертувати у формат `.webp`
- **Підтримка Retina-екранів через `<picture>`**  
   Використовуйте тег `<picture>` із джерелами для 1× та 2× щільності:

  ```html
  <picture>
    <source
      srcset="path/to/image-mobile-1x.jpg 1x, path/to/image-mobile-2x.jpg 2x"
      media="(max-width: 1279px)"
    />

    <source
      srcset="path/to/image-desktop-1x.jpg 1x, path/to/image-desktop-2x.jpg 2x"
      media="(min-width: 1280px)"
    />

    <img
      class="example-class"
      src="path/to/image-mobile-1x.jpg"
      alt="example image"
      width="example-width"
      height="example-height"
      loading="lazy"
    />
  </picture>
  ```

  loading="lazy" варто додавати до усіх зображень.

  **!! Але не до зображень у секції home !!**

## 2. Структура та стиль коду

Використовуйте function declarations як стандарт:

function fetchData() { /_ ... _/ }

Стрілкові функції => застосовуйте лише там, де це справді зручно й доцільно:
колбеки масивів (forEach, map, тощо), обробка промісів, тощо.

camelCase для всіх ідентифікаторів: let userProfile, function getUserData(),
const postListElement.

## 3. Обробка подій

Слухачі подій додаємо іменованими функціями, щоб їх можна було зняти:

function handleClick(event) { /_ ... _/ }

button.addEventListener('click', handleClick); // За потреби:
button.removeEventListener('click', handleClick);
