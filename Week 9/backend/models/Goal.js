const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      default: 'user123',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    targetDate: {
      type: Date,
      required: [true, 'Please add a target date'],
    },
    status: {
      type: String,
      enum: ['not-started', 'in-progress', 'completed'],
      default: 'not-started',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);