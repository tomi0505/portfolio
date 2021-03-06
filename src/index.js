import './scss/style.scss';
import chromeMobile100Vh from './js/chromeMobile100Vh';
import hamburgerBtn from "./js/hamburgerBtn";
import scrollToAnchor from "./js/scrollToAnchor";
import slideToLeftAnimation from "./js/slideToLeftAnimation";
import slideToCenterAnimation from "./js/slideToCenterAnimation";
import slideToTopAnimation from "./js/slideToTopAnimation";
import sendEmail from "./js/sendEmail";
import particles from "./js/particlesJS";

document.addEventListener("DOMContentLoaded", () => {
  const copyrightYearEl = document.querySelector('.copyright__year');

  chromeMobile100Vh();
  window.addEventListener('resize', chromeMobile100Vh, false);

  hamburgerBtn();

  copyrightYearEl.innerHTML = new Date().getFullYear();

  // particles();
  scrollToAnchor();
  slideToLeftAnimation();
  slideToCenterAnimation();
  slideToTopAnimation();
  sendEmail();
}, false);