// app.js - express app configuration
const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => res.send('Task Manager API - Express (Week 6 Project)'));

// API routes
app.use('/api/tasks', tasksRouter);

// 404
app.use((req, res, next) => res.status(404).json({ message: 'Route not found' }));

// Error handler
app.use(errorHandler);

module.exports = app;
