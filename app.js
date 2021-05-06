const burgerIcon = document.getElementById('burger-icon');
const navList = document.getElementById('nav-list');

burgerIcon.addEventListener('click', () => {
    console.log('hello')
    navList.classList.toggle('none')
})