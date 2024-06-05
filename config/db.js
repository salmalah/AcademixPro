const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/Academix-Pro";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectDB;
