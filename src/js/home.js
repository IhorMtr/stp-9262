// Импорт jQuery
import $ from 'jquery';

// Импорт Lettering.js (он требует jQuery)
import 'lettering.js';

// Импорт CircleType
import CircleType from 'circletype';

$(document).ready(function () {
  const isDesktop = window.innerWidth >= 1200;

  if (isDesktop) {
    new CircleType(document.getElementById('curved-text-desktop'))
      .radius(2000)
      .dir(1);

    $('#curved-text-desktop span').css({
      margin: '0 -3px',
      'letter-spacing': '3px',
    });
  } else {
    // ID всех строк на мобилке
    const mobileTextIds = [
      'curved-text-line-one',
      'curved-text-line-two',
      'curved-text-line-three',
    ];

    // Инициализация каждой строки CircleType
    setTimeout(() => {
      mobileTextIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          new CircleType(el).radius(1800).dir(1);
        }
      });
    }, 50);
  }

  // Раскраска букв и настройка пробелов
  $('[id^="curved-text"] span').each(function () {
    const letter = $(this).text();
    const $this = $(this);

    if (letter === 'P' || letter === 'E') {
      $this.css('color', '#4ff7ff');
    } else if (letter === 'U') {
      $this.css('color', '#f7d7d1');
    } else if (letter === 'Z') {
      $this.css('color', '#99ed58');
    } else if (letter === 'L') {
      $this.css('color', '#f7d7d1');
    }

    // Обработка пробела
    if (letter === '\u00A0') {
      $this.css({
        display: 'inline-block',
        width: 'spaceWidth',
      });
    }
  });
});
