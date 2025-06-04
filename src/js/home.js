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
      margin: '0 -6px',
      'letter-spacing': '-2px',
    });
  } else {
    setTimeout(() => {
      new CircleType(document.getElementById('curved-text-line-one'))
        .radius(1800)
        .dir(1);

      new CircleType(document.getElementById('curved-text-line-two'))
        .radius(1800)
        .dir(1);
    }, 50);
  }

  // Цвета букв + настройка пробелов
  $('[id^="curved-text"] span').each(function () {
    const letter = $(this).text();
    if (letter === 'P' || letter === 'E') {
      $(this).css('color', '#4ff7ff');
    } else if (letter === 'U') {
      $(this).css('color', '#f7d7d1');
    } else if (letter === 'Z') {
      $(this).css('color', '#99ed58');
    } else if (letter === 'L') {
      $(this).css('color', '#f7d7d1');
    }

    // Пробелы
    if (letter === '\u00A0') {
      $(this).css({
        display: 'inline-block',
        width: '10px',
      });
    }
  });
});
