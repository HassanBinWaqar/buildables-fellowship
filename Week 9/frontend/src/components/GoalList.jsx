import React from 'react';
import GoalItem from './GoalItem';
import './GoalList.css';

const GoalList = ({ goals, onEdit, onDelete }) => {
  if (goals.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🎯</div>
        <h3>No Goals Found</h3>
        <p>Start by creating your first goal above!</p>
      </div>
    );
  }

  return (
    <div className="goal-list">
      <h2>📋 Your Goals ({goals.length})</h2>
      <div className="goals-grid">
        {goals.map((goal) => (
          <GoalItem
            key={goal._id}
            goal={goal}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalList;