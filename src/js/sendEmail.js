const sendEmail = function() {
  const sendMessageForm = document.querySelector('.send-message-form');

  const allInputs = sendMessageForm.querySelectorAll('.send-message-form__user-name-input, .send-message-form__user-email-input, .send-message-form__user-message-input');
  const userEmailInput = document.querySelector('.send-message-form__user-email-input');

  const sendFormChecker = [];

  sendMessageForm.addEventListener('submit', function(e) {
    e.preventDefault();

    for(let inputItem of allInputs) {
      if(inputItem.value.trim() === "") {
        inputItem.classList.add('error-validate');
      } else {
        if(inputItem.classList.contains('send-message-form__user-email-input')) {
          if(!/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{1,12}$/.test(userEmailInput.value.trim())) {
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

    // WILL I CAN SEND THE EMAIL[?]
    sendFormChecker.length = 0;

    for(let inputItem of allInputs) {
      sendFormChecker.push(inputItem.classList.contains('error-validate'));
    }

    const resultSendFormChecker = sendFormChecker.every(item => item === false);

    // WILL I CAN SEND THE EMAIL[TRUE/FALSE]
    if(resultSendFormChecker) {
      const formData = new FormData();
      for(let i = 0; i < allInputs; i++) {
        formData.append(allInputs[0].name, allInputs[0].value);
      }

      fetch(sendMessageForm.getAttribute('action'), {
        method: 'POST',
        body: formData
      }).then(function(resp) {
        console.log(resp.text());
      })
    }

  }, false);
};

export default sendEmail;