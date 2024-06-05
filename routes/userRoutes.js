const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", (req, res) => {
  res.send({ msg: "This is login page test" });
});
router.post("/signup", userController.signUp);
module.exports = router;
