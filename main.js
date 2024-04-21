import Menu from "./public/js/Menu/Menu";
import Products from "./public/js/Products/Products";
import Slider from "./public/js/Slider/Slider";

async function allData() {
  await Menu();
  await Slider();
  await Products();
  initSlider();
}
allData();
function initSlider() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
