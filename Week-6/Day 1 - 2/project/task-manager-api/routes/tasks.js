// routes/tasks.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/taskController');

router.get('/', ctrl.getAllTasks);
router.get('/:id', ctrl.getTask);
router.post('/', ctrl.createTask);
router.put('/:id', ctrl.updateTask);
router.delete('/:id', ctrl.deleteTask);

module.exports = router;
