const mongoose = require('mongoose');
async function run(){
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test_ex');
  const User = mongoose.model('User', new mongoose.Schema({name:String,email:String}));
  const u = await User.create({name:'Test', email: 'a@b.com'});
  console.log('Created', u);
  const found = await User.findOne({email:'a@b.com'});
  console.log('Found', found);
  await mongoose.disconnect();
}
run().catch(console.error);
