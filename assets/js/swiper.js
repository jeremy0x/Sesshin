// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});
