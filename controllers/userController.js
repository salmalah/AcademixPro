const bcrypt = require("bcryptjs");
const User = require("../models/user");
const loginGet = async (req, res, next) => {
  res.render("login");
};
const signUpGet = async (req, res, next) => {
  res.render("signup");
};
const profileGet = async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.render("profile", { username: user.username, user });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

const signUp = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const { userName, email, password } = req.body;
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

const loginUser = async (req, res, next) => {
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
    // Create a session
    req.session.user = user;
    //res.redirect(`/api/users/profile?username=${user.username}`);
    res.redirect("/api/users/profile");
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ msg: "Failed to logout" });
    }
    res.redirect("/");
  });
};
const getusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  signUp,
  loginUser,
  loginGet,
  signUpGet,
  profileGet,
  getusers,
  logout,
};
