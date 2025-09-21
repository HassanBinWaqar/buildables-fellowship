// crud.js - demonstrates create/read/update/delete with mongoose models
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

async function run() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blog-pro');
  // CREATE
  const p = await Post.create({ title: 'Hello', content: 'First post' });
  console.log('Created:', p);
  // READ
  const found = await Post.findById(p._id);
  console.log('Found:', found);
  // UPDATE
  const updated = await Post.findByIdAndUpdate(p._id, { title: 'Hello Updated' }, { new: true });
  console.log('Updated:', updated);
  // DELETE
  await Post.findByIdAndDelete(p._id);
  console.log('Deleted');
  await mongoose.disconnect();
}
if (require.main === module) run().catch(console.error);