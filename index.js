/*

Таска:
при відкритті сторінки
відобразити карточку кожного кота

Порада: створити спочатку верстку 1 картки, прописати стилі, потім закоментувати верстку і створювати всі ті самі елементи динамічно

 <article class="card">
      <img src="" class="img"/>
      <h2 class="name">catname</h2>
      <p class="age">Age: 5</p>
    </article> 

 */

    const root = document.querySelector('#root');

const htmlCardArray = data.map((catObj) => {
    // const img = document.createElement('img');
    // img.setAttribute('src', catObj.userPic);
    // img.classList.add('img');
    const img = createElement('img', ['img']);
    img.setAttribute('src', catObj.userPic);

    // const h2 = document.createElement('h2');
    // h2.append(catObj.username);
    // h2.classList.add('name');
    const h2 = createElement('p', ['name'], [catObj.username]);

    // const p = document.createElement('p');
    // p.append(catObj.age);
    // p.classList.add('age');
    const p = createElement('p', ['age'], [catObj.age])


    // const article = document.createElement('article');
    // article.classList.add('card');
    // article.append(img, h2, p);

    // return article;

    return createElement('article', ['card'], [img, h2, p]);
})

console.log(htmlCardArray)

root.append(...htmlCardArray);


function createElement(type, classNames = [], children = []) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

/*
Якщо б нам потрібно було в цій функції встановлювати елементу не тільки класи, але й інші атрибути
(properties - props)

{
    src: '',
    classNames: [],
    checked: true,
} - по цьому об'єкту можна пройтись циклом і встановити потрібні атрибути елементу

*/