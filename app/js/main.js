document.querySelectorAll('.button--copy').forEach(button => {
  button.addEventListener('click', () => {
    const textToCopy = button.getAttribute('data-copy');
    navigator.clipboard.writeText(textToCopy)
  });
});

document.addEventListener('DOMContentLoaded', function() {
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

  reorderTechnologyCards();
  window.addEventListener('resize', reorderTechnologyCards);
});
