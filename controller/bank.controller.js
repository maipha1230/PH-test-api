const { Bank } = require("../model/index.model");
const { joiException } = require("../services/exception");
const { validateBank } = require("../services/validator");
const { Op } = require("sequelize");

const createBank = async (req, res) => {
  try {
    //validate form
    const { error } = validateBank(req.body);
    if (error) {
      return res.status(400).send(joiException(error.details));
    }

    const { bank_name_th, bank_name_en } = req.body;
    const bank = await Bank.create({
      bank_name_th: bank_name_th,
      bank_name_en: bank_name_en,
    });
    return res.status(201).send("เพิ่มธนาคารสำเร็จ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getBanks = async (req, res) => {
  try {
    const bank = await Bank.findAll({
      order: [["bank_id", "asc"]],
    });
    return res.status(200).send(bank);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getBankById = async (req, res) => {
  try {
    //validate params
    const bank_id = req.params.bank_id;
    if (!bank_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    //find bank
    const bank = await Bank.findOne({
      where: {
        bank_id: bank_id,
      },
    });
    if (!bank) {
      return res.status(400).send("ไม่พบธนาคาร");
    }
    return res.status(200).send(bank);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateBank = async (req, res) => {
  try {
    //validate params
    const bank_id = req.params.bank_id;
    if (!bank_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }
    
    //cannot update default value
    if (bank_id == 1) {
      return res.status(400).send("ไม่สามารถแก้ไขค่าเริ่มต้นได้");
    }

    //validate form
    const { error } = validateBank(req.body);
    if (error) {
      return res.status(400).send(joiException(error.details));
    }

    //update bank data
    const { bank_name_th, bank_name_en } = req.body;
    const bank = await Bank.update(
      {
        bank_name_th: bank_name_th,
        bank_name_en: bank_name_en,
      },
      {
        where: {
            bank_id: bank_id
        },
      }
    );
    return res.status(201).send("แก้ไขธนาคารสำเร็จ")
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const removeBank = async(req, res) => {
    try {
            //validate params
    const bank_id = req.params.bank_id;
    if (!bank_id) {
      return res.status(400).send("เกิดข้อผิดพลาด ลองอีกครั้ง");
    }

    //cannot remove default value
    if (bank_id == 1) {
      return res.status(400).send("ไม่สามารถลบค่าเริ่มต้นได้");
    }

    const remove = await Bank.destroy({
        where: {
            bank_id: bank_id
        }
    })

    //if not found bank
    if (!remove) {
        return res.status(400).send("ไม่พบธนาคาร")
    }

    return res.status(200).send("ลบธนาคารสำเร็จ")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getBanks: getBanks,
    getBankById: getBankById,
    createBank: createBank,
    updateBank: updateBank,
    removeBank: removeBank
}
