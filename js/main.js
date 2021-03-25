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

  const modalOverlay = $('.modal__overlay');
  const modalDialog = $('.modal__dialog');
  const modalButton = $('[data-toggle="modal"]');
  const closeModalButton = $('.modal__close');
  const closeModalOverlay = $('.modal__overlay');
  
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  closeModalOverlay.on('click', closeModal);

  function openModal() {
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closeModal(event);
  };
});

  // Обработка форм
  $(".modal__form").validate({
    errorClass: "form-1",
    messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be at least 2 letters long",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Еmail must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone number required",
    },
  }
  });

  $(".newsletter__subscribe").validate({
    errorClass: "form-2",
    messages: {
    email: {
      required: "We need your email address to contact you",
      email: "Еmail must be in the format of name@domain.com"
    },
  }
  });
  
  $(".footer__form").validate({
    errorClass: "form-3",
    messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be at least 2 letters long",
    },
    phone: {
      required: "Phone number required",
    },
  }
  });

$(".phone").mask("+7(999)999-9999");

  AOS.init();
});
