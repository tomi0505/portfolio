import './scss/style.scss';
import chromeMobile100Vh from './js/chromeMobile100Vh';
import scrollToAnchor from "./js/scrollToAnchor";
import slideToLeftAnimation from "./js/slideToLeftAnimation";
import slideToCenterAnimation from "./js/slideToCenterAnimation";
import slideToTopAnimation from "./js/slideToTopAnimation";
import sendEmail from "./js/sendEmail";

document.addEventListener("DOMContentLoaded", () => {
  const copyrightYearEl = document.querySelector('.copyright__year');

  chromeMobile100Vh();
  window.addEventListener('resize', chromeMobile100Vh, false);

  copyrightYearEl.innerHTML = new Date().getFullYear();

  scrollToAnchor();
  slideToLeftAnimation();
  slideToCenterAnimation();
  slideToTopAnimation();
  sendEmail();
}, false);