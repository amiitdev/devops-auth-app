import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/*
========================================================
🌍 GLOBAL CONFIG (AUTO ENV SWITCH)
========================================================
👉 Automatically handles DEV + PRODUCTION

DEV:
- secure: false
- sameSite: 'lax'

PRODUCTION (Vercel + Render):
- secure: true
- sameSite: 'none'
========================================================
*/
const isProduction = process.env.NODE_ENV === 'production';

/*
========================================================
🧠 REGISTER USER
========================================================
Flow:
1. Validate input
2. Check existing user
3. Hash password
4. Save user
========================================================
*/
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 🛑 Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // 🔍 Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 💾 Save user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ error: 'Error registering user' });
  }
};

/*
========================================================
🔐 LOGIN USER
========================================================
Flow:
1. Validate input
2. Find user
3. Compare password
4. Generate JWT
5. Set cookie (AUTO ENV CONFIG)
========================================================
*/
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🛑 Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // 🔍 Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 🔐 Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 🎟️ Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    /*
    ========================================================
    🍪 COOKIE CONFIG (AUTO SWITCH)
    ========================================================

    httpOnly → prevents JS access (XSS protection)

    secure:
    - false → dev (http)
    - true  → production (https)

    sameSite:
    - 'lax'  → dev (localhost cross-port)
    - 'none' → production (cross-domain)

    ========================================================
    */
    res.cookie('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // ✅ Response
    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ error: 'Error logging in user' });
  }
};

/*
========================================================
🚪 LOGOUT USER
========================================================
Flow:
1. Clear cookie using SAME config
========================================================
*/
export const logOutUser = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
    });

    res.status(200).json({ message: 'User logged out successfully' });
  } catch (err) {
    console.error('Logout Error:', err);
    res.status(500).json({ error: 'Error logging out user' });
  }
};

/*
========================================================
👤 GET CURRENT USER (PROTECTED)
========================================================
Flow:
1. Middleware sets req.userId
2. Fetch user (exclude password)
========================================================
*/
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error('GetUser Error:', err);
    res.status(500).json({ error: 'Error fetching user' });
  }
};
