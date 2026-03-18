import express from 'express';
import {
  getUser,
  loginUser,
  logOutUser,
  registerUser,
} from '../controller/auth.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logOutUser);

router.get('/user', authenticateUser, getUser);

export default router;
