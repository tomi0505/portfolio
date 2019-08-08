const slideToTopAnimation = function() {
  const portfolioProjectsImgsContainerEl = document.querySelectorAll('.portfolio-project__img-container');

  const startSlideToTopAnimation = () => {
    for(let portfolioProjectImgContainerElItem of portfolioProjectsImgsContainerEl) {
      const portfolioProjectImgContainerElItemRect = portfolioProjectImgContainerElItem.getBoundingClientRect();

      if(portfolioProjectImgContainerElItemRect.top < window.innerHeight - portfolioProjectImgContainerElItemRect.height/2) {
        portfolioProjectImgContainerElItem.classList.add('animate-to-visible');
      }
    }
  };

  startSlideToTopAnimation();

  window.addEventListener('scroll', function() {
    startSlideToTopAnimation();
  }, false);
}

export default slideToTopAnimation;