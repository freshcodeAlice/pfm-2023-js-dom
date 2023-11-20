
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
Таска:

за натиснення на div - збільшувати рахунок і виводити його в article

за натиснення на батьківський section -  зменшувати рахунок


Зробити це одним обробником події


*/


const section = document.querySelector('section');
const article = document.querySelector('article');




class Game {
    constructor(scoreElement) {
       this.count = 0;
        this.scoreElement = scoreElement
    }

    get count() {
        return this._count
    }

    set count(v) {
        this._count = v;
    }

    increment() {
        ++this.count;
        this.rerender();
        return this.count;
    }

    decrement() {
        --this.count;
        this.rerender();
        return this.count;
    }
    
    rerender(){
        this.scoreElement.textContent = this.count;
    }
}


section.addEventListener('click', handler);
const game = new Game(article);

function handler(event) {
    if(event.target === event.currentTarget) {
        game.decrement(); 
    } else {
        game.increment();
    }
}
