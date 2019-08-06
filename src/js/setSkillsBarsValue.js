const setSkillsBarsValue = function() {
  const barsProgressEl = document.querySelectorAll('.skills-container .bar .bar__progress');

  for(let barProgressElItem of barsProgressEl) {
    const itemSkillsValue = parseInt(barProgressElItem.textContent);
    barProgressElItem.value = itemSkillsValue;
  }
}

export default setSkillsBarsValue;