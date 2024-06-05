const express = require("express");
const app = express();
const PORT = 5000;
const connectDB = require("./config/db");

// Import routes
const userRoutes = require("./routes/userRoutes");

// Mount routes
app.use("/api/users", userRoutes);

connectDB();
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
