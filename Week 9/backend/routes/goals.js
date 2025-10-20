const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// @desc    Get all goals
// @route   GET /api/goals
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const goals = await Goal.find().sort({ createdAt: -1 });
    res.status(200).json(goals);
  } catch (error) {
    res.status(500);
    next(error);
  }
});

// @desc    Get single goal
// @route   GET /api/goals/:id
// @access  Public
router.get('/:id', async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);
    
    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    }
    
    res.status(200).json(goal);
  } catch (error) {
    res.status(404);
    next(error);
  }
});

// @desc    Create new goal
// @route   POST /api/goals
// @access  Public
router.post('/', async (req, res, next) => {
  try {
    const { title, description, targetDate, status } = req.body;

    if (!title || !description || !targetDate) {
      res.status(400);
      throw new Error('Please add all required fields');
    }

    const goal = await Goal.create({
      title,
      description,
      targetDate,
      status: status || 'not-started',
    });

    res.status(201).json(goal);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Public
router.put('/:id', async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Public
router.delete('/:id', async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(404);
      throw new Error('Goal not found');
    }

    await goal.deleteOne();

    res.status(200).json({ id: req.params.id, message: 'Goal deleted successfully' });
  } catch (error) {
    res.status(404);
    next(error);
  }
});

module.exports = router;