const express = require('express');
const router = express.Router();
const { register, login, profile, adminOnly } = require('../controllers/authController');
const { verifyToken, requireRole } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', verifyToken, profile);
router.get('/admin-only', verifyToken, requireRole('admin'), adminOnly);

module.exports = router;
