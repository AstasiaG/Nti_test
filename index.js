const sliderItem = Array.from(document.querySelectorAll('.first-screen__slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const userMenu = document.querySelector('.user__menu');
const userIcon = document.querySelector('div.user');
const burgerMenu = document.querySelector('.nav__list');
const burgerMenuBtn = document.querySelector('.burger-menu');
const advantagesTitles = document.querySelectorAll('p.advantage__title');
const userName = document.querySelector('.user__name-header');
let windowWidth = document.documentElement.clientWidth;
let sliderIndex = 0;
let itemWidth = sliderItem[0].offsetWidth;
let timer;


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

function MouseEnter () {
  clearTimeout(timer);
  userMenu.classList.remove('d-none');
  userName.style.opacity = '1';
}

function MouseLeave () {
  timer = setTimeout(() => {
    userMenu.classList.add('d-none');
    userName.style.opacity = '0';
  }, 200);
}

userIcon.addEventListener('mouseenter', MouseEnter);
userIcon.addEventListener('mouseleave', MouseLeave);

userMenu.addEventListener('mouseenter', MouseEnter);
userMenu.addEventListener('mouseleave', MouseLeave);

burgerMenuBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('nav__list-active');
  burgerMenu.closest('nav').classList.toggle('active__bg');
  burgerMenuBtn.classList.toggle('burger-active');
})

document.addEventListener('click', (el) => {
  const burgerWind = el.composedPath().includes(burgerMenu);
  const burgerBtn = el.composedPath().includes(burgerMenuBtn);
  console.log(!burgerWind,!burgerBtn)
  if(!burgerWind && !burgerBtn) {
    burgerMenu.classList.remove('nav__list-active');
    burgerMenu.closest('nav').classList.remove('active__bg');
    burgerMenuBtn.classList.remove('burger-active');
  }
});
