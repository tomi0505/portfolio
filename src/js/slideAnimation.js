import setSkillsBarsValue from "./setSkillsBarsValue";

const slideAnimation = function() {
  const sectionsTitleEl = document.querySelectorAll('.main-section-title');

  const startSlideLeftAnimation = () => {
    for(let sectionTitleElItem of sectionsTitleEl) {
      const sectionTitleElItemRect = sectionTitleElItem.getBoundingClientRect();

      if(sectionTitleElItemRect.top < 769) {
        sectionTitleElItem.classList.add('animate-to-visible');
      }
    }
  };

  startSlideLeftAnimation();

  window.addEventListener('scroll', function() {
    startSlideLeftAnimation();
  }, false);
};

const slideToCenterAnimation = function() {
  const informationAboutMeEl = document.querySelector('.information-about-me');
  const skillsContainerEl = document.querySelector('.skills-container');

  const startslideToCenterAnimation = () => {
    const informationAboutMeElRect = informationAboutMeEl.getBoundingClientRect();
    const skillsContainerElRect = skillsContainerEl.getBoundingClientRect();

    if(informationAboutMeElRect.top < 610) {
      informationAboutMeEl.classList.add('animate-to-visible');
    }

    if(skillsContainerElRect.top < 610) {
      skillsContainerEl.classList.add('animate-to-visible');

      setTimeout(() => {
        setSkillsBarsValue();
      }, 200);
    }
  };

  startslideToCenterAnimation();

  window.addEventListener('scroll', function() {
    startslideToCenterAnimation();
  }, false);
};

export default slideAnimation;
export { slideToCenterAnimation };