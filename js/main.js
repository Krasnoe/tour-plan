const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});


document.addEventListener('keyup', function(event){
    console.log('Key: 37', event.key);
    console.log('keyCode: ', event.keyCode);
});