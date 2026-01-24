

const named = document.getElementById('named');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const consent = document.getElementById('consent');
const form = document.getElementById('contact-form');
const message = document.getElementById('message');

clicked.addEventListener('click', function(event) {
    event.preventDefault();
    clearError();

    let hasError = false;

    if (named.value.trim() === '') {
        showError(named, 'First name is required.');
        hasError = true;
    }
    if (lastName.value.trim() === '') {
        showError(lastName, 'Last name is required.');
        hasError = true;
    }
    if (email.value.trim() === '') {
        showError(email, 'Email is required.');
        hasError = true;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address.');
        hasError = true;
    } 
    if (message.value.trim() === '') {
        showError(message, 'Message is required.');
        hasError = true;
    }
    if (!consent.checked) {
        showError(consent, 'You must consent to being contacted.');
        hasError = true;
    }
    if (!hasError) {
        form.submit(alert(`Succesfully submitted!`));
    }
});         

function showError(input, message) {

    const error = document.createElement('div');
    error.className = 'error-message';
    error.innerText = message;
    input.parentNode.insertBefore(error, input.nextSibling);
}

function clearError() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}