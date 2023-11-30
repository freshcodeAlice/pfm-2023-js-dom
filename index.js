const API_BASE = 'https://fakestoreapi.com'

fetch(`${API_BASE}/users`)


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