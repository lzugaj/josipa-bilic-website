window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const parallaxValue = scrollY * 0.3; // Adjust the multiplier to control the parallax effect
  document.getElementById(
    "main-home-page-image"
  ).style.transform = `scale(1.3) translateY(${parallaxValue}px)`;
});
