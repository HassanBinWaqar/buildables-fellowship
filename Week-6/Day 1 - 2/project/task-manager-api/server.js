// server.js - starts the app and connects to DB if available
require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

async function start() {
  try {
    if (process.env.MONGO_URI) {
      try {
        await connectDB(process.env.MONGO_URI);
      } catch (err) {
        console.warn('MongoDB connection failed, continuing with in-memory fallback.', err.message || err);
      }
    } else {
      console.log('No MONGO_URI provided; running with in-memory fallback data.');
    }
    server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();
