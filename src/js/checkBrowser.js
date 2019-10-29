const checkBrowser = function() {
  if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
  {
    document.innerHTML = 'Twoja przeglądarka nie obsługuje tej strony internetowej. Skorzystaj proszę z przeglądarki <a href="http://www.google.com/intl/pl_pl/chrome">Chrome</a>.';
  }
};

export default checkBrowser;