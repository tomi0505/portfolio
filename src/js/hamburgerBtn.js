let menuIsVisible = false;

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

    if(!menuIsVisible) {
      setTimeout(() => {
        mainMenu.classList.add('reset-transition');
      }, 2000);

      menuIsVisible = true;
    }
  }, false);
};

export default hamburgerBtn;