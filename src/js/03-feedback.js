var _ = require('lodash');

const formEl = document.querySelector(".feedback-form");
let values = {};

formEl.addEventListener('input', _.throttle (onInput,500));
formEl.addEventListener('submit', handleSubmit);


try {
    const json = localStorage.getItem("feedback-form-state")
    const autocomplete = JSON.parse(json);
    formEl.elements.email.value = autocomplete.email;
    formEl.elements.message.value = autocomplete.message
} catch (err) {}

function onInput() {
     values = {
        email: formEl.elements.email.value,
        message: formEl.elements.message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(values) );
}
function handleSubmit(evt) {
    evt.preventDefault();
    console.log(values);
    localStorage.clear();
    evt.target.reset();

}


