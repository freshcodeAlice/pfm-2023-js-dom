/// Async/await


/*
prom
.then((promiveValue) => {
    console.log(promiveValue)
})
.catch((error) => {
    console.log(error);
})
*/
    async function getSomeAsyncWork() {

        const prom = new Promise(function(res, rej) {  /// при створенні проміс має статус pending 
            const data = 'promise error'
            rej(data);
        })
        console.log('отут робимо щось синхронно')
        try {
            const value = await prom; // дочікується, коли проміс змінить статус на fullfiled/rejected і повертає дані проміса

            //!! - якщо проміс було відхилено (rejected) або в ньому сталася помилка - вона викидається неспійманою!
            
                    /// щось робимо з тим value, яке лежало в промісі
                    console.log(value);
        } catch(error) {
            console.log(error);
        }

        console.log('MY WORK ISNT DONE')
    }

    /*
    інтерпретатор бачить async function. Заходить і починає виконувати синхронно все до await
    Побачивши await, весь невиконаний код відкладається як мікро-таска, поки await не дочекається, що проміс змінив статус. Await дочікується і повертає як результат роботи дані проміса.
    Вся функція далі виконується до кінця

    */

    const URL = 'https://fakestoreapi.com/users';

  
    async function getLoadData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch(error) {
            console.log('ooops');
        }


    }

getLoadData(URL);