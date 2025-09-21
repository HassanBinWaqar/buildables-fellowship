// queries.js - demonstrates text search, pagination, projection
const mongoose = require('mongoose');
const schema = new mongoose.Schema({ title: String, content: String }, { timestamps: true });
schema.index({ title: 'text', content: 'text' });
const Post = mongoose.model('QPost', schema);

async function run() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blog-pro');
  const page = 1, limit = 5;
  const q = process.argv[2] || 'test';
  const docs = await Post.find({ $text: { $search: q } })
    .skip((page-1)*limit).limit(limit).select('title createdAt');
  console.log(docs);
  await mongoose.disconnect();
}
if (require.main === module) run().catch(console.error);