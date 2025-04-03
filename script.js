// Get the image element
const redirectImage = document.getElementById('redirectImage');

// Add click event listener
redirectImage.addEventListener('click', function() {
    // Redirect to index2.html
    window.location.href = '/second/index.html';
});

// Add touch event for mobile devices
redirectImage.addEventListener('touchend', function(e) {
    // Prevent default touch behavior
    e.preventDefault();
    // Redirect to index2.html
    window.location.href = '/second/index.html';
});