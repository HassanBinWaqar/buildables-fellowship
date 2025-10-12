const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

// Register
router.post('/register', async (req,res) => {
  try{
    const { name, email, password } = req.body;
    if(!email || !password || !name) return res.status(400).json({ error: 'name,email,password required' });
    const exists = await User.findOne({ email });
    if(exists) return res.status(400).json({ error: 'user exists' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash: hash });
    res.json({ id: user._id, email: user.email, name: user.name });
  }catch(e){ res.status(500).json({ error: e.message }); }
});

// Login
router.post('/login', async (req,res) => {
  try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ error: 'invalid' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if(!ok) return res.status(400).json({ error: 'invalid' });
    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '8h' });
    res.json({ token });
  }catch(e){ res.status(500).json({ error: e.message }); }
});

module.exports = router;
