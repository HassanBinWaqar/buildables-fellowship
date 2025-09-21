const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.addComment = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    const comment = await Comment.create({ content: req.body.content, author: req.user.id, post: post._id });
    res.status(201).json(comment);
  } catch (err) { next(err); }
};

exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate('author', 'name');
    res.json(comments);
  } catch (err) { next(err); }
};
