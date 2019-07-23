import './scss/style.scss';
import chromeMobile100Vh from './js/chromeMobile100Vh';
import scrollToAnchor from "./js/scrollToAnchor";
import hamburgerBtn from "./js/hamburgerBtn";

document.addEventListener("DOMContentLoaded", () => {
  chromeMobile100Vh();
  window.addEventListener('resize', chromeMobile100Vh, false);
  scrollToAnchor();
  hamburgerBtn();
}, false);