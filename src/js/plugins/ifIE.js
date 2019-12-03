// ###ONLY FOR DIST###
function isIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');

  return (msie > 0 || trident > 0);
}

if (isIE()) {
  document.body.innerHTML = '<div class="check-browser-alert"><p>Twoja przeglądarka nie obsługuje nowoczesnych technologii webowych. Pobierz <a href="http://www.google.com/intl/pl_pl/chrome">Chrome</a>.</p></div>';
} else {
  const portfolioJS = document.createElement('script');
  portfolioJS.setAttribute('type', 'text/javascript');
  portfolioJS.setAttribute('src', 'bundle.js');
  document.body.appendChild(portfolioJS);
}