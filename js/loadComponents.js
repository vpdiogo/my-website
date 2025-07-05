// Function to load components more smoothly
async function loadComponents() {
    const startTime = Date.now();

    try {
        // Load header and footer in parallel
        const [headerResponse, footerResponse] = await Promise.all([
            fetch('partials/header.html'),
            fetch('partials/footer.html')
        ]);

        if (!headerResponse.ok) {
            throw new Error('Failed to load header: ' + headerResponse.status);
        }
        if (!footerResponse.ok) {
            throw new Error('Failed to load footer: ' + footerResponse.status);
        }

        const [headerData, footerData] = await Promise.all([
            headerResponse.text(),
            footerResponse.text()
        ]);

        // Insert the components
        document.getElementById('header-placeholder').innerHTML = headerData;
        document.getElementById('footer-placeholder').innerHTML = footerData;

        // Update the year in the footer
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById('current-year');

        if (yearElement) {
            yearElement.textContent = currentYear;
        }

        // Wait for a minimum time to avoid very fast flashes
        const elapsedTime = Date.now() - startTime;
        const minLoadTime = 150; // milliseconds

        if (elapsedTime < minLoadTime) {
            await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsedTime));
        }

        // Mark the page as loaded to enable the transition
        document.body.classList.add('loaded');

    } catch (error) {
        console.error('Error loading components:', error);
        // Even on error, wait for the minimum time and mark as loaded
        const elapsedTime = Date.now() - startTime;
        const minLoadTime = 150;

        if (elapsedTime < minLoadTime) {
            await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsedTime));
        }

        document.body.classList.add('loaded');
    }
}

// Load components when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}
