const btn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('#side-drawer');

btn.addEventListener('click', () => {
    sideBar.classList.toggle('add')
})