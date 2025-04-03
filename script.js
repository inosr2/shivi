redirectImage.addEventListener('click', function() {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Detect Instagram/Facebook in-app browser
    const isInAppBrowser = /Instagram|FBAV|FBAN/.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);

    if (isInAppBrowser) {
        if (isAndroid) {
            // Force open in Chrome (Android)
            window.location.href = 'intent://shivi.vercel.app/second/index.html#Intent;scheme=https;package=com.android.chrome;end';
        } else if (isIOS) {
            // iOS: Show alert because auto-redirect is blocked
            alert("Please open this link in Safari or Chrome:\nhttps://shivi.vercel.app/second/index.html");
            window.location.href = 'https://shivi.vercel.app/second/index.html';
        } else {
            // Desktop in-app browser case
            alert("For the best experience, please open this link in Chrome:\nhttps://shivi.vercel.app/second/index.html");
            window.open('https://shivi.vercel.app/second/index.html', '_blank');
        }
        return;
    }

    // If already in Chrome, just redirect normally
    if (isChrome) {
        window.location.href = '/second/index.html';
        return;
    }

    // Otherwise, ask to open in Chrome
    if (confirm("This site works best in Chrome. Would you like to open it in Chrome?")) {
        if (isAndroid) {
            window.location.href = 'intent://shivi.vercel.app/second/index.html#Intent;scheme=https;package=com.android.chrome;end';
        } else {
            alert("Please copy and paste this link into Chrome:\nhttps://shivi.vercel.app/second/index.html");
            window.open('https://shivi.vercel.app/second/index.html', '_blank');
        }
    } else {
        window.location.href = '/second/index.html';
    }
});
