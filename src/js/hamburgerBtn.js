const hamburgerBtn = function() {
  const hamburgerBtn = document.querySelector('#hamburgerBtn');

  hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('is-active');
  }, false);
}

export default hamburgerBtn;