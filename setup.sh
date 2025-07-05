#!/bin/bash

echo "🚀 Setting up development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Check if Python3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 not found. Please install Python3 first."
    exit 1
fi

echo "✅ Node.js and Python3 found"

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Error installing dependencies"
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm test

if [ $? -eq 0 ]; then
    echo "✅ All tests passed"
else
    echo "⚠️  Some tests failed, but the project can continue"
fi

# Run HTML validation
echo "🔍 Validating HTML..."
npm run validate-html

echo "🎉 Setup completed!"
echo ""
echo "📋 Available commands:"
echo "  npm test              - Run tests"
echo "  npm run test:watch    - Run tests in watch mode"
echo "  npm run test:coverage - Run tests with coverage"
echo "  npm run serve         - Start local server"
echo "  npm run validate-html - Validate HTML"
echo "  npm run lint:css      - Lint CSS"
echo ""
echo "🌐 To test locally:"
echo "  npm run serve"
echo "  Then access: http://localhost:8000"
