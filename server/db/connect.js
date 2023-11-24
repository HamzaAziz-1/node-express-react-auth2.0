const mongoose = require('mongoose');

const connectDB = async (url) => {
  await mongoose.connect(url)
    .then(() => console.log("Database Connected Successfully..."))
    .catch((error)=>console.log(error));
};

module.exports = connectDB;
