document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.banner__list-item');
  const videos = document.querySelectorAll('.banner__video');
  const iosImage = document.querySelector('.banner__img-ios');

  let currentActiveIndex = 0;
  let autoSwitchInterval;

  function waitForVideosLoaded() {
    return Promise.all(Array.from(videos).map(video => {
      return new Promise(resolve => {
        if (video.readyState >= 3) {
          video.pause();
          video.currentTime = 0;
          resolve();
        } else {
          video.addEventListener('canplaythrough', () => {
            video.pause();
            video.currentTime = 0;
            resolve();
          }, { once: true });
        }
      });
    }));
  }

  function showVideo(index) {
    videos.forEach((video, i) => {
      if (i === index) {
        video.classList.add('active');
        video.pause();
        video.currentTime = 0;
        video.playbackRate = 0.8;
        requestAnimationFrame(() => {
          video.play().catch(err => console.warn('play error:', err));
        });
      } else {
        video.pause();
        video.classList.remove('active');
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

  waitForVideosLoaded().then(() => {
    console.log('Все видео загружены');
    startAutoSwitch();
  });
});
