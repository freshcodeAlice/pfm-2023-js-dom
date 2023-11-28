/*
Promise - особливий об'єкт, який використовується для асинхронної роботи

Має один з трьох станів:
    - очікування (pending) - в цьому стані він "народжується"
З нього переходить в 
або fullfiled (успішно виконаний) - resolved
або rejected (відхилений, помилка)

Проміс - одноразовий, він змінює стан тільки один раз
*/

const res = fetch('https://randomuser.me/api/'); // синхронно створюється об'єкт Promise

// console.log(res);

res.then(function(){
    console.log('my request was good')
}, function() {
    console.log('my request was bad')
})

/*
setTimeout, setInterval, addEventListener - macrotasks

.then(callback) - microtasks

Коли в стеку задач пусто, EventLoop перевіряє дві черги.
Першими виконуоє (одну за одною) ВСІ micro-tasks, тільки після цього - іде виконуватись одна макротаска.
Після її виконання EventLoop знову перевіряє чергу microtasks, виконує їх (якщо вони є) всі, після цього - наступну macrotask

*/