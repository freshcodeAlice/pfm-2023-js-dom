/*
Написати код, який за натиснення на кнопку створює і відображає червоний круг 80х80px

За натиснення на червоний кружочок він має стати зеленим квадратиком

*/

const btn = document.querySelector('#btn');

const body = document.body;

btn.addEventListener('click', function() {
    const redCircle = document.createElement('div');
    redCircle.className = 'red-circle';


    redCircle.addEventListener('click', function (event) {
//        event.target.className = 'green-square';

    const cl = event.target.classList;
    cl.toggle('green-square');
    console.log(event.target.classList)
    })

    body.append(redCircle);
})



