const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAuthenticated = require("../middlewares/auth");

router.get("/login", userController.loginGet);
router.post("/signup", userController.signUp);
router.post("/login", userController.loginUser);
router.get("/signup", userController.signUpGet);
router.get("/profile", isAuthenticated, userController.profileGet);
router.get("/logout", isAuthenticated, userController.logout);
router.get("/users", isAuthenticated, userController.getusers);
module.exports = router;
