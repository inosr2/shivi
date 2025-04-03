// Add event listener to heart paper
document.addEventListener('DOMContentLoaded', function() {
    const heartPaper = document.querySelector('.paper.heart');
    
    // Handle both click and touch events
    const handleHeartInteraction = function(e) {
        e.preventDefault();
        window.location.href = '/six/index.html';
    };

    heartPaper.addEventListener('click', handleHeartInteraction);
    heartPaper.addEventListener('touchend', handleHeartInteraction);
});