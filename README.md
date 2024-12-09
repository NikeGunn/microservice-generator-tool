<div align="center">

# 🚀 DevBoost CLI

<img src="https://github.com/NikeGunn/imagess/blob/main/devboost-future.gif?raw=true" alt="DevBoost CLI" width="400"/>

[![Version](https://img.shields.io/badge/VERSION-2.0.6-6C5CE7?style=for-the-badge&logo=v&logoColor=white)](https://github.com/yourusername/devboost-cli)
[![License](https://img.shields.io/badge/LICENSE-MIT-00B894?style=for-the-badge&logo=l&logoColor=white)](./LICENSE)
[![Node](https://img.shields.io/badge/NODE-%3E%3D16.0.0-81ECEC?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

# 🚀 Your Ultimate Productivity Booster for Developers

Simplifying day-to-day development tasks with a modern, feature-rich CLI tool.

</div>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#commands">Commands</a> •
  <a href="#examples">Examples</a> •
  <a href="#contributing">Contributing</a>
</p>

## 🌟 Features

```
╭──────────────────────────────────────────────╮
│ ⚡ Project Scaffolding                      │
│ 📦 Dependency Management                    │
│ 🔧 Environment Management                   │
│ 🔄 Git Workflow Automation                  │
│ 🧪 API Testing Suite                        │
│ 📊 Monitoring & Analytics                   │
╰──────────────────────────────────────────────╯
```

## 🛠 Installation

```bash
# Install globally
npm install -g devboost-cli

# Verify installation
devboost --version
```

## 📖 Commands

### 🚀 Project Scaffolding

```bash
# Create a new React project
devboost init react --typescript --directory my-app

# Generate components with ease
devboost generate component MyComponent
```

### 📦 Dependency Management

```bash
# Add dependencies
devboost add axios
devboost add jest --dev

# Remove dependencies
devboost remove lodash

# Update all dependencies
devboost update
```

### 🔧 Environment Management

```bash
# Set environment variables
devboost env set API_URL=https://api.example.com

# List current environment variables
devboost env list

# Switch between environments
devboost env switch development
```

### 🔄 Git Workflow Automation

```bash
# Check git status
devboost git status

# Create a new branch
devboost git --branch feature/new-feature

# Commit with a custom message
devboost git --commit "feat: add new feature"

# Push changes to the remote repository
devboost git --push
```

### 🧪 API Testing

```bash
# Test GET request
devboost api --url https://api.example.com/users --method GET

# Test POST request with payload
devboost api --url https://api.example.com/users \
  --method POST \
  --data '{"name": "John Doe", "email": "john.doe@example.com"}' \
  --headers '{"Content-Type": "application/json"}'
```

## 🏗 Project Structure

```
devboost-cli/
├── src/
│   ├── commands/          # Command implementations
│   │   ├── api.js          # API operations
│   │   ├── dependency.js   # Package management
│   │   ├── env.js          # Environment configuration
│   │   ├── git.js          # Git commands
│   │   ├── init.js         # Project scaffolding
│   │   └── index.js        # Command registry
│   └── core/              # Core logic
│       ├── utils.js        # Helper functions
│       └── config.js       # Configuration settings
└── package.json           # Project metadata
```

## ⚙️ Error Handling

```javascript
try {
  await executeCommand(command);
} catch (error) {
  console.error(`[ERROR] ${error.message}`);
  process.exit(1);
}
```

## 📦 Dependencies

```json
{
  "@angular/cli": "^19.0.2",
  "@angular/core": "^19.0.1",
  "axios": "^1.7.8",
  "chalk": "^5.3.0",
  "commander": "^9.5.0",
  "dotenv": "^16.4.6",
  "fs-extra": "^11.1.0",
  "inquirer": "^9.2.3",
  "ora": "^6.3.0",
  "react": "^18.3.1"
}
```

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/awesome-feature`
3. Commit your changes: `git commit -m "feat: add awesome feature"`
4. Push to your branch: `git push origin feature/awesome-feature`
5. Create a Pull Request

## 📜 License

This project is licensed under the MIT License.

---

<div align="center">

✨ Built with ❤️ for developers by developers. ✨

Achieve more, code less.

</div>