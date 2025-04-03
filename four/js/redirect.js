// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown after clicking the play button
    document.getElementById('play').addEventListener('click', function() {
        // Set timeout for 25 seconds (45000 milliseconds)
        setTimeout(function() {
            window.location.href = '/five/index.html';
        }, 25000);
    });
});