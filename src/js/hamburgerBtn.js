const hamburgerBtn = function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');

  hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    setTimeout(() => {
      hamburgerBtn.firstElementChild.classList.toggle('clicked');
      hamburgerBtn.lastElementChild.classList.toggle('clicked');
    }, 400);
  }, false);
};

export default hamburgerBtn;