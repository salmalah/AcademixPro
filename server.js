const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const dbURI = "mongodb://localhost:27017/Academix-Pro";
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
