function isIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');
  const trident = ua.indexOf('Trident/');

  return (msie > 0 || trident > 0);
}

const checkBrowser = function() {
  if(isIE()) {
    document.innerHTML = 'Twoja przeglądarka nie obsługuje nowoczesnych technologii webowych. Pobierz <a href="http://www.google.com/intl/pl_pl/chrome">Chrome</a>.';
  }
};

export default checkBrowser;
