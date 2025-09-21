// 04-params-queries - Demo of route params and query strings
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;

app.get('/search', (req, res) => {
  const q = req.query.q || 'none';
  res.send(`Search query: ${q}`);
});

app.get('/products/:category/:id', (req, res) => {
  res.json({ category: req.params.category, id: req.params.id });
});

app.listen(PORT, () => console.log(`Params & queries exercise running on http://localhost:${PORT}`));
