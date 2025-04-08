document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('[data-swiper="sliderAbout"]')) {
    document.querySelectorAll('[data-swiper="sliderAbout"]').forEach((swiperEl) => {
        new Swiper(swiperEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            speed: 1000,
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
    const paginationImages = Array.from(document.querySelectorAll('.swiper-cases-text .swiper-slide .cases-pagination img'))
        .map(img => img.outerHTML);

    const textSwiper = new Swiper('.swiper-cases-text', {
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 800,
        allowTouchMove: false,
        updateOnWindowResize: true,
        pagination: {
          el: '.cases-slider__pagination',
          clickable: true,
          renderBullet: function(index, className) {
              const slides = document.querySelectorAll('.swiper-cases-text .swiper-slide');
              const img = slides[index].querySelector('.cases-pagination img');
              return `<span class="${className}">${img?.outerHTML || ''}</span>`;
          }
      }
    });

    const imageSwiper = new Swiper('.swiper-cases-image', {
        spaceBetween: 10,
        slidesPerView: 1,
        updateOnWindowResize: true,
        speed: 1600,
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    document.querySelectorAll('.swiper-image').forEach(nestedSwiperEl => {
        new Swiper(nestedSwiperEl, {
            spaceBetween: 10,
            slidesPerView: 1,
            allowTouchMove: true,
            speed: 1000,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            nested: true
        });
    });

    textSwiper.on('slideChange', function() {
      imageSwiper.slideTo(this.activeIndex);
    });

    imageSwiper.on('slideChange', function() {
        textSwiper.slideTo(this.activeIndex);
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
            speed: 1000,
            allowTouchMove: true,
            breakpoints: {
                767: {
                    spaceBetween: 0,
                    allowTouchMove: false,
                },
            },
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
