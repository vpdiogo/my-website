document.addEventListener('DOMContentLoaded', function() {
    // Wait for header to be loaded to setup the toggle button
    const checkForToggleButton = () => {
        const toggleButton = document.getElementById('toggle-dark-mode');
        if (toggleButton) {
            setupDarkModeToggle(toggleButton);
        } else {
            // Try again after a short delay
            setTimeout(checkForToggleButton, 50);
        }
    };

    checkForToggleButton();
});

function setupDarkModeToggle(toggleButton) {
    // Centralize: only apply to <html> and <body>
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        const willBeDarkMode = !document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        // Do not manipulate header/nav/footer directly
        localStorage.setItem('dark-mode', willBeDarkMode ? 'true' : 'false');
    });
}
