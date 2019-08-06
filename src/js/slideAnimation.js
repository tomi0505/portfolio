import setSkillsBarsValue from "./setSkillsBarsValue";

const slideAnimation = function() {
  const sectionTitleEl = document.querySelector('#aboutMe .section__title');

  const startSlideLeftAnimation = () => {
    const sectionTitleElRect = sectionTitleEl.getBoundingClientRect();

    if(sectionTitleElRect.top < 769) {
      sectionTitleEl.classList.add('animate-to-visible');
    }
  };

  startSlideLeftAnimation();

  window.addEventListener('scroll', function() {
    startSlideLeftAnimation();
  }, false);
}

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
}

export default slideAnimation;
export { slideToCenterAnimation };