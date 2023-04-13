const {
  User,
  Hospital,
  UserHospital,
  UserBank,
  Bank,
  Admin
} = require("../model/index.model");
const { joiException } = require("../services/exception");
const { validateUser, validateUserBank } = require("../services/validator");
const { Op } = require("sequelize");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    // no user id
    if (!user_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    const user = await User.findOne({
      where: {
        user_id: user_id,
      },
    });

    if (!user) {
      return res.status(400).send("ไม่พบผู้ใช้งาน");
    }

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    //check form
    const { error } = validateUser(req.body);

    if (error) {
      return res.status(400).send(joiException(error.details));
    }

    const {
      user_code,
      user_firstname_th,
      user_lastname_th,
      user_firstname_en,
      user_lastname_en,
    } = req.body;

    const exist = await User.findOne({
      where: {
        user_code: user_code,
      },
    });

    //if user_code is already use
    if (exist) {
      return res.status(400).send("รหัสผู้ใช้งานนี้ถูกใช้งานแล้ว");
    }

    // insert data into database
    const user = await User.create({
      user_code: user_code,
      user_firstname_th: user_firstname_th,
      user_lastname_th: user_lastname_th,
      user_firstname_en: user_firstname_en,
      user_lastname_en: user_lastname_en,
      user_status: 1,
    });

    return res.status(201).send("เพิ่มผู้ใช้งานสำเร็จ");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    // no user id
    if (!user_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    //check form
    const { error } = validateUser(req.body);

    if (error) {
      return res.status(400).send(joiException(error.details));
    }

    const {
      user_code,
      user_firstname_th,
      user_lastname_th,
      user_firstname_en,
      user_lastname_en,
    } = req.body;

    const exist = await User.findOne({
      where: {
        user_code: user_code,
        user_id: { [Op.ne]: user_id },
      },
    });

    //if user_code is already use
    if (exist) {
      return res.status(400).send("รหัสผู้ใช้งานนี้ถูกใช้งานแล้ว");
    }

    // insert data into database
    const user = await User.update(
      {
        user_code: user_code,
        user_firstname_th: user_firstname_th,
        user_lastname_th: user_lastname_th,
        user_firstname_en: user_firstname_en,
        user_lastname_en: user_lastname_en,
      },
      {
        where: {
          user_id: user_id,
        },
      }
    );
    return res.status(201).send("แก้ไขผู้ใช้งานสำเร็จ");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const removeUser = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    // no user id
    if (!user_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    const remove = await User.destroy({
      where: {
        user_id: user_id,
      },
    });

    if (!remove) {
      return res.status(400).send("ไม่พบผู้ใช้งาน");
    }

    return res.status(200).send("ลบผู้ใช้งานสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const changeUserStatus = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    // no user id
    if (!user_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    const user = await User.findOne({
      where: {
        user_id: user_id,
      },
    });

    if (!user) {
      return res.status(400).send("ไม่พบผู้ใช้งาน");
    }

    await User.update(
      {
        user_status: user.user_status == 1 ? 0 : 1,
      },
      {
        where: {
          user_id: user_id,
        },
      }
    );

    return res.status(200).send("แก้ไขสถานะผู้ใช้งานสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserHospital = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    //no user id
    if (!user_id) {
      return res.status(400).send("ไม่พบผู้ใช้งาน");
    }

    //return user hospital list
    const userHospital = await UserHospital.findAll({
      where: {
        user_id: user_id,
      },
    });

    //return hospital list
    const hospitals = await Hospital.findAll();

    return res
      .status(200)
      .send({ user_hospital: userHospital, hospitals: hospitals });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const addOrRemoveUserHospital = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if (!user_id) {
      return res.status(400).send("ไม่พบผู้ใช้งาน");
    }

    const hospital_id = req.params.hospital_id;
    if (!hospital_id) {
      return res.status(400).send("ไม่พบโรงพยาบาล");
    }

    const isWorking = req.body.isWorking;

    if (isWorking) {
      const add = await UserHospital.create({
        user_id: user_id,
        hospital_id: hospital_id,
      });
      return res.status(200).send("เพิ่มเข้ารายการบรรจุสำเร็จ");
    } else {
      const remove = await UserHospital.destroy({
        where: {
          user_id: user_id,
          hospital_id: hospital_id,
        },
      });
      return res.status(200).send("นำออกจากรายการบรรจุสำเร็จ");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createUserBankAccount = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if (!user_id) return res.status(400).send("ไม่พบผู้ใช้งาน");

    const { error } = validateUserBank(req.body);
    if (error) {
      return res.status(400).send(joiException(error.details));
    }

    const { bank_id, user_bank_code, user_bank_name } = req.body;

    const user_bank = await UserBank.create({
      bank_id: bank_id,
      user_id: user_id,
      user_bank_code: user_bank_code,
      user_bank_name: user_bank_name,
    });
    if (!user_bank) {
      return res.status(400).send("เกิดข้อผิดพลาด กรุณาลองอีกครั้ง");
    }
    return res.status(201).send("เพิ่มสมุดบัญชีผูู้ใช้งานสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserBankAccounts = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if (!user_id) {
      return res.status(400).send("ไม่พบผู้ใช้งาน");
    }

    const user_bank = await UserBank.findAll({
      where: {
        user_id: user_id,
      },
      include: [{ model: Bank, attributes: ['bank_name_th', 'bank_name_en'] }],
    });
    return res.status(200).send(user_bank )
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const removeUserBankAccount = async(req, res) => {
  try {
    const user_bank_id = req.params.user_bank_id
    if (!user_bank_id) return res.status(400).send("ไม่พบสมุดบัญชี")

    const remove = await UserBank.destroy({
      where: {
        user_bank_id: user_bank_id
      }
    })
    if (!remove) return res.status(400).send("ไม่พบสมุดบัญชี")

    return res.status(200).send("ลบสมุดบัญชีผู้ใช้งานสำเร็จ")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserCount = async(req, res) => {
  try {
    const count = await User.count()
    return res.status(200).send({ count: count })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAdminCount = async(req, res) => {
  try {
    const count = await Admin.count()
    return res.status(200).send({ count: count })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  updateUser: updateUser,
  removeUser: removeUser,
  getUserById: getUserById,
  changeUserStatus: changeUserStatus,
  getUserHospital: getUserHospital,
  addOrRemoveUserHospital: addOrRemoveUserHospital,
  createUserBankAccount: createUserBankAccount,
  getUserBankAccounts: getUserBankAccounts,
  removeUserBankAccount: removeUserBankAccount,
  getUserCount: getUserCount,
  getAdminCount: getAdminCount  
};
