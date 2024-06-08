const bcrypt = require("bcryptjs");
const User = require("../models/user");

const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ msg: `User created`, user: savedUser });
  } catch (err) {
    console.error(err);
    res.status(400).json({ msg: err });
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    req.session.user = user;
    res.send({ msg: "Logged in successfully" });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

const profile = async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.send(`hello ${user.username}`);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};
const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ msg: "Failed to logout" });
    }
    res.clearCookie("connect.sid");
    res.send({ msg: " logout successfully" });
  });
};
const updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = req.session.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Find the user in the database
    const existingUser = await User.findById(user._id);

    if (username) existingUser.username = username;
    if (email) existingUser.email = email;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      existingUser.password = hashedPassword;
    }

    const updatedUser = await existingUser.save();
    req.session.user = updatedUser;
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  signUp,
  login,
  profile,
  updateUser,
  logout,
};
