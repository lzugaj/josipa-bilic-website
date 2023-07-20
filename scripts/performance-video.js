let performanceVideo = [
    'https://www.youtube.com/embed/nFxjaVmFj5E',
    'https://www.youtube.com/embed/C2NLPQTvO9M',
    'https://www.youtube.com/embed/p485kUNpPvE'
];
let currentVideoIndex = 0;

function handlePerformanceVideos() {
    let previousVideoElement = document.getElementById('left-arrow');
    let nextVideoElement = document.getElementById('right-arrow');

    previousVideoElement.addEventListener('click', switchToPreviousVideo);
    nextVideoElement.addEventListener('click', switchToNextVideo);
}

function switchToPreviousVideo() {
    if (currentVideoIndex === 0) {
        currentVideoIndex = performanceVideo.length - 1;
    } else {
        currentVideoIndex--;
    }

    updateVideoSource();
}   

function switchToNextVideo() {
    if (currentVideoIndex === performanceVideo.length - 1) {
        currentVideoIndex = 0;
    } else {
        currentVideoIndex++;
    }

    updateVideoSource();
}

function updateVideoSource() {
    let iframeElement = document.getElementById('performance-iframe');
    iframeElement.src = performanceVideo[currentVideoIndex];
}

handlePerformanceVideos();