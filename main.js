
const named = document.getElementById('named');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const consent = document.getElementById('consent');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();
    if (named.value && lastName.value && email.value && consent.checked && message.value) {           
        alert("Message Sent!\nThanks for completing the form. We'll be in touch soon!");
    } else {
        alert("Please fill out all required fields and consent to being contacted.");
    }  
});         