const myEmail = "kontakt@tomi0505.kylos.pl";

const replaceFormAfterSendMessage = success => {
  const sendMessageForm = document.querySelector('.send-message-form');
  const sendMessageBtn = document.querySelector('.send-message-form__send-message-btn');

  const afterSendMessageAlertEl = document.createElement('aside');
  afterSendMessageAlertEl.classList.add('after-send-message-alert');

  const alertForUser = {
    success,
    successAlert: 'Twoja wiadomość została wysłana pomyślnie.',
    errorAlert: `
      Coś poszło nie tak. <a href="#" class="after-send-message-alert__show-form-btn" role="button">Spróbuj wysłać formularz ponownie.</a><br>
      lub wyślij wiadomość na adres <a href="mailto:${myEmail}" class="after-send-message-alert__mailto-link">${myEmail}</a>`
  };

  if(alertForUser.success) {
    afterSendMessageAlertEl.innerHTML = alertForUser.successAlert;
    afterSendMessageAlertEl.classList.add('success-send-message');
  } else {
    afterSendMessageAlertEl.innerHTML = alertForUser.errorAlert;
    afterSendMessageAlertEl.classList.add('error-send-message');
  }

  sendMessageForm.parentNode.replaceChild(afterSendMessageAlertEl, sendMessageForm);

  // TURN ON SEND MESSAGE BTN
  sendMessageBtn.disabled = false;
  sendMessageBtn.classList.remove('send-message-form__send-message-btn--send-start');

  if(!alertForUser.success) {
    // SHOW FORM/BACK REPLACE THE FORM
    const replaceAfterSendMessageAlertEl = document.querySelector('.after-send-message-alert__show-form-btn');
    replaceAfterSendMessageAlertEl.addEventListener('click', function(e) {
      e.preventDefault();
      afterSendMessageAlertEl.parentNode.replaceChild(sendMessageForm, afterSendMessageAlertEl);
    }, false);
  }
};

const sendEmail = function() {
  const sendMessageForm = document.querySelector('.send-message-form');

  const allInputs = sendMessageForm.querySelectorAll('.send-message-form__user-name-input, .send-message-form__user-email-input, .send-message-form__user-message-input');
  const userEmailInput = document.querySelector('.send-message-form__user-email-input');
  const sendMessageBtn = document.querySelector('.send-message-form__send-message-btn');

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

    // ALL INPUTS VALIDATION OK[?]
    sendFormChecker.length = 0;

    for(let inputItem of allInputs) {
      sendFormChecker.push(inputItem.classList.contains('error-validate'));
    }

    const resultSendFormChecker = sendFormChecker.every(item => item === false);

    // ALL INPUTS VALIDATION OK[?] - RESULT[TRUE/FALSE]
    if(resultSendFormChecker) {
      const formData = new FormData();
      for(let i = 0; i < allInputs.length; i++) {
        formData.append(allInputs[i].name, allInputs[i].value);
      }

      // TURN OFF SEND MESSAGE BTN
      sendMessageBtn.disabled = true;
      sendMessageBtn.classList.add('send-message-form__send-message-btn--send-start');

      fetch(sendMessageForm.getAttribute('action'), {
        method: 'POST',
        body: formData
      }).then(function(res) {
        if(res.ok) {
          const response = res.json();
          if(response.status === 'ok') {
            replaceFormAfterSendMessage(true);
          } else {
            replaceFormAfterSendMessage(false);
          }
        } else {
          replaceFormAfterSendMessage(false);
        }
      }).catch(res => {
        replaceFormAfterSendMessage(false);
      })
    }

  }, false);
};

export default sendEmail;