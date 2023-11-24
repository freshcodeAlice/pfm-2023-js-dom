/*
TodoList - Список справ

+За введення в форму та натиснення на кнопку під формою має з'явитись новий пункт списку

ТЗ:
+1. Не створювати новий пункт списку, якщо в інпуті пусто
+2. Кожна лі-шка має кнопку самоліквідації. За натиснення цей пункт списку видаляється.

+3. Всі пункти списку мають зберігатись в певній колекції.


*/


const form = document.querySelector('.todo-form');
const list = document.querySelector('.todo-list');

let todoArray = [];
let counter = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const {todo: {value: todoText}} = event.target;
    if (todoText){
        todoArray.push({
            text: todoText,
            id: counter++
        });
    }
    updateView(todoArray);
});



function updateView(todoArray) {
    const liArray = todoArray.map(todoObj => {
        const li = document.createElement('li');
        li.append(todoObj.text);
        li.dataset.id = todoObj.id;
        const button = document.createElement('button');
        button.textContent = 'X';
        button.addEventListener('click', deleteButtonHandler)
        li.append(button);
        return li;
    });
    list.replaceChildren(...liArray);
}


function deleteButtonHandler(event) {
  const parentLi = event.target.parentElement;
  todoArray = todoArray.filter(elem => elem.id !== Number(parentLi.dataset.id));
  updateView(todoArray);
}