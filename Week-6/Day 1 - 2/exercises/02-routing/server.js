// 02-routing - Demonstrates routing and route modularization
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Router example
const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send('Users list - GET /users'));
userRouter.get('/:id', (req, res) => res.send(`User detail for id=${req.params.id}`));

app.use('/users', userRouter);

app.get('/', (req, res) => res.send('Routing exercise - Home'));

app.listen(PORT, () => console.log(`Routing server running on http://localhost:${PORT}`));
