// DOM

/*
Document
Object
Model

(Об'єктна модель документа) - це представлення документу як набору елементів-об'єктів, інтерфейс для взаємодії з документом.

Вхідна точка DOM - document

*/

/*
Два важливих принципи:

1. Все, що нас оточує - це об'єкти.
Об'єкт змінюється за посиланням (і передається теж), вплив на об'єкт змінює той елемент, який цим об'єктом представлений.
У об'єктів є властивості та методи.
Об'єкти можуть ділитися властивостями та методами зі своїми нащадками за допомогою прототипного наслідування


*/

document.querySelector('будь-який валідний css-селектор, включно з комбінаторами та псевдокласами ')

const secondPars = document.querySelectorAll('section article:nth-child(2n)');

for (const elem of secondPars) {
    elem.style.color = 'red';
}