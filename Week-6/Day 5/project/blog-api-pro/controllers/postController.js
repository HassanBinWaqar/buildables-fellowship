const Post = require('../models/Post');

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create({ ...req.body, author: req.user.id });
    res.status(201).json(post);
  } catch (err) { next(err); }
};

exports.getPosts = async (req, res, next) => {
  try {
    const { page=1, limit=10, q, author } = req.query;
    const filter = {};
    if (q) filter.$text = { $search: q };
    if (author) filter.author = author;
    const posts = await Post.find(filter)
      .sort({ createdAt: -1 })
      .skip((page-1)*limit)
      .limit(parseInt(limit))
      .populate('author', 'name email');
    res.json(posts);
  } catch (err) { next(err); }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'name email');
    if (!post) return res.status(404).json({ message: 'Not found' });
    res.json(post);
  } catch (err) { next(err); }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Not found' });
    if (String(post.author) !== String(req.user.id)) return res.status(403).json({ message: 'Forbidden' });
    Object.assign(post, req.body);
    await post.save();
    res.json(post);
  } catch (err) { next(err); }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Not found' });
    if (String(post.author) !== String(req.user.id)) return res.status(403).json({ message: 'Forbidden' });
    await post.remove();
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
