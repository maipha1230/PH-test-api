const jwt = require("jsonwebtoken");
require("dotenv").config;

const { Admin } = require("../model/index.model");

module.exports = {
  adminVerify: async (req, res, next) => {
    try {
      //get token
      const token = String(req.headers.authorization).split(" ")[1];

      //check token exist
      if (!token) {
        return res.status(401).send("กรุณาเข้าสู่ระบบ");
      }

      jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
          return res.status(401).send("กรุณาเข้าสู่ระบบ");
        }

        const admin = await Admin.findOne({
          where: {
            admin_id: decoded.admin_id,
          },
        });

        //check if exist
        if (!admin) {
          return res.status(401).send("ไม่พบผู้ใข้งาน");
        }

        res.locals.admin_auth = {
          admin_id: admin.admin_id,
          admin_username: admin.username,
        };
        next();
      });
    } catch (error) {
        return res.status(401).send("กรุณาเข้าสู่ระบบ")
    }
  },
};
