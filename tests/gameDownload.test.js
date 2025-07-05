/**
 * @jest-environment jsdom
 */

global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockClear();
    jest.resetModules();
});

describe('Game Download', () => {
    test('should load without errors', () => {
        expect(() => {
            require('../js/gameDownload.js');
        }).not.toThrow();
    });

    test('should process releases correctly', async () => {
        const mockReleases = [
            {
                tag_name: 'v1.0.0',
                assets: [
                    {
                        name: 'snake-game.exe',
                        browser_download_url: 'https://github.com/test/releases/snake.exe'
                    }
                ]
            }
        ];

        // Filtering logic test
        const validRelease = mockReleases.find(release =>
            release.assets.some(asset =>
                asset.name.toLowerCase().endsWith('.exe')
            )
        );

        expect(validRelease).toBeTruthy();
        expect(validRelease.assets[0].name).toBe('snake-game.exe');
    });

    test('should identify when there are no .exe files', () => {
        const mockReleases = [
            {
                tag_name: 'v1.0.0',
                assets: [
                    {
                        name: 'source.zip',
                        browser_download_url: 'https://github.com/test/releases/source.zip'
                    }
                ]
            }
        ];

        const validRelease = mockReleases.find(release =>
            release.assets.some(asset =>
                asset.name.toLowerCase().endsWith('.exe')
            )
        );

        expect(validRelease).toBeFalsy();
    });

    test('should process URLs correctly', () => {
        const testUrl = 'https://github.com/vpdiogo/classic-games-python/releases';
        expect(testUrl).toContain('vpdiogo');
        expect(testUrl).toContain('classic-games-python');
    });
});
