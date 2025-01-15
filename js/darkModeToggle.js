document.addEventListener('DOMContentLoaded', function() {
    fetch('partials/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Check localStorage to apply dark mode, if needed
            if (localStorage.getItem('dark-mode') === 'true') {
                document.body.classList.add('dark-mode');
                document.querySelector('header').classList.add('dark-mode');
                document.querySelector('nav').classList.add('dark-mode');
                document.querySelector('footer').classList.add('dark-mode');
            }

            document.getElementById('toggle-dark-mode').addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                document.querySelector('header').classList.toggle('dark-mode');
                document.querySelector('nav').classList.toggle('dark-mode');
                document.querySelector('footer').classList.toggle('dark-mode');

                // Save dark mode preference to localStorage
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('dark-mode', 'true');
                } else {
                    localStorage.setItem('dark-mode', 'false');
                }
            });
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
});
