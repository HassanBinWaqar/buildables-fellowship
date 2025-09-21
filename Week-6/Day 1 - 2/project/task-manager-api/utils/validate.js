// utils/validate.js
exports.requireTitle = (req, res, next) => {
  if (!req.body || !req.body.title) return res.status(400).json({ message: 'Title is required' });
  next();
};
