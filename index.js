const form = document.querySelector('form');

/*
<form> за замовчуванням має специфічну поведінку - вона перезавантажує сторінку, намагаючись самостійно відправити дані туди, куди вказує атрибут action

*/

form.addEventListener('submit', function(event){
    // потрібно зупинити поведінку за замовчуванням!
    event.preventDefault(); // виклик методу зупиняє поведінку за-замовчуванням
    const form = event.target;
    const inputUsername = form.username.value;
    const inputPass = form.pass.value;
    console.log({inputUsername, inputPass})
})
