const express = require("express");
const app = express();
const PORT = 5000;
const connectDB = require("./config/db");
connectDB();
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
