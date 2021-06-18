// Swiper

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

const swipersection = new Swiper(".swipersection-container", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
  direction: "vertical",
  loop: false,
});

