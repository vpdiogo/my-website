module.exports = {
  ci: {
    collect: {
      url: [
        `http://localhost:${process.env.LIGHTHOUSE_PORT || 8000}`,
        `http://localhost:${process.env.LIGHTHOUSE_PORT || 8000}/projects.html`,
        `http://localhost:${process.env.LIGHTHOUSE_PORT || 8000}/gamedev.html`,
        `http://localhost:${process.env.LIGHTHOUSE_PORT || 8000}/blog.html`
      ],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.7}],
        'categories:accessibility': ['error', {minScore: 0.8}],
        'categories:best-practices': ['warn', {minScore: 0.7}],
        'categories:seo': ['warn', {minScore: 0.7}]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
