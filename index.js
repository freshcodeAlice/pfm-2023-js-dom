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


function tick() {
    console.log('tick');
    //// важкі обчислення, які займають час
}

//const res = setTimeout(tick, 5000);
// res - ідентифікатор таймаута, повертається одразу

//clearTimeout(res); // очистка timeout, тобто відміна виконання задачі, відкладеної у часі


//const intervalId = setInterval(tick, 3000);

//clearInterval(intervalId); // очищує інтервал

/*
interval кожні time секунд запускає функцію на виконання. Виконана вона буде тільки після того, як в стеку буде пусто і попередній виклик функцій буде оброблений

*/

// Другий спосіб (аналог інтервалів - рекурсивний setTimeout)

let i = 0;

const id = setTimeout(function tack() {
    tick();
    i++;
   const recId = setTimeout(tack, 3000);
   if(i > 10) {
    clearTimeout(recId);
   }
}, 3000);


// Рекурсивний таймаут не буде враховувати час виконання функції у проміжок часу очікування