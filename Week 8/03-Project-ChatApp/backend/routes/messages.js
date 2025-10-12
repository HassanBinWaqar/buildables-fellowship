const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

// simple auth middleware for REST endpoints
function auth(req,res,next){
  const auth = req.headers.authorization || '';
  if(!auth.startsWith('Bearer ')) return res.status(401).json({ error: 'no token' });
  const token = auth.split(' ')[1];
  try{
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  }catch(e){ return res.status(401).json({ error: 'invalid token' }); }
}

// GET messages between current user and :userId
router.get('/:userId', auth, async (req,res) => {
  const u1 = req.user.id;
  const u2 = req.params.userId;
  const messages = await Message.find({ $or: [ {from:u1, to:u2}, {from:u2, to:u1} ] }).sort('createdAt');
  res.json(messages);
});

module.exports = router;
