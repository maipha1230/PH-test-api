const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const authService = require("../services/auth.service");

//create user
router.post("/create-user", authService.adminVerify, userController.createUser);

//get users
router.get("/get-users", authService.adminVerify, userController.getUsers);

//get user by id
router.get(
  "/get-user/:user_id",
  authService.adminVerify,
  userController.getUserById
);

//update user
router.put(
  "/update-user/:user_id",
  authService.adminVerify,
  userController.updateUser
);

//remove user
router.delete(
  "/remove-user/:user_id",
  authService.adminVerify,
  userController.removeUser
);

//change user status
router.put(
  "/change-user-status/:user_id",
  authService.adminVerify,
  userController.changeUserStatus
);

//get user hospital
router.get(
  "/get-user-hospital/:user_id",
  authService.adminVerify,
  userController.getUserHospital
);

//add or remove user hospital
router.post(
  "/add-remove-user-hospital/:user_id/:hospital_id",
  authService.adminVerify,
  userController.addOrRemoveUserHospital
);

//create user bank account
router.post(
  "/create-user-bank-account/:user_id",
  authService.adminVerify,
  userController.createUserBankAccount
);

//edit user bank account
router.put(
  "/edit-user-bank-account/:user_id/:user_bank_id",
  authService.adminVerify,
  userController.editUserBankAccount
);

//get user bank accounts
router.get(
  "/get-user-bank-accounts/:user_id",
  authService.adminVerify,
  userController.getUserBankAccounts
);

//remove user bank account
router.delete(
  "/remove-user-bank-account/:user_bank_id",
  authService.adminVerify,
  userController.removeUserBankAccount
);

//get users count
router.get(
  "/get-user-count",
  authService.adminVerify,
  userController.getUserCount
);

//get admin count
router.get(
  "/get-admin-count",
  authService.adminVerify,
  userController.getAdminCount
);

// check user code exist
router.post(
  "/check-user-code-exist",
  authService.adminVerify,
  userController.checkUserCodeExist
);

module.exports = router;
