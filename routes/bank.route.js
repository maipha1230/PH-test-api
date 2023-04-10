const express = require("express");
const router = express.Router();
const bankController = require("../controller/bank.controller");
const authService = require("../services/auth.service");

//create bank
router.post("/create-bank", authService.adminVerify, bankController.createBank);

//get banks
router.get("/get-banks", authService.adminVerify, bankController.getBanks);

//get bank by id
router.get(
  "/get-bank/:bank_id",
  authService.adminVerify,
  bankController.getBankById
);

// update bank
router.put(
  "/update-bank/:bank_id",
  authService.adminVerify,
  bankController.updateBank
);

//remove bank
router.delete(
  "/remove-bank/:bank_id",
  authService.adminVerify,
  bankController.removeBank
);

module.exports = router;
