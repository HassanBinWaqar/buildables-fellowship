/**
 * socket.js - initializes Socket.io and handles real-time events.
 * Auth: expects client to send token in handshake auth { token }
 */
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const Message = require('./models/Message');
const User = require('./models/User');
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

let onlineUsers = new Map(); // userId -> Set(socketId)

function initSocket(server){
  const io = new Server(server, { cors: { origin: '*' }});
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error('no token'));
      const data = jwt.verify(token, JWT_SECRET);
      socket.user = data;
      return next();
    } catch (e) { return next(new Error('auth error')); }
  });

  io.on('connection', (socket)=>{
    const userId = socket.user.id;
    if(!onlineUsers.has(userId)) onlineUsers.set(userId, new Set());
    onlineUsers.get(userId).add(socket.id);
    io.emit('presence', Array.from(onlineUsers.keys()));

    socket.on('send_message', async (payload) => {
      // payload: { to, text }
      const msg = await Message.create({ from: socket.user.id, to: payload.to, text: payload.text });
      // emit to recipient sockets if online
      const recipients = onlineUsers.get(payload.to) || new Set();
      for(const sid of recipients) io.to(sid).emit('receive_message', msg);
      // also emit back to sender for local echo
      socket.emit('receive_message', msg);
    });

    socket.on('disconnect', () => {
      const set = onlineUsers.get(userId);
      if(set){
        set.delete(socket.id);
        if(set.size === 0) onlineUsers.delete(userId);
      }
      io.emit('presence', Array.from(onlineUsers.keys()));
    });
  });
}

module.exports = { initSocket };
