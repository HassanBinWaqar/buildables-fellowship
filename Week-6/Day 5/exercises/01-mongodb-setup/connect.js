// connect.js - connect using mongoose and MongoClient (examples)
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

async function mongooseConnect(uri) {
  try {
    await mongoose.connect(uri);
    console.log('Mongoose connected');
    await mongoose.connection.close();
  } catch (err) {
    console.error('Mongoose connect failed:', err.message);
  }
}

async function mongoClientConnect(uri) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('MongoClient connected');
    await client.db('admin').command({ ping: 1 });
  } catch (err) {
    console.error('MongoClient connect failed:', err.message);
  } finally {
    await client.close();
  }
}

// Usage: set MONGO_URI env and run the file with node
module.exports = { mongooseConnect, mongoClientConnect };