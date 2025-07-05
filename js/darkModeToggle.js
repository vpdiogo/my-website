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
    // Aplica apenas em <html>
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        const willBeDarkMode = !document.documentElement.classList.contains('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', willBeDarkMode ? 'true' : 'false');
    });
}
