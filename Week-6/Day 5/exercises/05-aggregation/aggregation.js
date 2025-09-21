// aggregation.js - demo of aggregation pipeline (posts per day)
const mongoose = require('mongoose');
const schema = new mongoose.Schema({ title: String, content: String }, { timestamps: true });
const Post = mongoose.model('AggPost', schema);

async function agg() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blog-pro');
  const res = await Post.aggregate([
    { $match: {} },
    { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]);
  console.log(res);
  await mongoose.disconnect();
}
if (require.main === module) agg().catch(console.error);