import axios from 'axios';

const API_URL = '/api/goals';

// Get all goals
export const getGoals = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching goals:', error);
    throw error;
  }
};

// Get single goal
export const getGoal = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching goal:', error);
    throw error;
  }
};

// Create new goal
export const createGoal = async (goalData) => {
  try {
    const response = await axios.post(API_URL, goalData);
    return response.data;
  } catch (error) {
    console.error('Error creating goal:', error);
    throw error;
  }
};

// Update goal
export const updateGoal = async (id, goalData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, goalData);
    return response.data;
  } catch (error) {
    console.error('Error updating goal:', error);
    throw error;
  }
};

// Delete goal
export const deleteGoal = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting goal:', error);
    throw error;
  }
};