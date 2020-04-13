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

const cardButtonChange = function () {

    const chartButtons = [...document.querySelectorAll('.shop-chart__button')]
    let id;

    chartButtons.forEach(item => {

        item.addEventListener('click', () => {
            let innerWidth = window.innerWidth;
            if (innerWidth < 1024) {
                item.style.border = 'none';
                item.style.transform = 'translateY(8px)';
                id = window.setTimeout(() => {
                    item.style.transform = 'translateY(0px)';
                    item.style.borderBottom = '6px solid #DD6B44'
                }, 1000)
            }
        })


        item.addEventListener('mousedown', () => {
            item.classList.add('cliced');
            window.clearTimeout(id);
        })
        item.addEventListener('mouseup', () => {
            window.clearTimeout(id);
            item.classList.remove('cliced');
        })

    })

}

cardButtonChange();


//Click Events To Buttons End's

//Adding nw chart to gallery

const cardHtml = `

<div class="photo">
    <img class="shop-chart__photo" src="https://picsum.photos/200/300" alt="">
</div>
<div class="shop-chart__pricing">
    <p class="dress-name">Mimosa Lace Dress</p>
    <p class="dress-price">$76.95</p>
    <button class="shop-chart__button">Add to chart <svg xmlns="http://www.w3.org/2000/svg"
            width="37" height="37" viewBox="0 0 37 37">
            <path id="Rectangle_23_copy" data-name="Rectangle 23 copy"
                d="M571.06,696V682.94H558V672.06h13.06V659h10.88v13.06H595v10.88H581.94V696Z"
                transform="translate(-558 -659)" fill="#fff" />
        </svg></button>
</div>

`;

const loadButton = document.querySelector('.gallery__more');
const gallery = document.querySelector('.shop-chart__gallery');

loadButton.addEventListener('click', () => {
    console.log('kutsa')
    const newCard = document.createElement('div');
    newCard.classList.add('shop-chart__item');
    newCard.innerHTML = cardHtml;
    const newCard_2 = document.createElement('div');
    newCard_2.classList.add('shop-chart__item');
    newCard_2.innerHTML = cardHtml;
    gallery.append(newCard);
    gallery.append(newCard_2);
    cardButtonChange();
})

//