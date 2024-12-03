const btn = document.querySelectorAll('.menu-btn');
const sideBar = document.querySelector('#side-drawer');

btn.forEach((e) => {
    e.addEventListener('click', () => {
        sideBar.classList.toggle('add')
        console.log('Method invoked')
    })
})