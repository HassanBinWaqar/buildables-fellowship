// 01-basic-server - Simple Express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from Basic Server - Exercise 01');
});

app.listen(PORT, () => console.log(`Basic server running on http://localhost:${PORT}`));
