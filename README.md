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

The project uses GitHub Actions with two workflows:

1. **Main CI/CD** (`.github/workflows/ci.yml`):
   - **Testing**: Jest for unit tests
   - **Validation**: HTML and CSS linting  
   - **Coverage**: Code coverage reports
   - **Deploy**: Automatic to GitHub Pages (main branch only)

2. **Lighthouse Performance** (`.github/workflows/lighthouse.yml`):
   - **Manual/Weekly execution**
   - **Performance metrics** and accessibility
   - **Independent** from main deployment

## 🌐 Local Development

### Option 1: Python (Recommended)
```bash
cd /path/to/project
python3 -m http.server 8000
# Access: http://localhost:8000
```

### Option 2: Node.js (Live Reload)
```bash
npm install -g live-server
cd /path/to/project
live-server
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