const setSkillsBarsValue = function() {
  const barsEl = document.querySelectorAll('.skills-container .bar');

  const skills = [78, 62, 51, 65, 40, 71, 52, 29, 17, 12, 1];

  for(let [i, el] of barsEl.entries()) {
    el.querySelector('.bar__progress').value = skills[i];
  }
}

export default setSkillsBarsValue;