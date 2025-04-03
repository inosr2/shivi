redirectImage.addEventListener('click', function() {
    // Check if using Chrome
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    
    if (!isChrome) {
        // If not Chrome, show a message and provide a link
        if (confirm("This site works best in Chrome. Would you like to open it in Chrome instead?")) {
            // If on Android, use the intent URL to open in Chrome
            if (/Android/i.test(navigator.userAgent)) {
                window.location.href = 'intent://shivi.vercel.app/second/index.html#Intent;scheme=https;package=com.android.chrome;end';
            } else if (/Windows|Mac|Linux/i.test(navigator.userAgent)) {
                // For desktop (Windows, Mac, Linux), open the link in a new tab
                window.open('https://shivi.vercel.app/second/index.html', '_blank');
            }
            return;
        }
    }

    // Default redirect
    window.location.href = '/second/index.html';
});
