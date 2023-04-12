const express = require("express");
const router = express.Router();
const hospitalController = require("../controller/hospital.controller");
const authService = require("../services/auth.service");

// create hospital
router.post(
  "/create-hospital",
  authService.adminVerify,
  hospitalController.createHospital
);

//get Hospitals
router.get(
  "/get-hospitals",
  authService.adminVerify,
  hospitalController.getHospitals
);

//get hosipital by id
router.get(
  "/get-hospital/:hospital_id",
  authService.adminVerify,
  hospitalController.getHospitalById
);

//update hospital
router.put(
  "/update-hospital/:hospital_id",
  authService.adminVerify,
  hospitalController.updateHospital
);

//remove hospital
router.delete(
  "/remove-hospital/:hospital_id",
  authService.adminVerify,
  hospitalController.removeHospital
);

//get user in hospital
router.get(
  "/get-user-in-hospital/:hospital_id/:limit/:page",
  hospitalController.getUserInHospital
);

module.exports = router;
