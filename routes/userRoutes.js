const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", (req, res) => {
  res.send({ msg: "This is login page test" });
});
module.exports = router;
