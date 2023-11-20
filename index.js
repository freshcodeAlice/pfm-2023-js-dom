
/*
Три фази події:

1. Фаза занурення - capturing phase
Подія стається на рівні операційної системи, передається браузеру, а він починає передавати від елемента до елемента по ієрархії потоку.

2. Фаза цілі - target phase
Подія досягає найглибше вкладеного за координатами події елемента. Він і є ціллю події (event.target)

3. Фаза всплиття - bubbling phase
Подія "вспливає" нагору від цілі до браузера назад.


По дефолту обробка подій спрацьовує на фазі всплиття.


Третій аргумент методу addEventListener - або об'єкт з властивістю capture
або boolean



*/


/*
Створити структуру:

body -> main -> section -> article

Задати елементам розміри (різні) і різні фонові кольори

1. За натиснення на елемент-дитину (article) вивести його назву на консоль

2. Навісити обробку подій на всі елементи, вивести currentTarget та target у кожному

3. За допомогою керування подією, зупинити передачу події на main

4. (навпаки) - зробити, щоб відпрацював handler на article і не відпрацювали всі інші
*/

//1
const article = document.querySelector('article');
const body = document.body;
const main = document.querySelector('main');
const section = document.querySelector('section');

/*
article.addEventListener('click', function (event) {
    console.log(event.target)
})
*/


//2

/*
function clickHandler(event) {
    console.log('currentTarget:', event.currentTarget);
    console.log('target', event.target);
}


article.addEventListener('click', clickHandler);
section.addEventListener('click', clickHandler);
main.addEventListener('click', clickHandler);

body.addEventListener('click', clickHandler);

*/


//3 
/*
function clickHandler(event) {
    if (event.currentTarget === main) {
        event.stopPropagation();
    }
    console.log('currentTarget:', event.currentTarget);
    console.log('target', event.target);
}


article.addEventListener('click', clickHandler, true);
section.addEventListener('click', clickHandler, true);
main.addEventListener('click', clickHandler, true);

body.addEventListener('click', clickHandler, true);
*/

///4

article.addEventListener('click', clickHandler);
section.addEventListener('click', clickHandler);
main.addEventListener('click', clickHandler);

body.addEventListener('click', clickHandler);

function clickHandler(event) {
    if (event.currentTarget === event.target) {
        event.stopPropagation();
    }
    console.log('currentTarget:', event.currentTarget);
    console.log('target', event.target);
}