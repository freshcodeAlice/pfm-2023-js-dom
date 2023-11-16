// DOM

/*
Document
Object
Model

(Об'єктна модель документа) - це представлення документу як набору елементів-об'єктів, інтерфейс для взаємодії з документом.

Вхідна точка DOM - document

*/

console.log(1);

const p = document.getElementById('super-par');
console.log(p);
p.style="color: green";


const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs)  /// HTMLCollection - псевдо-масив (ітерована колекція, яка не є екземпляром Array)

for (const element of paragraphs) {
    element.style = 'color: violet';
}


const array = [...paragraphs]; // перетворюємо її на звичайний масив, що дає нам можливість використовувати методи масива



const redClassP = document.getElementsByClassName('red-text');

console.log(redClassP);

/*
Два важливих принципи:

1. Все, що нас оточує - це об'єкти.
Об'єкт змінюється за посиланням (і передається теж), вплив на об'єкт змінює той елемент, який цим об'єктом представлений.
У об'єктів є властивості та методи.
Об'єкти можуть ділитися властивостями та методами зі своїми нащадками за допомогою прототипного наслідування


*/


/* Створити на сторінці article і всередині нього 5 p з текстом.
1. Динамічно пофарбувати текст у червоний колір
2. Видалити останній параграф

*/


paragraphs[paragraphs.length - 1].remove();