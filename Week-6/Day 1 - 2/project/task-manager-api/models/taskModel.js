// models/taskModel.js
// This file defines a Mongoose model when mongoose is available.
// If you don't have MongoDB, the app will fallback to an in-memory array (Task.isFake = true).

let Task = { isFake: true };

try {
  const mongoose = require('mongoose');
  const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

  Task = mongoose.model('Task', taskSchema);
  Task.isFake = false;
} catch (err) {
  // mongoose not installed or not available; keep fallback
  Task.isFake = true;
}

module.exports = Task;
