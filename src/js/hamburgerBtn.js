const hamburgerBtn = function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mainMenu = document.querySelector('.main-menu');

  hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    setTimeout(() => {
      hamburgerBtn.firstElementChild.classList.toggle('clicked');
      hamburgerBtn.lastElementChild.classList.toggle('clicked');
    }, 400);

    mainMenu.classList.toggle('active');
  }, false);

  for(let mainMenuItem of mainMenu.children) {
    mainMenuItem.addEventListener('click', function() {
      hamburgerBtn.click();
    }, false);
  }


  let root = document.documentElement;

  window.addEventListener('scroll', function() {
    const mainEl = document.querySelector('.main');
    const mainElRect = mainEl.getBoundingClientRect();

    const hamburgerBtnContainer = document.querySelector('.hamburger-btn-container');

    // if(mainElRect.top - hamburgerBtnContainer.clientHeight < 0) {
      let mainElToTopConfigure = (((mainElRect.top - hamburgerBtnContainer.clientHeight)*-1)/50).toFixed(1);
      root.style.setProperty('--hamburgerBtnContainerOpacityValue', mainElToTopConfigure);
    // }
  }, false);
};

export default hamburgerBtn;