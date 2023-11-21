document.addEventListener('keydown', function(event) {
    const STEP = 10;
    const box = event.currentTarget.body.children.box;
    const x = box.offsetLeft;
    const y = box.offsetTop;
    switch(event.code){
        case 'ArrowUp': {
            // перемістити елемент наверх
            box.style.top = `${y - STEP}px`;
            break
        }
        case 'ArrowDown': {
            // перемістити елемент вниз
            box.style.top = `${y + STEP}px`;
            break;
        }
        case 'ArrowRight': {
            // переміщаємось вправо
            box.style.left = `${x + STEP}px`;
            break;
        }
        case 'ArrowLeft': {
            // переміщаємось вліво
            box.style.left = `${x - STEP}px`;
            break;
        }
    }
})