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