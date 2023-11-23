//Data-* атрибути 

// За натиснення на кнопку фоновий колір кнопки має стати таким, як написано у атрибуті data-color

const btns = document.querySelectorAll('button');


btns.forEach(btn => {
    btn.addEventListener('click', function({target}){
        target.style.backgroundColor = target.dataset.color;
    })
})