// server.js - quick REST API using mongoose and express for posts
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const postSchema = new mongoose.Schema({ title: String, content: String }, { timestamps: true });
const Post = mongoose.model('Post', postSchema);

app.get('/posts', async (req, res) => {
  const posts = await Post.find().limit(20);
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const p = await Post.create(req.body);
  res.status(201).json(p);
});

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blog-pro')
  .then(() => app.listen(PORT, () => console.log(`Server on ${PORT}`)))
  .catch(err => console.error(err));