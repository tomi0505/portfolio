import './scss/style.scss';
import chromeMobile100Vh from './js/chromeMobile100Vh';
import hamburgerBtn from "./js/hamburgerBtn";
import scrollToAnchor from "./js/scrollToAnchor";
import slideToLeftAnimation from "./js/slideToLeftAnimation";
import slideToCenterAnimation from "./js/slideToCenterAnimation";
import slideToTopAnimation from "./js/slideToTopAnimation";
import sendEmail from "./js/sendEmail";

document.addEventListener("DOMContentLoaded", () => {
  const copyrightYearEl = document.querySelector('.copyright__year');

  (function() {
    function isIE() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');
      var trident = ua.indexOf('Trident/');

      return (msie > 0 || trident > 0);
    }

    if(isIE()) {
      document.innerHTML = '<aside class="check-browser-alert"><p>Twoja przeglądarka nie obsługuje nowoczesnych technologii webowych. Pobierz <a href="http://www.google.com/intl/pl_pl/chrome">Chrome</a>.</p></aside>';
    }
  }());

  chromeMobile100Vh();
  window.addEventListener('resize', chromeMobile100Vh, false);

  hamburgerBtn();

  copyrightYearEl.innerHTML = new Date().getFullYear();

  scrollToAnchor();
  slideToLeftAnimation();
  slideToCenterAnimation();
  slideToTopAnimation();
  sendEmail();
}, false);