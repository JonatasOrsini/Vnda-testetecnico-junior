// Swiper

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
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
