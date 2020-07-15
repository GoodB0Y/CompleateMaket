const initSwiperFunction = () =>{
let swipers = [];
const mobileLimit = 767;

const mobile = window.matchMedia(`(max-width: ${mobileLimit}px)`);
const tablet = window.matchMedia(`(min-width: ${mobileLimit+1}px)`);

const mySliders = document.querySelectorAll('.swiper-container');

function initSwiper() {
  mySliders.forEach(el => {
    const swiper = new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
            320: {
                width: 240,
                spaceBetween: 16
            },
            768: {
                width: 241
            }
          },
      });
    swipers.push(swiper);
  });
}

function checkSwiperMedia() {
  if (mobile.matches && swipers.length == false) {
    swipers = [];
    initSwiper();
  }

  if (tablet.matches && swipers.length) {
    swipers.forEach(swiper => swiper.destroy());
    swipers = [];
  }
}

window.addEventListener('load', checkSwiperMedia);
window.addEventListener('resize', checkSwiperMedia);
}
export default initSwiperFunction;