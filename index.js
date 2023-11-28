/*
Promise - особливий об'єкт, який використовується для асинхронної роботи

Має один з трьох станів:
    - очікування (pending) - в цьому стані він "народжується"
З нього переходить в 
або fullfiled (успішно виконаний) - resolved
або rejected (відхилений, помилка)

Окрім статуса, проміс несе в собі дані

Проміс - одноразовий, він змінює стан тільки один раз
*/

/*
const res = fetch('https://randomuser.me/api/'); // синхронно створюється об'єкт Promise

// console.log(res);

res
.then(function(data){
    console.log('my request was good');
    return 5;
}, function(error) {
    console.log('my request was bad');
    console.log(error);
})
.then(function(promiseData){
    console.log(promiseData)
}, function(){

})
*/

/*
setTimeout, setInterval, addEventListener - macrotasks

.then(callback) - microtasks

Коли в стеку задач пусто, EventLoop перевіряє дві черги.
Першими виконуоє (одну за одною) ВСІ micro-tasks, тільки після цього - іде виконуватись одна макротаска.
Після її виконання EventLoop знову перевіряє чергу microtasks, виконує їх (якщо вони є) всі, після цього - наступну macrotask

*/

const myfirstPromise = new Promise(executor);  // Error: Promise need an executor function

function executor(resolve, reject){
    const superImportantData = 'hello world';
//    resolve(superImportantData); // --> мій проміс успішно завершився, тепер він має статус fullfiled, виконається перший коллбек then-a

//    reject('Oooops'); // -> мій проміс отримав статус rejected і виконається другий коллбек then-а
}

//console.log(myfirstPromise);

/*
myfirstPromise.then(function(data) {
    console.log('MY PROMISE OK');
    console.log(`PROMISE DATA is: ${data}`);
}, function(error){
    console.log('MY PROMISE NOT OK');
    console.log('error message', error);
});
*/

/*
Створити свій власний проміс, який на основі рандому в половині випадків буде успішний, в половині - відхилений
і навісити обробку проміса, яка виводить на консоль результат роботи (або успішність, або неуспішність)

*/

setTimeout(()=>{
    console.log('timer!')
},0);

setTimeout(()=>{
    console.log('second timer')
},0);

const promise = new Promise(function(res, rej){
    res('promise ok')
});

promise.then(function(promiseValue){
    console.log(promiseValue);
    return 'second promise'; // then -> new Promise()
}).then(function(data){
    console.log(data);
    return 'third promise'; // then -> new Promise()
}).then(function(anotherData){
    console.log(anotherData);
})

/*
Коли інтерпретатор коду зустрічає створення проміса, він його створює зі статусом pending і намагається виконати функцію-executor



Promise handling (then callback) - microtask. Вони виконуються (всі!) першими, тільки після того - одна макро-таска
*/