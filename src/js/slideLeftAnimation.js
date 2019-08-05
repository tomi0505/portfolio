const slideLeftAnimation = function() {
  const sectionTitleEl = document.querySelector('#aboutMe .section__title');
  const headerEl = document.querySelector('.header');

  const headerElHeight = parseInt(window.getComputedStyle(headerEl).height);
  const animationExcess = 200;

  const startSlideLeftAnimation = () => {
    const sectionTitleElRect = sectionTitleEl.getBoundingClientRect();

    if(sectionTitleElRect.top < headerElHeight - animationExcess) {
      sectionTitleEl.classList.add('section__title--animation-slide-left');
    }
  };

  startSlideLeftAnimation();

  window.addEventListener('scroll', function() {
    startSlideLeftAnimation();
  }, false);
}

export default slideLeftAnimation;