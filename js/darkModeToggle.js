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
    // Apply dark mode to header and nav if needed
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        const footer = document.querySelector('footer');
        if (footer) {
            footer.classList.add('dark-mode');
        }
    }

    toggleButton.addEventListener('click', function() {
        const willBeDarkMode = !document.body.classList.contains('dark-mode');

        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        const footer = document.querySelector('footer');
        if (footer) {
            footer.classList.toggle('dark-mode');
        }

        // Save preference to localStorage
        localStorage.setItem('dark-mode', willBeDarkMode ? 'true' : 'false');
    });
}
