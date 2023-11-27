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


button.addEventListener('click', function() {
        
         console.log('button clicked')
    });
    

    console.log('Javascript working');

    /// EventLoop - цикл подій - це программа, частина браузера, яка є диспетчером асинхронних процесів

    /*
    до асинхронних задач належать:
        - обробники подій
        - запити на сервер
        - відкладені у часі задачі (timeout, interval)
    */