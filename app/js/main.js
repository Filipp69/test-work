document.addEventListener('DOMContentLoaded', function() {
  // Копирование текста по клику на элементы с атрибутом data-copy
  let copyBlocks = document.querySelectorAll('[data-copy]');
  if(copyBlocks.length > 0) {
    copyBlocks.forEach(button => {
      button.addEventListener('click', () => {
        const textToCopy = button.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy);
        button.classList.add('active');
        setTimeout(() => {
          button.classList.remove('active');
        }, 3000);
      });
    });
  }

  // Управление состоянием табов калькулятора (активные/неактивные)
  document.querySelectorAll(".tabs-calc__nav-item").forEach((item, index, list) => {
    item.addEventListener("click", function() {
      list.forEach(el => el.classList.remove("sub-active"));

      list.forEach((el, i) => {
        if (el.classList.contains("active")) {
          for (let j = 0; j < i; j++) {
            list[j].classList.add("sub-active");
          }
        }
      });
    });
  });

  // Управление кнопкой "Показать/Скрыть" расчёты
  const showMoreBtn = document.querySelector('.tabs-calc__show-more');
  const cardWrappers = document.querySelectorAll('.card-calc__wrapper');
  if (showMoreBtn && cardWrappers.length) {
    showMoreBtn.addEventListener('click', function() {
      this.classList.toggle('opened');
      cardWrappers.forEach(wrapper => wrapper.classList.toggle('opened'));
      const span = this.querySelector('span');
      if (span) {
        span.textContent = this.classList.contains('opened')
          ? 'Свернуть расчёт'
          : 'Показать расчёт';
      }
    });
  }

  // Выравнивание высоты текста в пагинации
  function setUniformPaginationTextHeight() {
    const paginationTextElements = document.querySelectorAll('.card-who-is__pagination-text');
    if (paginationTextElements.length === 0) return;

    let maxHeight = 0;
    paginationTextElements.forEach(el => el.style.minHeight = '0');
    paginationTextElements.forEach(el => {
      const height = el.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });
    paginationTextElements.forEach(el => el.style.minHeight = `${maxHeight}px`);
  }

  // Анимация появления элементов при скролле
  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.slide-in-left');
    if (!elements.length) return;

    function checkPosition() {
      const windowHeight = window.innerHeight;
      const triggerOffset = windowHeight * 0.75;
      elements.forEach(el => {
        if (el.classList.contains('animate')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerOffset) el.classList.add('animate');
      });
    }

    checkPosition();
    let isScrolling;
    window.addEventListener('scroll', function() {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(checkPosition, 50);
    }, { passive: true });
  }

  // Реорганизация карточек технологий на мобильных устройствах
  function reorderTechnologyCards() {
    if (window.innerWidth <= 600) {
      const wrapper = document.querySelector('.card-technology__wrapper');
      if (!wrapper) return;
      const cards = Array.from(document.querySelectorAll('.card-technology'));
      if (cards.length === 0) return;
      cards.sort((a, b) => parseInt(a.dataset.order) - parseInt(b.dataset.order));
      const tempContainer = document.createElement('div');
      tempContainer.className = 'card-technology__container';
      cards.forEach(card => tempContainer.appendChild(card));
      wrapper.innerHTML = '';
      wrapper.appendChild(tempContainer);
    }
  }

  // Анимация счетчиков чисел
  function animateCounter(element, finalValue, duration = 500) {
    const startValue = 0;
    const startTime = performance.now();
    const hasSpaces = element.textContent.includes(' ');
    function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(progress * (finalValue - startValue) + startValue);
      let formattedValue = currentValue.toString();
      if (hasSpaces) formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      element.textContent = formattedValue;
      if (progress < 1) requestAnimationFrame(updateCounter);
    }
    requestAnimationFrame(updateCounter);
  }

  // Инициализация анимации счетчиков при переключении табов
  function initCounterAnimation() {
      document.querySelectorAll('.tabs-calc__nav-item').forEach(tab => {
          tab.addEventListener('click', () => {
              setTimeout(() => {
                  startCounterAnimation();
              }, 100);
          });
      });
  }

  function startCounterAnimation() {
      document.querySelectorAll('.card-calc__number[data-counter]').forEach(el => {
          const finalValue = parseInt(el.getAttribute('data-counter').replace(/\s/g, ''));
          animateCounter(el, finalValue);
      });
  }

  function observeCounterBlock() {
      const targetBlock = document.querySelector('.card-calc');
      if (!targetBlock) return;
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  startCounterAnimation();
                  observer.disconnect();
              }
          });
      }, { threshold: 0.5 });
      observer.observe(targetBlock);
  }

  // Функция для определения правильного окончания
  function getMarketEnding(num) {
    num = parseInt(num);
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return 'микромаркетов';
    } else if (lastDigit === 1) {
      return 'микромаркет';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'микромаркета';
    } else {
      return 'микромаркетов';
    }
  }

  // Обработчик для кнопки открытия модального окна
  document.querySelectorAll('.request__button[data-modal-open="bid-num"]').forEach(button => {
    button.addEventListener('click', function() {
      const activeTab = document.querySelector('.tabs-calc__nav-item.active');
      if (activeTab) {
        const number = activeTab.querySelector('span').textContent.trim();
        const ending = getMarketEnding(number);

        const textContainer = document.querySelector('.modal[data-modal="bid-num"] .modal__title .calc-number');
        if (textContainer) {
          textContainer.innerHTML = `Из расчёта на <span class="bid-num">${number}</span> ${ending}`;
        }
      }
    });
  });

  // Инициализация всех функций
  reorderTechnologyCards();
  window.addEventListener('resize', reorderTechnologyCards);
  setUniformPaginationTextHeight();
  window.addEventListener('load', setUniformPaginationTextHeight);
  window.addEventListener('resize', setUniformPaginationTextHeight);
  handleScrollAnimations();
  initCounterAnimation();
  observeCounterBlock();
});
