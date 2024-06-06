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
    const { username } = req.query;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.render("profile", { username, user });
    console.log(user);
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
    res.redirect(`/api/users/profile?username=${user.username}`);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

module.exports = {
  signUp,
  loginUser,
  loginGet,
  signUpGet,
  profileGet,
};
