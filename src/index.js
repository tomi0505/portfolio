import './scss/style.scss';
import chromeMobile100Vh from './js/chromeMobile100Vh';
import scrollToAnchor from "./js/scrollToAnchor";
import slideLeftAnimation from "./js/slideLeftAnimation";
import hamburgerBtn from "./js/hamburgerBtn";
import aboutMeTypingText from "./js/aboutMeTypingText";

document.addEventListener("DOMContentLoaded", () => {
  chromeMobile100Vh();
  window.addEventListener('resize', chromeMobile100Vh, false);
  scrollToAnchor();
  slideLeftAnimation();
  // hamburgerBtn();
  // aboutMeTypingText();
}, false);