document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('[data-swiper="sliderAbout"]')) {
    document.querySelectorAll('[data-swiper="sliderAbout"]').forEach((swiperEl) => {
        new Swiper(swiperEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            updateOnWindowResize: true,
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            },
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            },
            pagination: {
              el: swiperEl.querySelector('.swiper-pagination'),
              clickable: true,
            },
        });
    });
  }

  if (document.querySelector('[data-swiper="sliderHow"]')) {
    document.querySelectorAll('[data-swiper="sliderHow"]').forEach((swiperEl) => {
        new Swiper(swiperEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            updateOnWindowResize: true,
            breakpoints: {
                767: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            },
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            },
            pagination: {
              el: swiperEl.querySelector('.swiper-pagination'),
              clickable: true,
            },
        });
    });
  }
});
