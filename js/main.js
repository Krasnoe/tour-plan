const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

type="text/javascript">
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [7.573638, 79.803867],
      zoom: 7
  });
}

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

$('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg', speed:"0.4" });

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document.querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom--visible");
})