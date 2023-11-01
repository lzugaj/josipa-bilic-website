// function handleToggleFullscreenMenu() {
//   const menuIcon = document.getElementById("menu-icon");
//   const closeIcon = document.getElementById("close-icon");
//   const menuElement = document.getElementById("fullscreen-menu");

//   menuIcon.addEventListener("click", () => toggleFullscreenMenu(menuElement));
//   closeIcon.addEventListener("click", () => closeFullscreenMenu(menuElement));
// }

// function toggleFullscreenMenu(menuElement) {
//   menuElement.style.display = "block";
//   // Use a timeout to ensure the display property change takes effect before applying opacity
//   setTimeout(() => {
//     menuElement.style.opacity = "1";
//   }, 0);
// }

// function closeFullscreenMenu(menuElement) {
//   menuElement.style.opacity = "0";
//   // Listen for the transitionend event to hide the element after the transition
//   menuElement.addEventListener("transitionend", function () {
//     if (menuElement.style.opacity === "0") {
//       menuElement.style.display = "none";
//     }
//   });
// }

// handleToggleFullscreenMenu();

function handleToggleFullscreenMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const menuElement = document.getElementById("fullscreen-menu");

  menuIcon.addEventListener("click", () => toggleFullscreenMenu(menuElement));
  closeIcon.addEventListener("click", () => closeFullscreenMenu(menuElement));
}

function toggleFullscreenMenu(menuElement) {
  menuElement.style.display = "block";
  setTimeout(() => {
    menuElement.style.opacity = "1";
    menuElement.style.transform = "translateX(0)"; // Transition it to the left
  }, 0);
}

function closeFullscreenMenu(menuElement) {
  menuElement.style.opacity = "0";
  menuElement.style.transform = "translateX(100%)"; // Move it back outside the viewport on the right
  menuElement.addEventListener("transitionend", function () {
    if (menuElement.style.opacity === "0") {
      menuElement.style.display = "none";
    }
  });
}

handleToggleFullscreenMenu();
