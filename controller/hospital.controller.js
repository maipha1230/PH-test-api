const { Hospital, UserHospital, User, sequelize } = require("../model/index.model");
const { joiException } = require("../services/exception");
const { validateHospital } = require("../services/validator");
const { Op, Sequelize } = require("sequelize");

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
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    const hospital = await Hospital.findOne({
      where: {
        hospital_id: hospital_id,
      } 
    });

    if (!hospital) {
      return res.status(400).send("ไม่พบโรงพยาบาล");
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
      return res.status(400).send(joiException(error.details));
    }

    const { hospital_code, hospital_name_th, hospital_name_en } = req.body;

    const exist = await Hospital.findOne({
      where: {
        hospital_code: hospital_code,
      },
    });
    // if Hospital Code Already Use
    if (exist) {
      return res.status(400).send("รหัสโรงพยาบาลนี้ถูกใช้งานแล้ว");
    }

    //insert data into database
    const hospital = await Hospital.create({
      hospital_code: hospital_code,
      hospital_name_th: hospital_name_th,
      hospital_name_en: hospital_name_en,
    });

    return res.status(201).send("เพิ่มโรงพยาบาลสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateHospital = async (req, res) => {
  try {
    console.log(req.body);
    const hospital_id = req.params.hospital_id;
    // no user id
    if (!hospital_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    const { error } = validateHospital(req.body);
    if (error) {
      return res.status(400).send(joiException(error.details));
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
      return res.status(400).send("รหัสโรงพยาบาลนี้ถูกใช้งานแล้ว");
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

    return res.status(201).send("แก้ไขโรงพยาบาลสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const removeHospital = async (req, res) => {
  try {
    const hospital_id = req.params.hospital_id;
    // no user id
    if (!hospital_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    const remove = await Hospital.destroy({
      where: {
        hospital_id: hospital_id,
      },
    });

    if (!remove) {
      return res.status(400).send("ไม่พบโรงพยาบาล");
    }

    return res.status(200).send("ลบโรงพยาบาลสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserInHospital = async(req, res) => {
  try {
    const hospital_id = req.params.hospital_id
    if (!hospital_id) return res.status(400).send("ไม่พลผู้ใช้งาน")

    const limit = req.params.limit
    if (!limit) return res.status(400).send("ไม่พบการจำกัดข้อมูล")

    const page = req.params.page
    if (!page) return res.status(400).send("ไม่พบตำแหน่งหน้าของข้อมูล")

    const count = await UserHospital.count({
      where: {
        hospital_id: hospital_id
      }
    })

    const user_hospital = await UserHospital.findAll({
      where: {
        hospital_id: hospital_id
      },
      order: [['user_id', 'asc']],
      include: [
        {
          model: User,
        }
      ],
      limit: Number(limit),
      offset: Number(page),
    })
    return res.status(200).send({count: count, user_hospital: user_hospital})
  } catch (error) {
    return res.status(500).send(error.message)
  }
} 

const getHospitalCount = async(req, res) => {
  try {
    const count = await Hospital.count()
    return res.status(200).send({ count: count })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getHospitaUserChart = async(req, res) => {
  try {
    const hospital_chart = await sequelize.query(
    `
      SELECT  COUNT(*) as count,
              hospital.hospital_name_th,
              hospital.hospital_name_en
      FROM user_hospital
      INNER JOIN hospital ON hospital.hospital_id = user_hospital.hospital_id
      GROUP BY user_hospital.hospital_id
    `)

    return res.status(200).send(hospital_chart[0])
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const checkHospitalCodeExist = async(req, res) => {
  try {
    const hospital_id = req.query.hospital_id
    const hospital_code = req.body.hospital_code
    console.log(req.body);

    if (!hospital_id) {
      const exist = await Hospital.findOne({
        where: {
          hospital_code: hospital_code
        }
      })
      if (exist) {
        return res.status(200).send(`${hospital_code} ถูกใช้งานแล้ว`)
      }
      return res.status(200).send(null)
    } else {
      const exist = await Hospital.findOne({
        where: {
          hospital_code: hospital_code,
          hospital_id: { [Op.ne]: hospital_id }
        }
      })
      if (exist) {
        return res.status(200).send(`${hospital_code} ถูกใช้งานแล้ว`)
      }
      return res.status(200).send(null)
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  getHospitals: getHospitals,
  getHospitalById: getHospitalById,
  createHospital: createHospital,
  updateHospital: updateHospital,
  removeHospital: removeHospital,
  getUserInHospital: getUserInHospital,
  getHospitalCount: getHospitalCount,
  getHospitaUserChart: getHospitaUserChart,
  checkHospitalCodeExist: checkHospitalCodeExist
  
};
