document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector("[data-header-burger]");
    if (burgerButton) {
        burgerButton.addEventListener("click", () => {
            toggleBurgerMenu(burgerButton);
        });
    }
    setupNavLinks();
    setActiveNavLink();
    // scrollHeader();
    // window.addEventListener('scroll', scrollHeader);
});

// Функция для переключения бургер-меню
function toggleBurgerMenu(burgerButton) {
  const burgerMenu = document.querySelector("[data-header-menu]");
  const header = document.querySelector(".header");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  burgerButton.classList.toggle("burger--open");
  burgerMenu.classList.toggle("vis");
  header.classList.toggle("menu-open");

  if (isMobile) {
      if (burgerButton.classList.contains("burger--open")) {
          disableScrolling();
      } else {
          enableScrolling();
      }
  }
}

// Функция для закрытия меню при клике на ссылку
function setupNavLinks() {
  const navLinks = document.querySelectorAll(".nav__link");
  const burgerButton = document.querySelector(".burger");

  navLinks.forEach(link => {
      link.addEventListener("click", () => {
          if (burgerButton.classList.contains("burger--open")) {
              const burgerMenu = document.querySelector("[data-header-menu]");
              const header = document.querySelector(".header");
              const isMobile = window.matchMedia("(max-width: 768px)").matches;

              burgerButton.classList.remove("burger--open");
              burgerMenu.classList.remove("vis");
              header.classList.remove("menu-open");

              if (isMobile) {
                  enableScrolling();
              }
          }
      });
  });
}

// Функция для добавления класса active к текущей якорной ссылке
function setActiveNavLink() {
  const sections = document.querySelectorAll("section"); // или другие элементы, на которые ведут якоря
  const navLinks = document.querySelectorAll(".nav__link");

  window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
              link.classList.add("active");
          }
      });
  });
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
