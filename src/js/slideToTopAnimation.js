const slideToTopAnimation = function() {
  const portfolioProjectsImgsContainerEl = document.querySelectorAll('.portfolio-project__img-container');
  const descriptionContainersEl = document.querySelectorAll('.portfolio-project__description-container');

  const startSlideToTopAnimation = () => {
    for(let descriptionContainersElItem of descriptionContainersEl) {
      const descriptionContainersElItemRect = descriptionContainersElItem.getBoundingClientRect();

      if(descriptionContainersElItemRect.top < window.innerHeight) {
        descriptionContainersElItem.previousElementSibling.classList.add('animate-to-visible');
      }
    }
  };

  startSlideToTopAnimation();

  window.addEventListener('scroll', function() {
    startSlideToTopAnimation();
  }, false);
}

export default slideToTopAnimation;