document.addEventListener("DOMContentLoaded", function() {
    var proceedText = document.querySelector('.proceed');
    var audio = document.getElementById('background-audio');
    var video = document.getElementById('background-video');

    proceedText.addEventListener('click', function() {
        var startScreen = document.getElementById('start-screen');
        var websiteContent = document.getElementById('website-content');

        startScreen.style.display = 'none';
        websiteContent.style.display = 'block';

        if (audio.paused) {
            audio.play();
            video.play();
        }
    });
});
