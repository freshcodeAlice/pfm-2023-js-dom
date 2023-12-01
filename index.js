const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';



/*
Таска: 

1. Зареєструватись на https://home.openweathermap.org/

2. Згенерувати ключ (API key) і зберегти його в коді як константу
3. Дока: https://openweathermap.org/current

4. За відправки форми зробити запит на АПІ з обраним містом.
За результатом запиту відобразити користувачу погоду у вигляді:

Місто: ....
Погода: ...
Температура: ...

*/

// example https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric


const form = document.querySelector('form');

form.addEventListener('submit', formSubmit);


function formSubmit(event){
    event.preventDefault();
    const city = event.target.city.value;
    loadWeatherData(city)
}


async function loadWeatherData(city) {
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=uk`;
    const response = await fetch(requestURL);
    const weatherData = await response.json();
    createWeatherCard(weatherData)
}


function createWeatherCard(weatherObj) {
    const h3 = createElement('h3', undefined, 'Місто: ', weatherObj.name);
    const p = createElement('p', [], 'Погода: ', weatherObj.weather[0].description);
    const tempP = createElement('p', [], 'Температура: ', weatherObj.main.temp);
    const article = createElement('article', [], h3, p, tempP);
    const root = document.querySelector('#root');
    root.replaceChildren(article)
}


function createElement(type, classNames=[], ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}