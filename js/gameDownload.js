document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-latest');
    const repoOwner = 'vpdiogo';
    const repoName = 'classic-games-python';
    
async function getLatestRelease() {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${repoOwner}/${repoName}/releases`
        );

        if (!response.ok) {
            throw new Error('Error fetching releases');
        }

        const releases = await response.json();
        console.log('Releases found:', releases);

        // Find the most recent release with a .exe
        const validRelease = releases.find(release =>
            release.assets.some(asset =>
                asset.name.toLowerCase().endsWith('.exe')
            )
        );

        if (validRelease) {
            const windowsAsset = validRelease.assets.find(asset =>
                asset.name.toLowerCase().endsWith('.exe')
            );

            if (windowsAsset) {
                downloadButton.href = windowsAsset.browser_download_url;
                downloadButton.innerHTML =
                    `<i class="fas fa-download"></i> Download para Windows`;
                downloadButton.style.display = 'inline-flex';
                console.log('Windows asset found:', windowsAsset.name);
            }
        } else {
            downloadButton.style.display = 'none';
            console.log('No release with .exe found');
            const gameLinks = document.querySelector('.game-links');
            if (gameLinks && !document.getElementById('no-download-msg')) {
                const noDownloadMsg = document.createElement('p');
                noDownloadMsg.id = 'no-download-msg';
                noDownloadMsg.innerHTML =
                    '<i class="fas fa-info-circle"></i> Download não disponível no momento';
                noDownloadMsg.style.color = '#666';
                gameLinks.appendChild(noDownloadMsg);
            }
        }

    } catch (error) {
        console.error('Erro ao carregar releases:', error);
        downloadButton.style.display = 'none';

        const gameLinks = document.querySelector('.game-links');
        if (gameLinks && !document.getElementById('error-msg')) {
            const errorMsg = document.createElement('p');
            errorMsg.id = 'error-msg';
            errorMsg.innerHTML =
                '<i class="fas fa-exclamation-triangle"></i> Erro ao carregar download';
            errorMsg.style.color = '#dc3545';
            gameLinks.appendChild(errorMsg);
        }
    }
}

if (downloadButton) {
    getLatestRelease();
}
});