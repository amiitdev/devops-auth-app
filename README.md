# 🚀 Full Stack Auth App with DevOps

![Node](https://img.shields.io/badge/Node.js-20-green)
![React](https://img.shields.io/badge/React-Vite-blue)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-red)

A production-ready full-stack authentication system with modern DevOps practices.

---

## ✨ Overview

This project demonstrates:

- 🔐 Secure authentication using JWT + httpOnly cookies  
- ⚛️ React frontend (Vite)  
- 🟢 Node.js + Express backend  
- 🍃 MongoDB database  
- 🐳 Docker containerization  
- ⚙️ Jenkins CI/CD pipeline  

---

## 🌟 Features

### 🔐 Authentication
- User registration  
- Secure login with JWT  
- Protected routes  
- Persistent session  
- Logout  

### 🛡️ Security
- Password hashing (bcrypt)  
- httpOnly cookies  
- CORS protection  
- Environment-based config  

### 🎨 Frontend
- Responsive UI (Tailwind CSS)  
- Form validation  
- Loading states  
- Zustand state management  

### ⚙️ DevOps
- Docker containerization  
- Docker Compose  
- Jenkins CI/CD  
- Env-based config  

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Zustand
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- cookie-parser
- cors

### DevOps
- Docker
- Docker Compose
- Jenkins

---

## 📁 Project Structure

    backend/
    ├── controller/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── lib/
    ├── Dockerfile
    └── server.js

    frontend/
    ├── src/
    ├── components/
    ├── store/
    ├── Dockerfile
    └── vite.config.js

    docker-compose.yml
    Jenkinsfile
    README.md

---

## ⚙️ Environment Setup

### Backend (.env)

    PORT=3000
    MONGO_URL=mongodb://localhost:27017/authdb
    JWT_SECRET=your_secret_key
    NODE_ENV=development

### Frontend (.env)

    VITE_API_URL=http://localhost:3000/api

### Production

    VITE_API_URL=https://your-backend.onrender.com/api

---

## 🚀 Local Development

### 1️⃣ Clone Repository

    git clone https://github.com/your-username/your-repo.git
    cd your-repo

### 2️⃣ Install Dependencies

    cd backend
    npm install

    cd ../frontend
    npm install

### 3️⃣ Run Backend

    cd backend
    npm run dev

### 4️⃣ Run Frontend

    cd frontend
    npm run dev

---

## 🌐 App URLs

- Frontend → http://localhost:5173  
- Backend → http://localhost:3000  

---

## 🐳 Docker Setup

### Build & Run

    docker-compose up --build

### Run in Background

    docker-compose up -d

### Stop Services

    docker-compose down

---

## ⚙️ Jenkins CI/CD Pipeline

### Pipeline Steps

- Clone repository  
- Install dependencies  
- Build Docker images  
- Run containers  
- Inject environment variables  

### Jenkins Setup

- Go to: Manage Jenkins → Credentials
- Add:
  - MONGO_URL
  - JWT_SECRET

### Run Pipeline

    Build Now

---

## 🔐 Authentication Flow

    Register → Hash Password → Save User  
    Login → Compare Password → Generate JWT → Store Cookie  
    Protected Route → Verify JWT → Get User  
    Logout → Clear Cookie  

---

## 🍪 Cookie Configuration

| Environment | secure | sameSite |
|------------|--------|----------|
| Dev        | false  | lax      |
| Prod       | true   | none     |

---

## 🌐 CORS Configuration

    cors({
      origin: FRONTEND_URL,
      credentials: true
    })

---

## ⚠️ Troubleshooting

### MongoDB Issue

    mongodb://host.docker.internal:27017/authdb

### Cookies Not Working

- Use credentials: true  
- Check sameSite & secure  

### CORS Error

- Do NOT use origin: '*'  

### Wrong API URL

- Fix VITE_API_URL  

---

## 🚀 Deployment

### Frontend
- Vercel

### Backend
- Render / Railway / AWS

---

## 📈 Future Improvements

- Refresh tokens  
- Docker Hub integration  
- AWS deployment  
- Unit testing  
- GitHub Actions  

---

## 👨‍💻 Author

**Amit**  
Full Stack Developer | DevOps Learner 🚀  

---

## ⭐ Support

If you like this project:

- ⭐ Star the repo  
- 🔁 Share it  
- 🚀 Keep building  
