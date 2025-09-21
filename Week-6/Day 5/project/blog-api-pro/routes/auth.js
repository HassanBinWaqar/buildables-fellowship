const express = require('express');
const { body, validationResult } = require('express-validator');
const ctrl = require('../controllers/authController');
const router = express.Router();

router.post('/register', [
  body('name').isLength({ min: 2 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req,res,next) => { const e = validationResult(req); if (!e.isEmpty()) return res.status(400).json({ errors: e.array() }); next(); }
], ctrl.register);

router.post('/login', [
  body('email').isEmail(),
  body('password').exists(),
  (req,res,next) => { const e = validationResult(req); if (!e.isEmpty()) return res.status(400).json({ errors: e.array() }); next(); }
], ctrl.login);

module.exports = router;
