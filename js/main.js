//Hamburger menu 

const hamburgerIco = document.querySelector('.navigation__hamburger-ico');
const menu = document.querySelector('.navigation__list');

const hamburgerActive = () => {
    hamburgerIco.classList.toggle('navigation__hamburger-ico--active');
    menuActive();
}

const menuActive = () => {
    menu.classList.toggle('navigation__list--active');
}

hamburgerIco.addEventListener('click', hamburgerActive);

//Hamburger Menu End

//Rotate btn
const emailBtn = document.querySelector('.contact__button');
const emailIco = document.querySelector('.contact__button svg ');

emailBtn.addEventListener('click', () => {

    emailIco.style.transition = "2s";
    emailIco.style.transform = "rotate(270deg) scale(0.8)";
    // emailBtn.style.transition = "border-bottom 2s";
    // emailBtn.style.border = "none";
    emailBtn.classList.add('rotate');
})

//Rotate btn ends

// Menu shop-chart

const menuUl = document.querySelector('.menu__main-list');
const insideMenu = document.querySelector('.inside-menu');

menuUl.addEventListener('click', () => {
    menuUl.classList.toggle('open');
    insideMenu.classList.toggle('open');
})

const menuLinks = document.querySelectorAll('.inside-menu li')

menuLinks.forEach((item) => {
    item.addEventListener('click', () => {
        let selection = item.textContent;
        let dataValue = item.getAttribute('data-value');
        console.log(selection)
        document.querySelector('.main-list__main-li span').textContent = selection;
    })
})

//Menu shop-chart

const chartButtons = [...document.querySelectorAll('.shop-chart__button')]

let id;

chartButtons.forEach(item => {

    item.addEventListener('click', () => {
        item.style.border = 'none';
        item.style.transform = 'translateY(8px)';
        id = window.setTimeout(() => {
            item.style.transform = 'translateY(0px)';
            item.style.borderBottom = '6px solid #DD6B44'
        }, 1000)
    })

    console.log(id);



    item.addEventListener('mousedown', () => {
        item.classList.add('cliced');
        window.clearTimeout(id);
    })
    item.addEventListener('mouseup', () => {
        window.clearTimeout(id);
        item.classList.remove('cliced');
    })




})