import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './lib/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

/*
========================================================
🌍 ENV CONFIG
========================================================
Automatically switches between DEV & PRODUCTION
========================================================
*/
const isProduction = process.env.NODE_ENV === 'production';

/*
========================================================
🧠 MIDDLEWARES
========================================================
*/
app.use(express.json());
app.use(cookieParser());

/*
========================================================
🌐 CORS CONFIG (VERY IMPORTANT)
========================================================

DEV:
👉 http://localhost:5173

PRODUCTION:
👉 your Vercel domain

⚠️ credentials: true is required for cookies
========================================================
*/
app.use(
  cors({
    origin: isProduction
      ? 'https://devops-auth-app.vercel.app' // 🔴 change this after deploy
      : 'http://localhost:5173',
    credentials: true,
  }),
);

/*
========================================================
🧪 TEST ROUTES
========================================================
*/
app.get('/', (req, res) => {
  res.send('Server is running ✅');
});

app.get('/api/test', (req, res) => {
  res.send('API is working 🚀');
});

/*
========================================================
📦 ROUTES
========================================================
*/
app.use('/api', authRoutes);

/*
========================================================
🗄️ DATABASE CONNECTION
========================================================
*/
connectDB();

/*
========================================================
🚀 START SERVER
========================================================
*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
});
