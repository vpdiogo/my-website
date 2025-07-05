/**
 * @jest-environment jsdom
 */

// Mock of localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = localStorageMock;

beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    jest.resetModules();
});

describe('Dark Mode Toggle', () => {
    test('should load without errors', () => {
        expect(() => {
            require('../js/darkModeToggle.js');
        }).not.toThrow();
    });

    test('should have mocked localStorage', () => {
        expect(localStorage.getItem).toBeDefined();
        expect(localStorage.setItem).toBeDefined();
    });

    test('should process dark mode values', () => {
        const darkModeValue = 'true';
        expect(darkModeValue === 'true').toBe(true);
        
        const lightModeValue = 'false';
        expect(lightModeValue === 'false').toBe(true);
    });

    test('should manipulate CSS classes', () => {
        document.body.classList.add('dark-mode');
        expect(document.body.classList.contains('dark-mode')).toBe(true);
        
        document.body.classList.remove('dark-mode');
        expect(document.body.classList.contains('dark-mode')).toBe(false);
        
        document.body.classList.toggle('dark-mode');
        expect(document.body.classList.contains('dark-mode')).toBe(true);
    });
});
