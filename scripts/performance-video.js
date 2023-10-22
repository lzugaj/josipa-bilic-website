const performanceVideoUrls = [
  "https://www.youtube.com/embed/nFxjaVmFj5E",
  "https://www.youtube.com/embed/C2NLPQTvO9M",
  "https://www.youtube.com/embed/p485kUNpPvE",
];

let currentVideoIndex = 0;

const previousVideoElement = document.getElementById("left-arrow");
const nextVideoElement = document.getElementById("right-arrow");
const iframeElement = document.getElementById("performance-iframe");

previousVideoElement.addEventListener("click", () => switchVideo(-1));
nextVideoElement.addEventListener("click", () => switchVideo(1));

function switchVideo(offset) {
  currentVideoIndex =
    (currentVideoIndex + offset + performanceVideoUrls.length) %
    performanceVideoUrls.length;
  updateVideoSource();
}

function updateVideoSource() {
  iframeElement.src = performanceVideoUrls[currentVideoIndex];
}
