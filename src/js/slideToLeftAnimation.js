const slideToLeftAnimation = function() {
  const sectionsTitleEl = document.querySelectorAll('.main-section-title');

  const startSlideLeftAnimation = () => {
    for(let sectionTitleElItem of sectionsTitleEl) {
      const sectionTitleElItemRect = sectionTitleElItem.getBoundingClientRect();

      if(sectionTitleElItemRect.top < window.innerHeight - sectionTitleElItemRect.height) {
        sectionTitleElItem.classList.add('animate-to-visible');
      }
    }
  };

  startSlideLeftAnimation();

  window.addEventListener('scroll', function() {
    startSlideLeftAnimation();
  }, false);
};

export default slideToLeftAnimation;