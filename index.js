/*
Написати код, який за натиснення на кнопку створює і відображає червоний круг 80х80px

За натиснення на червоний кружочок він має стати зеленим квадратиком

*/

const btn = document.querySelector('#btn');

const body = document.body;

btn.addEventListener('click', function() {
    const redCircle = document.createElement('div');
    redCircle.style.backgroundColor = 'red';
    redCircle.style.borderRadius = '50%';
    redCircle.style.width = '80px';
    redCircle.style.height = '80px';

    redCircle.addEventListener('click', function (event) {
        event.target.style.backgroundColor = 'green';
        event.target.style.borderRadius = '0';
    })

    body.append(redCircle);
})



