let lineContentIndex = 0;

const startTypingText = function(DOMEls, lineContentIndex) {
  DOMEls.lineContentElements[`lineContentEl${lineContentIndex}`].innerText = DOMEls.aboutMeContainerContentObj[`lineContent${lineContentIndex}`][0];
  DOMEls.aboutMeContainer.appendChild(DOMEls.lineContentElements[`lineContentEl${lineContentIndex}`]);

  let i = 1;

  const setIntervalTypingText = setInterval(() => {
    if(i < DOMEls.aboutMeContainerContentObj[`lineContent${lineContentIndex}`].length) {
      DOMEls.lineContentElements[`lineContentEl${lineContentIndex}`].innerHTML += DOMEls.aboutMeContainerContentObj[`lineContent${lineContentIndex}`][i];
      i++;
    } else {
      clearInterval(setIntervalTypingText);
      if(lineContentIndex < Object.keys(DOMEls.aboutMeContainerContentObj).length-1) {
        lineContentIndex++;
        startTypingText(DOMEls, lineContentIndex);
      }
    }
  }, 140);
}

const aboutMeTypingText = function() {
  const aboutMeContainer = document.querySelector('.about-me-container');
  const aboutMeContainerChildren = document.querySelector('.about-me-container').children;

  const aboutMeContainerContentObj = {};
  const lineContentElements = [];

  let index = 0;

  do {
    aboutMeContainerContentObj[`lineContent${index}`] = aboutMeContainerChildren[index].innerText;
    lineContentElements[`lineContentEl${index}`] = document.createElement(aboutMeContainerChildren[index].tagName);
    index++;
  } while(index < aboutMeContainerChildren.length);

  aboutMeContainer.innerHTML = "";


  startTypingText({aboutMeContainer, aboutMeContainerChildren, aboutMeContainerContentObj, lineContentElements}, lineContentIndex);
}

export default aboutMeTypingText;