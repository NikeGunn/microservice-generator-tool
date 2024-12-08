# Microservices Template

This is a generated microservices template using the `microgen` CLI tool. It provides a structured and production-ready foundation for building scalable microservices.

## Features
- **Preconfigured Docker support** for containerization.
- **Kubernetes manifests** for deployment.
- **Environment variable management** with `.env`.
- **Integrated logging** (Winston for Node.js, logrus for Go).
- **Scalable architecture** with templates for REST APIs.

## Getting Started

### Prerequisites
- Docker installed on your system.
- Kubernetes cluster set up (optional).
- Node.js v16+ or Go installed (depending on the microservice language).

### Commands
1. Initialize a new microservices project:
   ```bash
   microgen init
   ```
   This creates basic project files like .gitignore and README.md.

2. Generate a microservices template:
   ```bash
   microgen generate -l <language>
   ```
   Replace `<language>` with either `nodejs` or `go`.

## Running Locally

### Node.js
1. Navigate to the nodejs folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

### Go
1. Navigate to the go folder.
2. Run the application:
   ```bash
   go run main.go
   ```

## Deployment

### Docker
Build and run the microservice using Docker:

```bash
docker build -t microservice .

docker run -p 8080:8080 microservice
