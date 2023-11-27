/* JSON - JavaScript Object Notation */


const obj = {
    firstName: 'John',
    lastName: 'Lennon',
    age: 25,
    email: 'john@beatles.com',
    isMale: true,
    isAgreeWithRules: undefined,
    sayHello: function() {},
    [Symbol()]: 'symbol value',
    phones: [4392874928734, 987497324],
    friends: {
        name: 'Jane',
        lastName: 'Doe'
    },
    isSelected: null
}

console.log(obj);

/*
JSON - формат, який дозволяє перетворювати js-об'єкти у текстові дані

Процес перетворення об'єкту в текст (в JSON) називається серіалізація

У форматі JSON доступні:
- об'єкти
- масиви
- змінні:
    - string (в подвійних лапках)
    - number
    - boolean
    - null

У форматі JSON не має бути висячої коми

*/

const str = JSON.stringify(obj); // серіалізація

const invalidStr = "firstName: 'John'";


/// Зворотній процес: десеріалізація

JSON.parse(str); // отримуємо валідний JSON, перетворюємо його в js-об'єкт

//JSON.parse(invalidStr); // SyntaxError

console.log(str);