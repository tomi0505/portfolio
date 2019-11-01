const checkBrowser = function() {
  const ua = window.navigator.userAgent;
  const isIE = /MSIE|Trident\//.test(ua);
  
  if (isIE) {
    document.innerHTML = 'Twoja przeglądarka nie obsługuje nowoczesnych technologii webowych. Pobierz <a href="http://www.google.com/intl/pl_pl/chrome">Chrome</a>.';
  }
};

export default checkBrowser;
