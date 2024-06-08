require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
var bodyParser = require("body-parser");
const PORT = 5000;
const connectDB = require("./config/db");

// Import routes
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => {
  res.send({ msg: "This is Home Page" });
});

connectDB();
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
