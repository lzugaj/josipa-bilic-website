function handleToggleFullscreenMenu() {
    let menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', toggleFullscreenMenu);

    let closeIcon = document.getElementById('close-icon');
    closeIcon.addEventListener('click', closeFullscreenMenu);
}

function toggleFullscreenMenu() {
    let menuElement = document.getElementById('fullscreen-menu');
    menuElement.style.display = menuElement.style.display === 'block' ? 'none' : 'block';
}

function closeFullscreenMenu() {
    let menuElement = document.getElementById('fullscreen-menu');
    menuElement.style.display = 'none';
}

handleToggleFullscreenMenu();