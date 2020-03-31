const hamburgerIco = document.querySelector('.navigation__hamburger-ico');

const hamburgerClick = () => {
    hamburgerIco.classList.toggle('navigation__hamburger-ico--active');
}

hamburgerIco.addEventListener('click', hamburgerClick);