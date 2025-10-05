const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Verify token middleware
exports.verifyToken = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Optionally fetch full user from DB
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid or Expired Token' });
  }
};

// Role based access (example)
exports.requireRole = (role) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  if (req.user.role !== role) return res.status(403).json({ message: 'Forbidden: Insufficient role' });
  next();
};
