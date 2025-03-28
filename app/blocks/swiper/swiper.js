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

  if (document.querySelector('[data-swiper="sliderCases"]')) {
    document.querySelectorAll('[data-swiper="sliderCases"]').forEach((swiperEl) => {
        new Swiper(swiperEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            updateOnWindowResize: true,
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            },
        });
    });
  }

  if (document.querySelector('[data-swiper="sliderWhoIs"]')) {
    document.querySelectorAll('[data-swiper="sliderWhoIs"]').forEach((swiperEl) => {

        const paginationTexts = [];
        swiperEl.querySelectorAll('.swiper-slide').forEach(slide => {
            const textElement = slide.querySelector('.card-who-is__pagination-text');
            paginationTexts.push(textElement ? textElement.textContent.trim() : '');
        });

        new Swiper(swiperEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            // effect: 'fade',
            // fadeEffect: { crossFade: true },
            updateOnWindowResize: true,
            pagination: {
                el: swiperEl.querySelector('.swiper-pagination'),
                clickable: true,
                renderBullet: function (index, className) {
                    const text = paginationTexts[index] || (index + 1);
                    return `<span class="${className}">${text}</span>`;
                },
            },
        });
    });
  }
});
