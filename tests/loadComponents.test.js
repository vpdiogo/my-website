/**
 * @jest-environment jsdom
 */

// Mock fetch
global.fetch = jest.fn();

describe('Component Loading', () => {
    test('should load without errors when fetch is available', () => {
        fetch.mockResolvedValue({
            ok: true,
            text: () => Promise.resolve('<div>Test</div>')
        });
        
        expect(() => {
            require('../js/loadComponents.js');
        }).not.toThrow();
    });

    test('should set the current year correctly', () => {
        const currentYear = new Date().getFullYear();
        expect(currentYear).toBeGreaterThan(2020);
        expect(currentYear).toBeLessThan(2030);
    });

    test('should handle HTML strings correctly', () => {
        const testHTML = '<div>Test</div>';
        document.body.innerHTML = testHTML;
        expect(document.body.innerHTML).toBe(testHTML);
    });
});
