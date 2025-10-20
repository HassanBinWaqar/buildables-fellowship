import React from 'react';
import './GoalItem.css';

const GoalItem = ({ goal, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-in-progress';
      case 'not-started':
        return 'status-not-started';
      default:
        return '';
    }
  };

  const getStatusEmoji = (status) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🔄';
      case 'not-started':
        return '⏸️';
      default:
        return '📌';
    }
  };

  const formatStatus = (status) => {
    return status
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className={`goal-item ${getStatusClass(goal.status)}`}>
      <div className="goal-header">
        <div className={`status-badge ${getStatusClass(goal.status)}`}>
          {getStatusEmoji(goal.status)} {formatStatus(goal.status)}
        </div>
      </div>

      <div className="goal-content">
        <h3 className="goal-title">{goal.title}</h3>
        <p className="goal-description">{goal.description}</p>

        <div className="goal-meta">
          <div className="meta-item">
            <span className="meta-label">🎯 Target:</span>
            <span className="meta-value">{formatDate(goal.targetDate)}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">📅 Created:</span>
            <span className="meta-value">{formatDate(goal.createdAt)}</span>
          </div>
        </div>
      </div>

      <div className="goal-actions">
        <button className="edit-btn" onClick={() => onEdit(goal)}>
          ✏️ Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(goal._id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default GoalItem;