# Vitor Diogo - Personal Website

[![Tests](https://github.com/vpdiogo/my-website/workflows/Test%20and%20Deploy/badge.svg)](https://github.com/vpdiogo/my-website/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Personal website developed with HTML, CSS, and vanilla JavaScript, focused on simplicity and performance.

## 🚀 Features

- **Responsive Design**: Adapts to different screen sizes
- **Dark Mode**: Toggle to switch between light and dark themes
- **Dynamic Download**: Integration with GitHub API for automatic downloads
- **Modular Components**: Header and footer loaded dynamically

## 🛠️ Technologies

- HTML5
- CSS3 (with Flexbox)
- JavaScript (ES6+)
- Font Awesome (icons)
- GitHub API

## 📋 Pages

- **About**: Personal and professional information
- **Projects**: Development project portfolio
- **GameDev**: Games developed with downloads
- **Blog**: Articles and posts (in development)

## 🧪 Testing and CI/CD

### Run tests locally

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Validate HTML
npm run validate-html

# Lint CSS
npm run lint:css
```

### Test Structure

- **`tests/loadComponents.test.js`**: Tests header/footer loading
- **`tests/gameDownload.test.js`**: Tests GitHub API integration
- **`tests/darkModeToggle.test.js`**: Tests dark mode functionality

### CI/CD Pipeline

The project uses GitHub Actions for continuous integration:

**Main CI** (`.github/workflows/ci.yml`):
- **Testing**: Jest for unit tests with coverage
- **Validation**: HTML validation and CSS linting
- **Quality**: Code coverage reports uploaded to Codecov

**Deployment**:
- **Automatic**: GitHub Pages deploys from main branch automatically
- **No additional workflow needed**

## 🌐 Local Development

### Option 1: Node.js with Auto-open (Recommended)
```bash
# Install dependencies
npm install

# Start development server (opens browser automatically)
npm run dev

# Access: http://localhost:8000 (opens automatically)
```

### Option 2: Python Server
```bash
# Simple static server
npm start
# or manually:
python3 -m http.server 8000

# Access: http://localhost:8000
```

### Option 3: VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
.
├── assets/
│   └── images/
├── css/
│   └── style.css
├── js/
│   ├── darkModeToggle.js
│   ├── gameDownload.js
│   └── loadComponents.js
├── partials/
│   ├── header.html
│   └── footer.html
├── tests/
│   ├── *.test.js
│   └── setup.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── index.html
├── projects.html
├── gamedev.html
├── blog.html
├── package.json
└── README.md
```

## 🔧 Configuration

### GitHub API Variables

To change the games repository, edit in `js/gameDownload.js`:

```javascript
const repoOwner = 'vpdiogo';
const repoName = 'classic-games-python';
```

### Custom Domain

The `CNAME` file contains the custom domain:
```
vitorpdiogo.com
```

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Email**: contato@vitorpdiogo.com
- **LinkedIn**: [vitorpdiogo](https://linkedin.com/in/vitorpdiogo)
- **GitHub**: [vpdiogo](https://github.com/vpdiogo)