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
};

export default hamburgerBtn;