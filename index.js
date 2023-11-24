const form = document.querySelector('form');
const inputFirstName = document.querySelector('input[name="firstName"]');


inputFirstName.addEventListener('change', function({target}) {
  
    if(validateName(target.value)){
        target.classList.remove('invalid');
       target.classList.add('valid')
    } else {
        target.classList.add('invalid')
    }
})


function validateName(value) {
    return !(value.includes('@') || value.includes('!')) 
}

/*
<form> за замовчуванням має специфічну поведінку - вона перезавантажує сторінку, намагаючись самостійно відправити дані туди, куди вказує атрибут action

*/

form.addEventListener('submit', function(event){
    // потрібно зупинити поведінку за замовчуванням!
    event.preventDefault(); // виклик методу зупиняє поведінку за-замовчуванням
    const form = event.target;
    if (validateData(form.pass.value, form.passRepeat.value)) {
        submitDataToServer(form);
    } else {
        createErrorMessage(form)
    }
})

function validateData(inputValue1, inputValue2) {
    return inputValue1 === inputValue2
}


function submitDataToServer({firstName, lastName, email, pass, passRepeat, birthday, agreement}){
    const userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: pass.value,
        birthday: birthday.value,
        agree: agreement.checked
    }
       console.log(userObj); // відправляємо дані на сервер
}


function createErrorMessage(form) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-text');
        errorMessage.textContent = 'Password must be the same';
        form.append(errorMessage);
}

const icon = document.querySelector('.pass-icon');
const passInput = document.querySelector('input[name="pass"]');

icon.addEventListener('click', function() {
    if (passInput.type === "password") {
        passInput.type = "text";
    } else {
        passInput.type = "password";
    }

})