/* ===== preloader ===== */
// var loader = document.querySelector(".preloader");
// window.addEventListener("load", vanish);

// function vanish() {
//   loader.classList.add("disppear");
// }

/* ===== all rooms slider ===== */
var swiper = new Swiper(".rooms-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== guests section testimonials slider ===== */
var swiper = new Swiper(".guests-testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== dining page food menu item slider ===== */
var swiper = new Swiper(".food-manu-item-slider-wrapper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== dining page culinary team slider ===== */
var swiper = new Swiper(".culinary-team-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== weddings page food menu item slider ===== */
var swiper = new Swiper(".weddings-food-manu-item-slider-wrapper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== weddings page gallery slider ===== */
var swiper = new Swiper(".weddings-gallery-slider-wrapper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== events page gallery slider ===== */
var swiper = new Swiper(".events-gallery-slider-wrapper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== weddings page brides testimonials slider ===== */
var swiper = new Swiper(".brides-testimonials-slider-wrapper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

/* ===== gallery page hero slider ===== */
var swiper = new Swiper(".gallery-hero-slider-wrapper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 2000,
  grabCursor: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: '.swiper-slider-pagination',
    type: 'fraction',
  },
});

/* ===== Sscroll back top top bt ===== */
var mybutton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
