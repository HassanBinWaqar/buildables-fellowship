const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  content: { type: String, required: true },
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });
postSchema.index({ title: 'text', content: 'text' });
module.exports = mongoose.model('Post', postSchema);
