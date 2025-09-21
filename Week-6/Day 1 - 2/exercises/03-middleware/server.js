// 03-middleware - Custom middleware and built-in middleware usage
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

// built-in middleware
app.use(express.json());

// custom logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(PORT, () => console.log(`Middleware exercise on http://localhost:${PORT}`));
