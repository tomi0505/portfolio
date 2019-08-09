const sendEmail = function() {
  const sendMessageForm = document.querySelector('.send-message-form');

  const allInputs = sendMessageForm.querySelectorAll('.send-message-form__user-name-input, .send-message-form__user-email-input, .send-message-form__user-message-input');
  const userEmailInput = document.querySelector('.send-message-form__user-email-input');

  sendMessageForm.addEventListener('submit', function(e) {
    e.preventDefault();

    for(let inputItem of allInputs) {
      if(inputItem.value.trim() === "") {
        inputItem.classList.add('error-validate');
      } else {
        if(inputItem.classList.contains('send-message-form__user-email-input')) {
          if(!/[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{1,12}$/.test(userEmailInput.value.trim())) {
            inputItem.classList.add('error-validate');
            inputItem.nextElementSibling.innerHTML = "Nieprawidłowy format adresu e-mail.";
          } else {
            inputItem.classList.remove('error-validate');
          }
        } else {
          inputItem.classList.remove('error-validate');
        }
      }
    }
  }, false);
};

export default sendEmail;