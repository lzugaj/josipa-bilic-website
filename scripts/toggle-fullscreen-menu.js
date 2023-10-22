function handleToggleFullscreenMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const menuElement = document.getElementById("fullscreen-menu");

  menuIcon.addEventListener("click", () => toggleFullscreenMenu(menuElement));
  closeIcon.addEventListener("click", () => closeFullscreenMenu(menuElement));
}

function toggleFullscreenMenu(menuElement) {
  menuElement.style.display =
    menuElement.style.display === "block" ? "none" : "block";
}

function closeFullscreenMenu(menuElement) {
  menuElement.style.display = "none";
}

handleToggleFullscreenMenu();
