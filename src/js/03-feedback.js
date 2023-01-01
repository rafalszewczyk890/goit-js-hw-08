var throttle = require('lodash.throttle');
const form = document.querySelector('form');
let object = { email: ' ', message: ' ' };

form.addEventListener('input', throttle(saveMessage, 500));
form.addEventListener('submit', submitHandle);
setDefault();

function saveMessage() {
  object.email = form.elements.email.value;
  object.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

function setDefault() {
  let jsonVal = JSON.parse(localStorage.getItem('feedback-form-state'));
  try {
    form.elements.email.value = jsonVal.email;
    form.elements.message.value = jsonVal.message;
  } catch {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
}

function submitHandle(event) {
  event.preventDefault();
  form.elements.email.value = '';
  form.elements.message.value = '';
  localStorage.removeItem('feedback-form-state');
  console.log(object);
}
