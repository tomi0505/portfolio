const checkBrowser = function() {
  const isIE = /*@cc_on!@*/false || !!document.documentMode;

  isIE ? document.innerHTML = 'Twoja przeglądarka nie obsługuje tej strony internetowej. Skorzystaj proszę z przeglądarki <a href="http://www.google.com/intl/pl_pl/chrome">Chrome</a>.' : "not IE 6-11.";
};

export default checkBrowser;