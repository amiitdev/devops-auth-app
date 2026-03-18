# 🚀 Full Stack Auth App with DevOps (Docker + Jenkins)

A complete **MERN-style authentication system** with:

- 🔐 Secure authentication (JWT + Cookies)
- ⚛️ React + Vite frontend
- 🟢 Node.js + Express backend
- 🍃 MongoDB database
- 🐳 Docker containerization
- ⚙️ Jenkins CI/CD pipeline

---

# 📌 Features

- ✅ User Registration & Login
- ✅ Password hashing with bcrypt
- ✅ JWT authentication (httpOnly cookies)
- ✅ Protected routes
- ✅ Logout functionality
- ✅ Zustand state management (frontend)
- ✅ Fully responsive UI (Tailwind CSS)
- ✅ Dev & Production ready config
- ✅ Dockerized fullstack app
- ✅ Jenkins automated pipeline

---

# 🧱 Tech Stack

## Frontend
- React (Vite)
- Tailwind CSS
- Zustand
- Axios
- React Router

## Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- cors

## DevOps
- Docker
- Docker Compose
- Jenkins

---

# 📁 Project Structure
Jenkins Project/
│
├── backend/
│ ├── controller/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── lib/
│ ├── Dockerfile
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── store/
│ ├── Dockerfile
│ └── vite.config.js
│
├── docker-compose.yml
├── Jenkinsfile
└── README.md


---

# ⚙️ Environment Variables

## Backend (.env)


PORT=3000
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
NODE_ENV=development


---

## Frontend (.env)


VITE_API_URL=http://localhost:3000/api


---

## Production (Vercel / Render)


VITE_API_URL=https://your-backend-url.onrender.com/api


---

# 🚀 Local Development Setup

## 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
2️⃣ Install Dependencies
cd backend
npm install

cd ../frontend
npm install
3️⃣ Run Backend
cd backend
npm run dev
4️⃣ Run Frontend
cd frontend
npm run dev
🌐 App URLs

Frontend → http://localhost:5173

Backend → http://localhost:3000

🐳 Docker Setup
Build & Run
docker-compose build
docker-compose up
Access App

Frontend → http://localhost:5173

Backend → http://localhost:3000/api/test

⚙️ Jenkins CI/CD Pipeline
Steps Performed

📥 Clone repository

📦 Install dependencies

🐳 Build Docker images

🚀 Run containers

🔐 Inject environment variables

Jenkins Setup

Go to: Manage Jenkins → Credentials

Add:

MONGO_URL

JWT_SECRET

Run Pipeline
Build Now
🔐 Authentication Flow
Register → Hash Password → Save User
Login → Compare Password → Generate JWT → Store Cookie
Protected Route → Verify JWT → Get User
Logout → Clear Cookie
🍪 Cookie Configuration
Environment	secure	sameSite
Dev	false	lax
Prod	true	none
🌐 CORS Configuration
cors({
  origin: FRONTEND_URL,
  credentials: true
})
⚠️ Common Issues
❌ MongoDB not connecting

Use:

mongodb://host.docker.internal:27017/authDB

or MongoDB Atlas

❌ Cookies not working

Check credentials: true

Check sameSite and secure

❌ CORS Error

Do not use origin: '*'

❌ Wrong API URL

Fix VITE_API_URL

🚀 Deployment
Frontend

Vercel

Backend

Render / Railway / AWS

📈 Future Improvements

🔐 Refresh tokens

📦 Docker Hub integration

☁️ AWS / EC2 deployment

🧪 Unit & integration testing

🔄 GitHub Actions CI/CD

💪 Learning Outcomes

Fullstack authentication system

JWT + Cookies security

Docker containerization

Jenkins CI/CD pipeline

Environment-based configuration

👨‍💻 Author

Amit
Engineer | Full Stack Developer | DevOps Learner 🚀
