/*=== add and remove menu mobile ================*/
const menu = document.querySelector('.menu')
const btnOpen = document.querySelector('.open')
const btnClose = document.querySelector('.close')

btnOpen.addEventListener('click', () => {   
    btnOpen.classList.remove('show-button')

    btnClose.classList.add('show-button')
    menu.classList.add('show-menu')
})

btnClose.addEventListener('click', () => {
    btnOpen.classList.add('show-button')
    
    btnClose.classList.remove('show-button')
    menu.classList.remove('show-menu')
})

/*=== close the menu when clicking on links ================*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', () => {
        menu.classList.remove('show-menu')

        btnClose.classList.remove('show-button')
        btnOpen.classList.add('show-button')
    })
}

const checkbox = document.querySelector('#checkbox')
const body = document.querySelector('body')

checkbox.addEventListener('change', () => {
    body.classList.toggle('light');
})