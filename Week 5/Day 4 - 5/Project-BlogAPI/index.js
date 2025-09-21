const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let posts = [
  { id: 1, title: "First Post", content: "Hello World!" },
  { id: 2, title: "Second Post", content: "Learning Node.js is fun!" }
];

// Landing page
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Welcome to the Blog API</h1>
    <p>This is a simple Node.js + Express REST API project.</p>
    <h3>Available Routes:</h3>
    <ul>
      <li><strong>GET</strong> /posts - Get all posts</li>
      <li><strong>GET</strong> /posts/:id - Get single post</li>
      <li><strong>POST</strong> /posts - Create new post</li>
      <li><strong>PUT</strong> /posts/:id - Update a post</li>
      <li><strong>DELETE</strong> /posts/:id - Delete a post</li>
    </ul>
    <p>Test these routes in <a href="https://www.postman.com/" target="_blank">Postman</a> or your browser (for GET).</p>
  `);
});

// Routes
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.json(post);
});

app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.send("Post deleted");
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
