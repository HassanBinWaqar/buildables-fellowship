// 05-error-handling - Centralized error handling middleware
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.get('/boom', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err);
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// error-handling middleware (4 args)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => console.log(`Error handling exercise on http://localhost:${PORT}`));
