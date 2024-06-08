const Task = require("../models/task");

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const user = req.session.user._id;

    const newTask = new Task({
      title,
      description,
      user,
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all tasks for the logged-in user
const getTasks = async (req, res) => {
  try {
    const user = req.session.user._id;
    const tasks = await Task.find({ user }).populate("user", "username email");
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const user = req.session.user._id;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id, user },
      { title, description },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.session.user._id;

    const deletedTask = await Task.findOneAndDelete({ _id: id, user });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
