const { User } = require("../model/index.model");
const { joiException } = require("../services/exception");
const { validateUser } = require("../services/validator");
const { Op } = require("sequelize");


const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserById = async(req, res) => {
    try {

        const user_id = req.params.user_id;
        // no user id
        if (!user_id) {
          return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
        }

        const user = await User.findOne({
            where: {
                user_id: user_id
            }
        })

        if (!user) {
            return res.status(400).send("ไม่พบผู้ใช้งาน")
        }

        return res.status(200).send(user)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


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
        return res.status(400).send("ไม่พบผู้ใช้งาน")
    }

    return res.status(200).send("ลบผู้ใช้งานสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const changeUserStatus = async(req, res) => {
  try {
    const user_id = req.params.user_id

    // no user id
    if (!user_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    const user = await User.findOne({
      where: {
        user_id: user_id
      }
    })

    if (!user) {
      return res.status(400).send("ไม่พบผู้ใช้งาน")
    }

    await User.update({
      user_status: user.user_status == 1 ? 0 : 1
    }, {
      where: {
        user_id: user_id
      }
    })

    return res.status(200).send("แก้ไขสถานะผู้ใช้งานสำเร็จ")
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
  changeUserStatus: changeUserStatus
};
