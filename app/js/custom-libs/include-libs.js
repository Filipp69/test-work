document.addEventListener("DOMContentLoaded", function () {
    // Accordion
    let accordions = document.querySelectorAll("[data-accordion]");
    if(accordions) {
        accordions.forEach((element) => {
            let accordion = new Accordion(element, {});
        });
    }

    // Swiper
    if(document.querySelector('[data-swiper="default"]')) {
        let swiper = new Swiper(document.querySelector('[data-swiper="default"]'), {
            spaceBetween: 14,
            slidesPerView: 1,
            updateOnWindowResize: true,
            breakpoints: {
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
            },
            pagination: {
                el: document.querySelector('[data-swiper-default-pagination]'),
                clickable: true,
            },
        });
    }

    // Modal
    let modal;
    document.addEventListener("DOMContentLoaded", function () {
        modal = new Modal({});
    });

    // Cookie
    const cookieItem = document.querySelector("[data-cookie]");
    if (cookieItem) {
        const cookiePeriod = cookieItem.getAttribute("data-days");
        const cookieDefault = new Cookie(cookieItem, {
            name: "cookie-alert",
            period: cookiePeriod,
        });
    }

    // Counter
    if(document.querySelector('[data-counter-input]')) {
        let counter = new Counter();
        counter.clickAllButtons();
        let counterInput = document.querySelectorAll('[data-counter-input]');
        counterInput.forEach((input) => {
            counter.setDisable(input, 'min', 'minus');
            counter.setDisable(input, 'max', 'plus');
            input.addEventListener('input', () => {
                if(!input.getAttribute('data-counter-min') == '') {
                    counter.setValue(input, 'min', 'minus');
                }
                if(!input.getAttribute('data-counter-max') == '') {
                    counter.setValue(input, 'max', 'plus');
                }
            })
        })
    }

    // Select
    let selects = document.querySelectorAll("[data-select]");
    if(selects) {
        selects.forEach((element) => {
            let select = new Select(element, {});
        });
    }

    // Tabs
    let tabs = document.querySelectorAll("[data-tabs]");
    if(tabs) {
        tabs.forEach((element) => {
            let tab = new Tabs(element, {});
        });
    }
})
