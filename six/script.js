document.addEventListener('DOMContentLoaded', function() {
  // Function to detect Android device
  function isAndroid() {
    return /Android/i.test(navigator.userAgent);
  }
  
  if (isAndroid()) {
    const birthdayCard = document.querySelector('.birthdayCard');
    
    // Add touch event listeners for Android devices
    birthdayCard.addEventListener('touchstart', function(e) {
      e.preventDefault(); // Prevent default touch behavior
      this.classList.add('android-rotate', 'android-open');
    });
    
    birthdayCard.addEventListener('touchend', function(e) {
      e.preventDefault(); // Prevent default touch behavior
      this.classList.remove('android-rotate', 'android-open');
    });
    
    // Disable the hover effects for Android to prevent conflicts
    document.querySelector('body').classList.add('android-device');
  }
});

//music
var bgMusicURL = './music/love.mp3'; // Link of background music
var bgMusicControls = true; // Show UI music control
let bgMusic = null;
let isPlaying = false;
const musicToggle = document.getElementById('music-toggle');
const musicText = musicToggle.querySelector('.music-text');
const bgMusicElement = document.getElementById('bgMusic');

if (bgMusicURL) {
    musicToggle.addEventListener('click', () => {
        if (!isPlaying) {
            bgMusicElement.play();
            musicToggle.classList.add('playing');
            musicText.textContent = 'Pause Music';
        } else {
            bgMusicElement.pause();
            musicToggle.classList.remove('playing');
            musicText.textContent = 'Play Music';
        }
        isPlaying = !isPlaying;
    });
}