
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






/*
За натиснення в батьківському елементі в article замість лічильника вивести координати натиснення

X: 64
Y: 25

*/


/*
 За натиснення на батьківський перемістити div за місцем кліка

*/
const game = new Game(article);

section.addEventListener('click', function(event){


    if(event.target === event.currentTarget) {
        game.decrement(); 
    } else {
        game.increment();
    }

        const div = event.currentTarget.children.box;
        const x = getRandomCoordinates(0, event.currentTarget.offsetWidth - (div.offsetWidth / 2));
        const y = getRandomCoordinates(0, event.currentTarget.offsetHeight - (div.offsetHeight / 2));


        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
    
   
});




/*
section.addEventListener('click', handler);
const game = new Game(article);

function handler(event) {
    if(event.target === event.currentTarget) {
        game.decrement(); 
    } else {
        game.increment();
    }
}
*/


function getRandomCoordinates(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Елемент рандомно переміщується в межах батьківського елемента, користувач має на нього натиснути, елемент знову переміщується

*/