document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector("[data-header-burger]");
    if (burgerButton) {
        burgerButton.addEventListener("click", () => {
            toggleBurgerMenu(burgerButton);
        });
    }
    // scrollHeader();
    // window.addEventListener('scroll', scrollHeader);
});

function toggleBurgerMenu(burgerButton) {
    const burgerMenu = document.querySelector("[data-header-menu]");
    burgerButton.classList.toggle("burger--open");
    if (burgerButton.classList.contains("burger--open")) {
        burgerMenu.classList.add("vis");
        disableScrolling();
    } else {
        burgerMenu.classList.remove("vis");
        enableScrolling();
    }
}
// function scrollHeader() {
//     let header = document.querySelector('[data-header]');
//     if(header && window.innerWidth > 991) {
//         if (window.scrollY > 0) {
//             header.classList.add('header--scroll');
//         } else {
//             header.classList.remove('header--scroll');
//         }
//     }
// }
// перед использованием добавить в структуру перед шапкой элемент ref-header
// const headerEl = document.querySelector('.header');
// const ref = document.querySelector('.ref-header');

// const toggleHeaderClassOnScroll = (props) => {
//   const {
//     ref,
//     element,
//     options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0
//     }
//   } = props;

//   const callback = ([entry]) => {
//     element.classList.toggle('fixed', !entry.isIntersecting);
//   };

//   const observer = new IntersectionObserver(callback, options);

//   observer.observe(ref);
// };

// toggleHeaderClassOnScroll({
//   ref: ref,
//   element: headerEl,
// });
