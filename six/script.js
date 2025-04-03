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