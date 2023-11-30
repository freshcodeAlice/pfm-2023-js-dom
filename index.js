setTimeout(()=>{
//    console.log('tick')
}, 1000);


delay(3000).then(()=>{
//    console.log('проміс відкладений у часі')
})

function delay(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms)
    })
}

const promise = delay(2000);
promise.then(function(){
//    console.log('tick-tack!')
})


/// 


const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('button click!');
})

const imagePath = 'https://d19h8kn98xvxar.cloudfront.net/images/_hero/connectwithnature.jpg';

const invalidPath = 'http://82743k2jhk234mnsdfkjhs';

/*
function loadImage(src){
    const img = document.createElement('img');

    img.setAttribute('src', src);

    img.addEventListener('load', function(){
        // ось це виконується тоді, коли ВСЯ каринка вже завантажилась
        document.body.append(img);
    });

    img.addEventListener('error', function(){
        console.log('oops!')
    })

    return img

}

loadImage(imagePath)
console.log('пішла вантажитись')

*/


function loadImage(src){
    const img = document.createElement('img');

    img.setAttribute('src', src);

    return new Promise((resolve, reject) =>{
        img.addEventListener('load', () => {
            resolve(img)
        });

        img.addEventListener('error', () => {
            reject(img)
        })
    })

}


loadImage(imagePath)
.then((img) => {
    document.body.append(img)
})
.catch((img) => {
    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    document.body.append(placeholder)
})