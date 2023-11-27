const button = document.querySelector('button');

// button.addEventListener('click', function() {
//     console.log('FOREVER LOOP')
//     while(true){}

//     console.log('button clicked')
// });


/*
JS однопоточний - одна задача за один раз

Асинхронний JavaScript
*/


    /// EventLoop - цикл подій - це программа, частина браузера, яка є диспетчером асинхронних процесів

    /*
    до асинхронних задач належать:
        - обробники подій
        - запити на сервер
        - відкладені у часі задачі (timeout, interval)
    */

/*
 setTimeout, setInterval
Задачі, відкладені у часі
*/


/*
setTimeout(fn, time) - приймає посилання на функцію і через вказаний час запускає її на виконання

Час отстрочки - МІНІМАЛЬНИЙ ЧАС, оскільки через цей вказаний проміжок часу задача буде переміщена у чергу коллбеків і буде чекати на виконання, коли стек буде пустим. 
*/


const btn = document.querySelector('button');
btn.addEventListener('click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("timer!");
}, 5000);

console.log("Welcome to loupe.");

for(let i=0; i< 1000000000; i++){
    
}

console.log('hard loop end');