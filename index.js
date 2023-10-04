const sliderItem = Array.from(document.querySelectorAll('.first-screen__slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const userMenu = document.querySelector('.user__menu');
const userIcon = document.querySelector('div.user');
const burgerMenu = document.querySelector('.nav__list');
const burgerMenuBtn = document.querySelector('.burger-menu');
const advantagesTitles = document.querySelectorAll('p.advantage__title');
let windowWidth = document.documentElement.clientWidth;
let sliderIndex = 0;
let itemWidth = sliderItem[0].offsetWidth;


window.addEventListener("resize", ChangeAdvantText);

function ChangeAdvantText () {
  if(windowWidth < 500) {
    advantagesTitles[0].innerHTML = 'У нас самые выгодные<br>и низкие цены';
    advantagesTitles[3].innerHTML = 'Мы являемся официальным партнером DELL';
    advantagesTitles[3].nextElementSibling.innerHTML = 'Мы лучший официальный поставщик продукции DELL в России<br>и странах СНГ';
  } 
  if(windowWidth > 500) {
    advantagesTitles[0].innerHTML = 'Самые выгодные и низкие цены';
    advantagesTitles[3].innerHTML = 'Официальный партнер DELL';
    advantagesTitles[3].nextElementSibling.innerHTML = 'Официальный поставщик продукции DELL в России и странах СНГ';
  }
}

function SwipeSlider () {
    if (sliderIndex > dots.length - 1) {
      sliderIndex = 0;
    }
    sliderItem.forEach((el) => el.style.transform = `translate(-${itemWidth * sliderIndex}px)`);
    dots.forEach(e => e.className = 'dot');
    dots[sliderIndex].className = 'dot active';
    sliderIndex ++;
}

function dotsSwiper() {
  if(this.className.includes('active')) {
    return;
  } else {
    dots.forEach(e => e.className = 'dot');
    this.className = 'dot active';

    let i = dots.findIndex((e) => e.className.includes('active'));
    if (i > dots.length) {
      i = 0;
    }
    sliderItem.forEach((el) => el.style.transform = `translate(-${itemWidth * i}px)`);
  }
}

setInterval(SwipeSlider, 4000);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener( "click" , dotsSwiper);
}

userIcon.addEventListener('click', () => {
  userMenu.classList.toggle('d-none');

  burgerMenu.classList.remove('nav__list-active');
  burgerMenu.closest('nav').classList.remove('active__bg');
  burgerMenuBtn.classList.remove('burger-active');
})

burgerMenuBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('nav__list-active');
  burgerMenu.closest('nav').classList.toggle('active__bg');
  burgerMenuBtn.classList.toggle('burger-active');
  userMenu.classList.add('d-none');
})

document.addEventListener('click', (el) => {
  const burgerWind = el.composedPath().includes(burgerMenu);
  const userWind = el.composedPath().includes(userMenu);
  if(!burgerWind && !burgerMenuBtn) {
    burgerMenu.classList.remove('nav__list-active');
    burgerMenu.closest('nav').classList.remove('active__bg');
    burgerMenuBtn.classList.remove('burger-active');
  }
  if (!userWind && !userIcon) {
    userMenu.classList.add('d-none');
  }
})