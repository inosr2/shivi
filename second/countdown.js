document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.countdown-circle');
    const circle_r = parseInt(circle.getAttribute('r'));
    const circumference = 2 * Math.PI * circle_r;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = '0';
    
    startCountdown();
});

function startCountdown() {
    let timeLeft = 30;
    const numberElement = document.querySelector('.countdown-number');
    const circle = document.querySelector('.countdown-circle');
    const circle_r = parseInt(circle.getAttribute('r'));
    const circumference = 2 * Math.PI * circle_r;
    
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            return;
        }
        
        timeLeft--;
        numberElement.textContent = timeLeft;
        
        const offset = circumference - (timeLeft / 30) * circumference;
        circle.style.strokeDashoffset = offset;
        
    }, 1000);
}