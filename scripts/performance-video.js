const performanceVideoUrls = [
  "https://www.youtube.com/embed/KckM9MPGcMc",
  "https://www.youtube.com/embed/XAtG4f0cfSc",
  "https://www.youtube.com/embed/w43VLr58s3Y",
  "https://www.youtube.com/embed/KVNuwG3LgkY",
  "https://www.youtube.com/embed/rthci3XOfEQ",
  "https://www.youtube.com/embed/nV3_A-BoO-c",
  "https://www.youtube.com/embed/-PFDkqpyvtk",
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
