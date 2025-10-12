require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const { initSocket } = require('./socket');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_chat_app';

mongoose.connect(MONGO).then(()=> console.log('MongoDB connected')).catch(err=> console.error('Mongo error', err.message));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.get('/api/ping', (req,res)=> res.json({ok:true}));

const server = http.createServer(app);
initSocket(server); // attach socket.io

server.listen(PORT, ()=> console.log('Server running on', PORT));
