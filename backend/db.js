const {MongoClient} = require('mongodb');
// const login = require('./login');
// const signup = require('./signup');

// const db1 = async(doc)=>{
//     const client = await MongoClient.connect(
//         'mongodb://localhost:27017/'
//     );
//     const coll = client.db('admin').collection('newuser');
//     const cursor = await coll.insertMany(doc);
//     await client.close();
// }


///////   -------   ///////


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/proctor');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
