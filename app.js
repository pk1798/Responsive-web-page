const burgerIcon = document.getElementById('burger-icon');
const navList = document.getElementById('nav-list');

burgerIcon.addEventListener('click', () => {
    navList.classList.toggle('hide-none')
})