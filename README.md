🚀 Full Stack Auth App with DevOps

<p align="center"> <img src="https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" /> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" /> </p><p align="center"> <b>A production-ready authentication system with modern DevOps practices</b> </p>

✨ Overview

A complete full-stack authentication system that demonstrates secure user management combined with industry-standard DevOps practices. Perfect for learning modern web development and deployment workflows.
🎯 What This Project Demonstrates
Area Technologies & Practices
Frontend React 18, Vite, Tailwind CSS, Zustand, React Router
Backend Node.js, Express, MongoDB, JWT, bcrypt
Security httpOnly cookies, password hashing, protected routes
DevOps Docker, Docker Compose, Jenkins CI/CD
State Management Zustand with persistent auth state
📋 Table of Contents

    Features

    Tech Stack

    Quick Start

    Project Structure

    Environment Setup

    Docker Deployment

    Jenkins Pipeline

    Authentication Flow

    API Documentation

    Troubleshooting

    Roadmap

🌟 Features
🔐 Authentication

    User registration with email/password

    Secure login with JWT tokens

    Protected routes and API endpoints

    Persistent login sessions

    Secure logout

🛡️ Security

    Passwords hashed with bcrypt

    JWT stored in httpOnly cookies

    CORS properly configured

    Environment-based security settings

🎨 Frontend

    Responsive design with Tailwind CSS

    Form validation and error handling

    Loading states and user feedback

    Protected route navigation

⚙️ DevOps

    Docker containerization

    Multi-container orchestration

    Jenkins CI/CD pipeline

    Environment-based configuration

🚀 Quick Start
Prerequisites

    Node.js 18+

    MongoDB (local or Atlas)

    Docker (optional)

    Git

# Clone and run in one go

git clone https://github.com/your-username/your-repo.git && \
cd your-repo && \
npm run install:all && \
npm run dev

Manual Setup
1️⃣ Clone Repository
bash

git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Install Dependencies
bash

# Install backend dependencies

cd backend && npm install

# Install frontend dependencies

cd ../frontend && npm install

3️⃣ Configure Environment

Create .env files as shown in the Environment Setup section.
4️⃣ Start Development Servers
bash

# Terminal 1: Start backend

cd backend && npm run dev

# Terminal 2: Start frontend

cd frontend && npm run dev

5️⃣ Access Application

    Frontend: http://localhost:5173

    Backend API: http://localhost:3000/api

📁 Project Structure
text

📦 fullstack-auth-app
├── 📂 backend
│ ├── 📂 controller # Request handlers
│ ├── 📂 models # Database models
│ ├── 📂 routes # API routes
│ ├── 📂 middleware # Auth middleware
│ ├── 📂 lib # Utilities
│ ├── 📄 server.js # Entry point
│ └── 📄 Dockerfile # Backend Docker config
│
├── 📂 frontend
│ ├── 📂 src
│ │ ├── 📂 components # React components
│ │ ├── 📂 pages # Page components
│ │ ├── 📂 store # Zustand state
│ │ └── 📂 utils # Helpers
│ ├── 📄 Dockerfile # Frontend Docker config
│ └── 📄 vite.config.js # Vite configuration
│
├── 📄 docker-compose.yml # Multi-container setup
├── 📄 Jenkinsfile # CI/CD pipeline
└── 📄 README.md

🔧 Environment Setup
Backend (.env)
env

# Server Configuration

PORT=3000
NODE_ENV=development

# Database

MONGO_URL=mongodb://localhost:27017/authdb

# Security

JWT_SECRET=your_super_secret_key_here_change_in_production

Frontend (.env)
env

# Development

VITE_API_URL=http://localhost:3000/api

# Production (use your deployed backend URL)

# VITE_API_URL=https://your-backend.onrender.com/api

Production Security Settings
javascript

// Cookie configuration based on environment
const cookieOptions = {
httpOnly: true,
secure: process.env.NODE*ENV === 'production', // HTTPS only in production
sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
maxAge: 7 * 24 _ 60 _ 60 \_ 1000 // 7 days
};

🐳 Docker Deployment
Using Docker Compose (Recommended)
bash

# Build and start all services

docker-compose up --build

# Run in background

docker-compose up -d

# View logs

docker-compose logs -f

# Stop all services

docker-compose down

