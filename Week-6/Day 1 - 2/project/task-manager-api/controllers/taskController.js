// controllers/taskController.js
const Task = require('../models/taskModel');

// In-memory fallback if DB is not connected (simple array)
let fallbackTasks = [];

exports.getAllTasks = async (req, res, next) => {
  try {
    if (Task.isFake) return res.json(fallbackTasks);
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.getTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (Task.isFake) {
      const t = fallbackTasks.find(x => String(x.id) === String(id));
      if (!t) return res.status(404).json({ message: 'Task not found' });
      return res.json(t);
    }
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const payload = { title: req.body.title, completed: req.body.completed || false };
    if (Task.isFake) {
      const newTask = { id: fallbackTasks.length + 1, ...payload };
      fallbackTasks.push(newTask);
      return res.status(201).json(newTask);
    }
    const task = await Task.create(payload);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (Task.isFake) {
      const idx = fallbackTasks.findIndex(x => String(x.id) === String(id));
      if (idx === -1) return res.status(404).json({ message: 'Task not found' });
      fallbackTasks[idx] = { ...fallbackTasks[idx], ...req.body };
      return res.json(fallbackTasks[idx]);
    }
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (Task.isFake) {
      fallbackTasks = fallbackTasks.filter(x => String(x.id) !== String(id));
      return res.json({ message: 'Deleted (fallback)' });
    }
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
