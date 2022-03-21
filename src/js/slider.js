import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination]);
const swiperSlider = new Swiper(".exp-slider", {
  loop: false,
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 2,
  speed: 777,
  pagination: {
    el: ".swiper-pagination",
  },
});

export default swiperSlider;
