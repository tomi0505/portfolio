import './scss/style.scss';
import chromeMobile100Vh from './js/chromeMobile100Vh';
import scrollToAnchor from "./js/scrollToAnchor";
import slideAnimation from "./js/slideAnimation";
import { slideToCenterAnimation } from "./js/slideAnimation";

document.addEventListener("DOMContentLoaded", () => {
  chromeMobile100Vh();
  window.addEventListener('resize', chromeMobile100Vh, false);
  scrollToAnchor();

  slideAnimation();
  slideToCenterAnimation();
}, false);