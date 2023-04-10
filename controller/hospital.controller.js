const { Hospital } = require("../model/index.model");
const { validateHospital } = require("../services/validator");
const { Op } = require("sequelize");

const getHospitals = async (req, res) => {
  try {
    const hospital = await Hospital.findAll();
    return res.status(200).send(hospital);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getHospitalById = async (req, res) => {
  try {
    const hospital_id = req.params.hospital_id;
    // no user id
    if (!hospital_id) {
      return res.status(400).send("Please Try Again.");
    }

    const hospital = await Hospital.findOne({
      hospital_id: hospital_id,
    });

    if (!hospital) {
      return res.status(404).send("No Hospital Found.");
    }

    return res.status(200).send(hospital);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createHospital = async (req, res) => {
  try {
    //validate form
    const { error } = validateHospital(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }

    const { hospital_code, hospital_name_th, hospital_name_en } = req.body;

    const exist = await Hospital.findOne({
      where: {
        hospital_code: hospital_code,
      },
    });
    // if Hospital Code Already Use
    if (exist) {
      return res.status(400).send("Hospital Already Use.");
    }

    //insert data into database
    const hospital = await Hospital.create({
      hospital_code: hospital_code,
      hospital_name_th: hospital_name_th,
      hospital_name_en: hospital_name_en,
    });

    return res.status(201).send(hospital);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateHospital = async (req, res) => {
  try {
    const hospital_id = req.params.hospital_id;
    // no user id
    if (!hospital_id) {
      return res.status(400).send("Please Try Again.");
    }

    const { error } = validateHospital(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }

    const { hospital_code, hospital_name_th, hospital_name_en } = req.body;

    //check hospital code is already use.
    const exist = await Hospital.findOne({
      where: {
        hospital_code: hospital_code,
        hospital_id: { [Op.ne]: hospital_id },
      },
    });

    if (exist) {
      return res.status(400).send("Hospital Code Already Use.");
    }

    //update data
    const hospital = await Hospital.update(
      {
        hospital_code: hospital_code,
        hospital_name_th: hospital_name_th,
        hospital_name_en: hospital_name_en,
      },
      {
        where: {
          hospital_id: hospital_id,
        },
      }
    );

    return res.status(201).send(hospital);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const removeHospital = async (req, res) => {
  try {
    const hospital_id = req.params.hospital_id;
    // no user id
    if (!hospital_id) {
      return res.status(400).send("Please Try Again.");
    }

    const remove = await Hospital.destroy({
      where: {
        hospital_id: hospital_id,
      },
    });

    if (!remove) {
      return res.status(404).send("No Hospital Found.");
    }

    return res.status(200).send("Remove Hospital Success");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getHospitals: getHospitals,
  getHospitalById: getHospitalById,
  createHospital: createHospital,
  updateHospital: updateHospital,
  removeHospital: removeHospital
};
