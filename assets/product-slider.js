document.addEventListener('DOMContentLoaded', () => {
  const swiperThumbs = new Swiper('.product-thumbs', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 8,
    watchSlidesProgress: true,
  });

  const swiperMain = new Swiper('.product-swiper', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });
});