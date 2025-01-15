fetch('partials/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load header: ' + response.status);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error(error));

fetch('partials/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load footer: ' + response.status);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;

        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById('current-year');

        if (yearElement) {
            yearElement.textContent = currentYear;
        } else {
            console.error('Failed to set current year: element not found');
        }
    })
    .catch(error => console.error(error));
