const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.loginGet);
router.post("/signup", userController.signUp);
router.post("/login", userController.loginUser);
router.get("/signup", userController.signUpGet);
router.get("/profile", userController.profileGet);
module.exports = router;
