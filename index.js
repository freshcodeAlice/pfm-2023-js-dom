setTimeout(() => {
    console.log('DONE AFTER ALL SYNC WORK');
    anotherAfterWork();
}, 0)


function syn1(fn, fn1) {
    console.log('first sync work');
    // syn2()
    fn(fn1);
}

function syn2(fn1) {
    console.log('second sync work');
    // syn3()
    fn1();
}

function syn3() {
    console.log('third sync work');
}

syn1(syn2, syn3);



function anotherAfterWork() {
    console.log('after async');
}


setTimeout(function() {   /* micro-callback-hell */
    console.log(1);
    setTimeout(()=> {
        console.log(2);
        setTimeout(()=>{
            console.log(3);
            setTimeout(()=>{
                console.log(4);
            },0)
        },0)
    },0)
},0)

/*
Promise - особливий об'єкт, який використовується для асинхронної роботи

Має один з трьох станів:
    - очікування (pending) - в цьому стані він "народжується"
З нього переходить в 
або fullfiled (успішно виконаний) - resolved
або rejected (відхилений, помилка)

Проміс - одноразовий, він змінює стан тільки один раз
*/