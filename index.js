const body = document.body;

const section = document.querySelector('section');
const article = document.querySelector('article');
const div = document.querySelector('#box');


function handler(event) {
    console.log('--------------')
    console.log('currentTarget:', event.currentTarget);
    console.log('target:', event.target);
  
  
}

body.addEventListener('click', handler);

section.addEventListener('click', handler);

article.addEventListener('click', handler);

div.addEventListener('click', handler);


/*
function clicker(event) {
    if(event.target === event.currentTarget) {
    console.log('ви натиснули на секцію');
    } else {
        console.log('ви натиснули на дів');
    }
}


section.addEventListener('click', clicker)
*/


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


