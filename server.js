const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const PORT = 5000;
const connectDB = require("./config/db");

// Import routes
const userRoutes = require("./routes/userRoutes");
// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.render("home");
});

connectDB();
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
