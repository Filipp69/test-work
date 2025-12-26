window.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.banner__advantages');

  wrappers.forEach(wrapper => {
    const advantagesList = wrapper.querySelector('.advantages-list');
    if (!advantagesList) return;

    let scrolled = false;
    let intervalId = null;

    // есть ли горизонтальный скролл
    function hasHorizontalScroll() {
      return wrapper.scrollWidth > wrapper.clientWidth;
    }

    function startAnimationLoop() {
      if (intervalId || !hasHorizontalScroll()) return;

      intervalId = setInterval(() => {
        if (!scrolled) {
          advantagesList.classList.add('animate-scroll');

          setTimeout(() => {
            advantagesList.classList.remove('animate-scroll');
          }, 2000);
        }
      }, 4000);
    }

    function stopAnimationLoop() {
      if (!intervalId) return;

      clearInterval(intervalId);
      intervalId = null;
      advantagesList.classList.remove('animate-scroll');
    }

    // пользователь начал скроллить
    wrapper.addEventListener('scroll', () => {
      if (wrapper.scrollLeft > 2 && !scrolled) {
        scrolled = true;
        stopAnimationLoop();
      }
    });

    // при ресайзе проверяем, появился ли скролл
    window.addEventListener('resize', () => {
      if (hasHorizontalScroll()) {
        startAnimationLoop();
      } else {
        stopAnimationLoop();
      }
    });

    // первичная проверка
    if (hasHorizontalScroll()) {
      startAnimationLoop();
    }
  });

  const stars = document.querySelectorAll('.banner__star');

  // stars.forEach(star => {
  //   function flicker() {
  //     const intensity = Math.random();

  //     star.style.opacity = 0.4 + intensity * 0.6;
  //     star.style.transform = `
  //       rotate(${getComputedStyle(star).getPropertyValue('--rotation')})
  //       scale(${1 + intensity * 0.2})
  //     `;

  //     const nextDelay = 300 + Math.random() * 2000;
  //     setTimeout(flicker, nextDelay);
  //   }

  //   setTimeout(flicker, Math.random() * 1000);
  // });

});
