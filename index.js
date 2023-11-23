//Data-* атрибути 


const btns = document.querySelectorAll('button');

btns[0].addEventListener('click', function(event) {
    console.dir(event.target.dataset.userInfo);
    event.target.dataset.newAttr = 'new value for element'
})