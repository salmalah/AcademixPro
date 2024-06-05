const bcrypt = require("bcryptjs");
const User = require("../models/user");

// Signup function for user registration
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

module.exports = { signUp };
