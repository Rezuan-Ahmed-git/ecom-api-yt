const mongoose = require('mongoose');

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Database error', error);
  }
};

module.exports = dbConnect;
