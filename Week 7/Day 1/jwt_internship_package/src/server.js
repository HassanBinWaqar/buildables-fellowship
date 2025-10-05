require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Basic health check
app.get('/', (req, res) => res.send('JWT Auth API is running'));

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("MONGO_URI not set. Server will still run but DB operations will fail.");
    } else {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    }
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
