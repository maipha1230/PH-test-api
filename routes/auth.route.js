const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const authService = require("../services/auth.service");

//sign up for admin if admin does not exist
router.post("/sign-up", authController.signUp);

//admin sign in
router.post("/sign-in", authController.signIn);

//admin change password
router.put(
  "/change-password",
  authService.adminVerify,
  authController.changePassword
);

module.exports = router;
