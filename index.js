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
}

const res = setTimeout(tick, 5000);
// res - ідентифікатор таймаута, повертається одразу

clearTimeout(res); // очистка timeout, тобто відміна виконання задачі, відкладеної у часі

