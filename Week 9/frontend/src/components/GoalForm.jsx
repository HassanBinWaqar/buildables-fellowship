import React, { useState } from 'react';
import './GoalForm.css';

const GoalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targetDate: '',
    status: 'not-started',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.targetDate) {
      newErrors.targetDate = 'Target date is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);

    // Reset form
    setFormData({
      title: '',
      description: '',
      targetDate: '',
      status: 'not-started',
    });
    setErrors({});
  };

  return (
    <div className="goal-form-container">
      <h2>📝 Create New Goal</h2>
      <form onSubmit={handleSubmit} className="goal-form">
        <div className="form-group">
          <label htmlFor="title">Goal Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter your goal title"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your goal in detail"
            rows="4"
            className={errors.description ? 'error' : ''}
          />
          {errors.description && (
            <span className="error-text">{errors.description}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="targetDate">Target Date *</label>
            <input
              type="date"
              id="targetDate"
              name="targetDate"
              value={formData.targetDate}
              onChange={handleChange}
              className={errors.targetDate ? 'error' : ''}
            />
            {errors.targetDate && (
              <span className="error-text">{errors.targetDate}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          ➕ Add Goal
        </button>
      </form>
    </div>
  );
};

export default GoalForm;