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