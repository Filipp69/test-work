document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('myVideo');
        const items = document.querySelectorAll('.banner__list-item');
        let autoSwitchInterval;
        let currentActiveIndex = 0;
        let videoDuration = 0;
        let isManualSelection = false;
        video.addEventListener('loadedmetadata', function() {
          videoDuration = video.duration;
          startAutoSwitch();
        });

        function getSegmentTime(index) {
          const segmentDuration = videoDuration / 3;
          return {
            start: index * segmentDuration,
            end: (index + 1) * segmentDuration
          };
        }

        function playVideoSegment(index) {
          const segment = getSegmentTime(index);
          video.currentTime = segment.start;
          video.play();
          const segmentDuration = (segment.end - segment.start) * 1000;
          setTimeout(() => {
            if (video.currentTime >= segment.end - 0.1) {
              video.pause();
            }
          }, segmentDuration);
        }

        function updateActiveItem(index) {
          items.forEach((item, i) => {
            if (i === index) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
          playVideoSegment(index);
        }

        function switchToNextItem() {
          currentActiveIndex = (currentActiveIndex + 1) % items.length;
          updateActiveItem(currentActiveIndex);
        }

        function startAutoSwitch() {
          clearInterval(autoSwitchInterval);
          updateActiveItem(currentActiveIndex);
          autoSwitchInterval = setInterval(switchToNextItem, 3000);
        }

        function handleItemClick(index) {
          currentActiveIndex = index;
          updateActiveItem(currentActiveIndex);
          clearInterval(autoSwitchInterval);
          autoSwitchInterval = setInterval(switchToNextItem, 3000);
        }

        items.forEach((item, index) => {
          item.addEventListener('click', () => handleItemClick(index));
        });

        video.addEventListener('timeupdate', function() {
          const segment = getSegmentTime(currentActiveIndex);
          if (video.currentTime >= segment.end - 0.1) {
            video.pause();
          }
        });
});
