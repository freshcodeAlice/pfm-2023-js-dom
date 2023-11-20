
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



const showBtn = document.querySelector('#show-modal');
const closeBtn = document.querySelector('#close-modal');

const section = document.querySelector('.background');
const modal = document.querySelector('.modal-window');


function showModal() {
   
    section.style.display = 'flex';
    modal.style.display = 'block';
}

function closeModal() {
    section.style.display = 'none';
    modal.style.display = 'none';
}


showBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
section.addEventListener('click', closeHandler, true);

/*
function closeHandler(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

*/


function closeHandler(event) {
    if(event.target === event.currentTarget) {
        event.stopPropagation();
        closeModal();
    }
}