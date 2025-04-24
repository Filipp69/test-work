document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.banner__list-item');
  const videos = document.querySelectorAll('.banner__video');
  const iosImage = document.querySelector('.banner__img-ios');

  let currentActiveIndex = 0;
  let autoSwitchInterval;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    videos.forEach(video => video.style.display = 'none');
    if (iosImage) iosImage.style.display = 'block';
    return;
  } else {
    if (iosImage) iosImage.style.display = 'none';
  }

  if (items.length !== videos.length) {
    console.warn('Количество видео и пунктов списка должно совпадать');
    return;
  }

  function showVideo(index) {
    videos.forEach((video, i) => {
      if (i === index) {
        video.style.display = 'block';
        video.currentTime = 0;
        video.play().catch(err => console.warn('play error:', err));
      } else {
        video.pause();
        video.style.display = 'none';
      }
    });

    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  function switchToNextItem() {
    currentActiveIndex = (currentActiveIndex + 1) % items.length;
    showVideo(currentActiveIndex);
  }

  function startAutoSwitch() {
    clearInterval(autoSwitchInterval);
    showVideo(currentActiveIndex);
    autoSwitchInterval = setInterval(switchToNextItem, 3000);
  }

  function handleItemClick(index) {
    currentActiveIndex = index;
    showVideo(index);
    clearInterval(autoSwitchInterval);
    autoSwitchInterval = setInterval(switchToNextItem, 3000);
  }

  items.forEach((item, index) => {
    item.addEventListener('click', () => handleItemClick(index));
  });

  startAutoSwitch();
});


