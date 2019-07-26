const hamburgerBtn = function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const hamburgerBtnInnerLineItems = document.querySelectorAll('.hamburger-btn__inner-line-item');

  hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    setTimeout(() => {
      for(let innerLineItem of hamburgerBtnInnerLineItems) {
        innerLineItem.classList.toggle('clicked');
      }
    }, 400);
  }, false);
}

export default hamburgerBtn;