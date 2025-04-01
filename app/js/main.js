

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', () => {
      const textToCopy = button.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy);
      button.classList.add('active');
      setTimeout(()=>{
        button.classList.remove('active');
      }, 3000);
    });
  });

  reorderTechnologyCards();
  window.addEventListener('resize', reorderTechnologyCards);

  document.querySelectorAll(".tabs-calc__nav-item").forEach((item, index, list) => {
    item.addEventListener("click", function () {
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

  const showMoreBtn = document.querySelector('.tabs-calc__show-more');
  const cardWrappers = document.querySelectorAll('.card-calc__wrapper');

  if (showMoreBtn && cardWrappers.length) {
    showMoreBtn.addEventListener('click', function() {
      this.classList.toggle('opened');

      cardWrappers.forEach(wrapper => {
        wrapper.classList.toggle('opened');
      });

      const span = this.querySelector('span');
      if (span) {
        span.textContent = this.classList.contains('opened')
          ? 'Свернуть расчёт'
          : 'Показать расчёт';
      }
    });
  }

});
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
