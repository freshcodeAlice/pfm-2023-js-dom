const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.side-menu');

// За натиснення на іконку гамбургера, змінювати стан бічного меню. Іконка має його закривати

menuContainer.addEventListener('click', function(event) {
    event.stopPropagation();
    event.currentTarget.classList.toggle('change');
    menu.classList.toggle('show');
}, true);