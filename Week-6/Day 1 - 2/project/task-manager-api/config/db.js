// config/db.js
const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) return Promise.reject(new Error('MONGO_URI not provided'));
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');
}

module.exports = connectDB;
