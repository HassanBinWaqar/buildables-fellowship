import React, { useState } from 'react';
import './EditGoal.css';

const EditGoal = ({ goal, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    title: goal.title,
    description: goal.description,
    targetDate: goal.targetDate.split('T')[0],
    status: goal.status,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    onUpdate(goal._id, formData);
  };

  return (
    <div className="edit-goal-container">
      <h2>✏️ Edit Goal</h2>
      <form onSubmit={handleSubmit} className="edit-goal-form">
        <div className="form-group">
          <label htmlFor="title">Goal Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
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

        <div className="form-actions">
          <button type="submit" className="update-btn">
            💾 Update Goal
          </button>
          <button type="button" className="cancel-btn" onClick={onCancel}>
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGoal;