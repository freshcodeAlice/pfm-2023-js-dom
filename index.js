const form = document.querySelector('form');

/*
<form> за замовчуванням має специфічну поведінку - вона перезавантажує сторінку, намагаючись самостійно відправити дані туди, куди вказує атрибут action

*/

form.addEventListener('submit', function(event){
    // потрібно зупинити поведінку за замовчуванням!
    event.preventDefault(); // виклик методу зупиняє поведінку за-замовчуванням
    const {firstName, lastName, email, pass, birthday, agreement} = event.target;
    const userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: pass.value,
        birthday: birthday.value,
        agree: agreement.checked
    }
    console.log(userObj)
})


/*
1. Додати мінімум стилів, прописати пояснення до кожного інпута, що це інформація

2. За відправки форми вивести в консоль об'єкт зі всією введеною інформацією користувача

*/