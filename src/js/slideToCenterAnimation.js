import setSkillsBarsValue from "./setSkillsBarsValue";

const slideToCenterAnimation = function() {
  const informationAboutMeEl = document.querySelector('.information-about-me');
  const skillsContainerEl = document.querySelector('.skills-container');

  const startslideToCenterAnimation = () => {
    const informationAboutMeElRect = informationAboutMeEl.getBoundingClientRect();
    const skillsContainerElRect = skillsContainerEl.getBoundingClientRect();

    if(informationAboutMeElRect.top < window.innerHeight - informationAboutMeElRect.height/2) {
      informationAboutMeEl.classList.add('animate-to-visible');
    }

    if(skillsContainerElRect.top < window.innerHeight - informationAboutMeElRect.height/2) {
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

export default slideToCenterAnimation;