Manual Docker Commands
bash

# Build images

docker build -t auth-backend ./backend
docker build -t auth-frontend ./frontend

# Run containers

docker run -p 3000:3000 auth-backend
docker run -p 5173:5173 auth-frontend

Docker Compose Configuration
yaml

services:
backend:
build: ./backend
ports: - "3000:3000"
environment: - MONGO_URL=mongodb://mongo:27017/authdb
depends_on: - mongo

frontend:
build: ./frontend
ports: - "5173:5173"
depends_on: - backend

mongo:
image: mongo:6
volumes: - mongo-data:/data/db

⚙️ Jenkins Pipeline
Pipeline Stages
groovy

pipeline {
agent any

    stages {
        stage('📥 Checkout') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('📦 Install Dependencies') {
            parallel {
                stage('Backend') {
                    steps {
                        dir('backend') { sh 'npm install' }
                    }
                }
                stage('Frontend') {
                    steps {
                        dir('frontend') { sh 'npm install' }
                    }
                }
            }
        }

        stage('🐳 Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('🚀 Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

}

Jenkins Setup Guide

    Install Jenkins with Docker plugin

    Add Credentials (Manage Jenkins → Credentials):

        MONGO_URL - MongoDB connection string

        JWT_SECRET - Secret for JWT tokens

    Create Pipeline:

        New Item → Pipeline

        Select "Pipeline script from SCM"

        Point to your repository

📡 API Documentation
Authentication Endpoints
Method Endpoint Description Request Body Response
POST /api/auth/register Create account {email, password, name} User object
POST /api/auth/login Login user {email, password} User object
POST /api/auth/logout Logout user - Success message
GET /api/auth/profile Get profile - User profile
Example Requests
javascript

// Register
fetch('/api/auth/register', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
email: 'user@example.com',
password: 'SecurePass123',
name: 'John Doe'
})
});

// Login (cookie will be set automatically)
fetch('/api/auth/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
credentials: 'include', // Important for cookies
body: JSON.stringify({
email: 'user@example.com',
password: 'SecurePass123'
})
});

🔍 Troubleshooting
Common Issues & Solutions
🟡 MongoDB Connection Issues

Problem: MongooseServerSelectionError: connect ECONNREFUSED

Solutions:
bash

# Local MongoDB

mongodb://localhost:27017/authdb

# Docker MongoDB

mongodb://host.docker.internal:27017/authdb

# MongoDB Atlas

mongodb+srv://username:password@cluster.mongodb.net/authdb

🟡 CORS Errors

Problem: Access-Control-Allow-Origin missing

Solution in backend:
javascript

const corsOptions = {
origin: process.env.FRONTEND_URL || 'http://localhost:5173',
credentials: true,
optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

🟡 Cookies Not Working

Checklist:

    ✅ credentials: 'include' in frontend requests

    ✅ CORS credentials: true in backend

    ✅ SameSite and Secure settings match environment

    ✅ Cookie domain matches (localhost vs production)

🟡 JWT Verification Failed
javascript

// Check JWT_SECRET consistency
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('Token received:', !!req.cookies.token);

🗺️ Roadmap
✅ Completed

    Basic authentication (register/login/logout)

    JWT with httpOnly cookies

    Protected routes

    Docker containerization

    Jenkins pipeline

🔜 In Progress

    Email verification

    Password reset functionality

    Rate limiting

    Unit tests

📅 Future Plans

    Refresh tokens

    OAuth (Google, GitHub)

    Two-factor authentication

    Kubernetes deployment

    GitHub Actions CI/CD

    Monitoring with Prometheus/Grafana

📚 Learning Resources
Authentication

    JWT.io Introduction

    httpOnly Cookies Explained

DevOps

    Docker Getting Started

    Jenkins Handbook

    Docker Compose Guide

Full Stack

    MERN Stack Tutorial

    React with Vite

👨‍💻 Author

Amit
Full Stack Developer & DevOps Enthusiast

    🌐 Portfolio

    💼 LinkedIn

    🐙 GitHub

🙏 Acknowledgments

    MongoDB for database

    React team for amazing frontend library

    Docker for containerization

    Jenkins community for CI/CD tools

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

<p align="center"> Made with ❤️ by Amit <br> ⭐ Star this repo if you found it helpful! </p>
