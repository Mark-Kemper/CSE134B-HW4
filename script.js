document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Check the user's preference from previous visits
    var savedMode = localStorage.getItem('mode');
    modeToggle.checked = savedMode == 'dark-mode'
    if (savedMode) {
        body.classList.add(savedMode);
    }
    else {
        savedMode = 'light-mode'
    }
    if (modeToggle) {
        modeToggle.style.display = 'inline-block';
    }

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        const currentMode = localStorage.getItem('mode') == "dark-mode" ? 'light-mode' : 'dark-mode';
        localStorage.setItem('mode', currentMode);
    });
});
