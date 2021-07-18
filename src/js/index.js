// Swiper hero
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper horizontal produtos
const swiperprodutos = new Swiper(".swiper-produtos-container", {
  direction: "vertical",
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper horizontal instagram
const swiperinsta = new Swiper(".swiper-insta-container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  freemode: true,
  freeModeMinimumVelocity: 1,
  freeModeMomentum: true,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 3,
  freeModeMomentumRatio: 4,
  //Release distance
  freeModeMomentumVelocityRatio: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
