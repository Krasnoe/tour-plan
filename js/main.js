$(document).ready(function () {
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

var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
})

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');
  var closeModalOverlay = $('.modal__overlay');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  closeModalOverlay.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

});
