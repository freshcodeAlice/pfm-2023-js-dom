/*
Задача 1:
Отримати 10 юзерів
Динамічно створити карточки юзерів

Дизайн довільний, в карточці має бути відображено:
ім'я, прізвище
мейл
пароль
телефон
адреса: місто, вулиця, номер будинку

Задача 2:
За натиснення на карту юзера в шапці сторінки відображати в списку імен ім'я виділеного юзера.
Всі імена виділених юзерів зберігати в масиві (або іншій колекції)
Кожна карта виділеного юзера отримує "підсвітку" - червоний бордер

Задача 3:
реалізувати видалення імен з списку виділених юзерів. При цьому підсвітка з картки має пропасти.

*/


const API_BASE = 'https://fakestoreapi.com';

const selectedUsers = new Map();

fetch(`${API_BASE}/users`)  /* fetch повертає проміс, який, після відповіді з сервера зарезолвиться з даними відповіді (Response) */
.then((response) => {
    return response.json();  // метод then повертає проміс, але якщо зсередини коллбека повертається теж проміс, то проміс в проміс не огортається, повертається тільки той, що є результатом роботи коллбека
})
.then((data) =>{
    // вже доступні 10 юзерів
    console.log(data);
    mapCards(data)
})

function mapCards(userArray) {
    const cardArray = userArray.map(user => createUserCard(user));
    const main = document.querySelector('main');
    main.append(...cardArray)
}


function createUserCard(userObj) {
  const {email, id, name: {firstname, lastname}, password, phone, address: {city, street, number}} = userObj;
    const divImg = createElement('div', ['user-img']);
    const nameElem = createElement('h3', ['name'], firstname, ' ', lastname);
    const mailElem = createElement('p', ['mail'], 'email: ', email);
    const phoneElem = createElement('p', ['phone'], 'phone: ', phone);
    const addressElem = createElement('p', ['address'], 'address: ', city, street, number);
        
    const article = createElement('article', ['card'], divImg, nameElem, mailElem, phoneElem, addressElem);
    article.dataset.id = id;
    article.addEventListener('click', cardHandler, true);

    return article;
}

function createElement(type, classNames = [], ...children){
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);

    return elem;
}


function cardHandler(event) {
    event.stopPropagation();
    const card = event.currentTarget;
    card.classList.add('highlight');
    const id = card.dataset.id; // string
    const name = card.querySelector('.name').textContent;
//    selectedUsers.push(name.textContent);
    selectedUsers.set(id, name); // id is string!

    updateListView(selectedUsers);
}


function updateListView(selectedUsers){
    let ul = document.querySelector('header ul')
    if (!ul) {
        ul = createElement('ul');
        const header = document.querySelector('header');
        header.append(ul)
    }
//    const list = selectedUsers.map(user => createElement('li', undefined, user));
    const mapToArray = [...selectedUsers.entries()]
    const list = mapToArray.map(([id, username]) => {
        const btnDelete = createElement('button', undefined, 'X');
        btnDelete.addEventListener('click', deleteButtonHandler);
        const li = createElement('li', undefined, username, btnDelete);
        li.dataset.key = id;
        return li;
    });
    ul.replaceChildren(...list);
}

function deleteButtonHandler(event){
    // треба прибрати цю людину з Map
    // треба зняти підсвітку з картки цього юзера
   const li = event.target.parentElement;
    const id = li.dataset.key; // string
    selectedUsers.delete(id);
    updateListView(selectedUsers);
    const article = document.querySelector(`[data-id="${id}"]`);
    article.classList.remove('highlight');
}

