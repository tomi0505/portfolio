import './scss/style.scss';
import chromeMobile100Vh from './js/chromeMobile100Vh';
import scrollToAnchor from "./js/scrollToAnchor";
import slideToLeftAnimation from "./js/slideToLeftAnimation";
import slideToCenterAnimation from "./js/slideToCenterAnimation";
import slideToTopAnimation from "./js/slideToTopAnimation";

document.addEventListener("DOMContentLoaded", () => {
  chromeMobile100Vh();
  window.addEventListener('resize', chromeMobile100Vh, false);
  scrollToAnchor();
  slideToLeftAnimation();
  slideToCenterAnimation();
  slideToTopAnimation();
}, false);