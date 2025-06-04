$(document).ready(function () {
  $('#curved-text').lettering();

  new CircleType(document.getElementById('curved-text'))
    .radius(2000) // мягкая дуга
    .dir(1); // направление вниз

  $('#curved-text span').css({
    margin: '0 -6px',
    'letter-spacing': '-2px',
  });

  $('#curved-text span').each(function (i) {
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
  });
});
