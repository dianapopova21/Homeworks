const inputElement = document.getElementById('email-field');
const checkButton = document.getElementById('btn-check');
const resultAlert = document.getElementById('result-alert');

const pattern = /^[^.\s@\W][^\s@]+[^.\s]@\w+\.[^\W\s\d]+$/;

function validateEmail(email, pattern) {
    return pattern.test(email);
}

checkButton.addEventListener('click', () => {
    const isValidEmail = validateEmail(inputElement.value, pattern);

    if (isValidEmail) {
        if(resultAlert.classList.contains('d-none')) {
            resultAlert.classList.remove('d-none');
        }
        if(resultAlert.classList.contains('alert-danger')){
            resultAlert.classList.remove('alert-danger');
        }
        resultAlert.classList.add('alert-success');
        resultAlert.innerText = 'Email is valid';
    } else {
        if(resultAlert.classList.contains('d-none')) {
            resultAlert.classList.remove('d-none');
        }
        if(resultAlert.classList.contains('alert-success')) {
            resultAlert.classList.remove('alert-success');
        }
        resultAlert.classList.add('alert-danger');
        resultAlert.innerText = 'Email is invalid';
    }
});





