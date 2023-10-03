const sliderItem = Array.from(document.querySelectorAll('.first-screen__slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
let sliderIndex = 0;
let itemWidth = sliderItem[0].offsetWidth;

function SwipeSlider () {
    if (sliderIndex > dots.length - 1) {
      sliderIndex = 0;
    }
    sliderItem.forEach((el) => el.style.transform = `translate(-${itemWidth * sliderIndex}px)`);
    dots.forEach(e => e.className = 'dot');
    dots[sliderIndex].className = 'dot active';
    sliderIndex ++;
}

setInterval(SwipeSlider, 4000);

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

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener( "click" , dotsSwiper);
}