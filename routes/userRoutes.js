const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAuthenticated = require("../middlewares/auth");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/profile", isAuthenticated, userController.profile);
router.post("/update", isAuthenticated, userController.updateUser);
router.get("/logout", isAuthenticated, userController.logout);
module.exports = router;
