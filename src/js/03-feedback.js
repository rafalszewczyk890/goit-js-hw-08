var throttle = require('lodash.throttle');

const form = document.querySelector('form');

let object = { email: '', message: '' };

let jsonVal = JSON.parse(localStorage.getItem('feedback-form-state'));

function setDefault() {
  form.elements.email.value = jsonVal.email;
  form.elements.message.value = jsonVal.message;
}

setDefault();

form.addEventListener('input', throttle(saveMessage, 500));

function saveMessage() {
  object.email = form.elements.email.value;
  object.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

// // function updateOutput() {
// //   let savedItem = localStorage.getItem('feedback-form-state');
// //   let jsonItem = JSON.parse(savedItem);
// //   console.log(jsonItem);
// //   form.elements.email.value = jsonItem[0];
// // }

// form.addEventListener('input', saveMessage);

// let emailVal = form.elements.email.value;
// let textVal = form.elements.message.value;

// function saveMessage(event) {
//   event.preventDefault();

//   localStorage.setItem('feedback-form-state', {
//     email: emailVal,
//     message: textVal,
//   });
//   let savedItem = localStorage.getItem('feedback-form-state');
//   console.log(savedItem);
// }

// // function saveMessage(event) {
// //   event.preventDefault();
// //   let mailValue = form.elements.email.value;
// //   let textValue = form.elements.message.value;
// //   const {
// //     elements: { email, message },
// //   } = form;
// //   localStorage.setItem('feedback-form-state', [mailValue, textValue]);
// //   updateOutput();
// // }
