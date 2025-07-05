// Global setup for tests
global.console = {
    ...console,
    // Silence logs during tests
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
};

// Mock of localStorage
Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
    },
    writable: true,
});
