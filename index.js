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


/*
Створення елементів:

1. Створити об'єкт потрібного елемента
2. Вказати батьківському елементу, що цей стане його дитиною
    Для цього потрібно мати доступ до елемента (батька), який вже є на сторінці

*/

const element = document.createElement('p');  // створюється HTMLParagraphElement

element.textContent = 'PARAGRAPH element';
element.style.color = 'violet';

const section = document.querySelector('section'); // витягти посилання існуючого на сторінці елементу

section.append(element);