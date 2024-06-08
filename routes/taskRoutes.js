const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const isAuthenticated = require("../middlewares/auth");

router.post("/create", isAuthenticated, taskController.createTask);
router.get("/tasks", isAuthenticated, taskController.getTasks);
router.put("/update/:id", isAuthenticated, taskController.updateTask);
router.delete("/delete/:id", isAuthenticated, taskController.deleteTask);

module.exports = router;
