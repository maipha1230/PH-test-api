const express = require('express')
const router = express.Router()
const authController = require('../controller/auth.controller')

//sign up for admin if admin does not exist 
router.post(
    "/sign-up",
    authController.signUp
  );

//admin sign in
router.post(
    "/sign-in",
    authController.signIn
)

module.exports = router;  