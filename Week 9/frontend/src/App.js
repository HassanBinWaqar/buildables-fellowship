import React, { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import EditGoal from './components/EditGoal';
import { getGoals, createGoal, updateGoal, deleteGoal } from './services/goalService';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingGoal, setEditingGoal] = useState(null);
  const [filter, setFilter] = useState('all');

  // Fetch goals on component mount
  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      setLoading(true);
      const data = await getGoals();
      setGoals(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch goals. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGoal = async (goalData) => {
    try {
      const newGoal = await createGoal(goalData);
      setGoals([newGoal, ...goals]);
      setError('');
    } catch (err) {
      setError('Failed to create goal. Please try again.');
      console.error(err);
    }
  };

  const handleUpdateGoal = async (id, goalData) => {
    try {
      const updatedGoal = await updateGoal(id, goalData);
      setGoals(goals.map((goal) => (goal._id === id ? updatedGoal : goal)));
      setEditingGoal(null);
      setError('');
    } catch (err) {
      setError('Failed to update goal. Please try again.');
      console.error(err);
    }
  };

  const handleDeleteGoal = async (id) => {
    if (window.confirm('Are you sure you want to delete this goal?')) {
      try {
        await deleteGoal(id);
        setGoals(goals.filter((goal) => goal._id !== id));
        setError('');
      } catch (err) {
        setError('Failed to delete goal. Please try again.');
        console.error(err);
      }
    }
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
  };

  const handleCancelEdit = () => {
    setEditingGoal(null);
  };

  // Filter goals based on status
  const filteredGoals = goals.filter((goal) => {
    if (filter === 'all') return true;
    return goal.status === filter;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎯 Goal Tracking App</h1>
        <p>Track your goals and achieve success!</p>
      </header>

      <main className="app-container">
        {error && <div className="error-message">{error}</div>}

        {editingGoal ? (
          <EditGoal
            goal={editingGoal}
            onUpdate={handleUpdateGoal}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <GoalForm onSubmit={handleCreateGoal} />

            <div className="filter-section">
              <h3>Filter Goals:</h3>
              <div className="filter-buttons">
                <button
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button
                  className={filter === 'not-started' ? 'active' : ''}
                  onClick={() => setFilter('not-started')}
                >
                  Not Started
                </button>
                <button
                  className={filter === 'in-progress' ? 'active' : ''}
                  onClick={() => setFilter('in-progress')}
                >
                  In Progress
                </button>
                <button
                  className={filter === 'completed' ? 'active' : ''}
                  onClick={() => setFilter('completed')}
                >
                  Completed
                </button>
              </div>
            </div>

            {loading ? (
              <div className="loading">Loading goals...</div>
            ) : (
              <GoalList
                goals={filteredGoals}
                onEdit={handleEditGoal}
                onDelete={handleDeleteGoal}
              />
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with ❤️ using MERN Stack | Week-9 Fellowship Program</p>
      </footer>
    </div>
  );
}

export default App;