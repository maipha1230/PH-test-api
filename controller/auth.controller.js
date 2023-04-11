const jwt = require('jsonwebtoken')
require("dotenv").config();
const { User, Admin } = require('../model/index.model')
const bcrypt = require('bcrypt')
const { validateAuth } = require('../services/validator');
const { joiException } = require('../services/exception');

const signUp = async(req, res) => {
    try {
        //validate form
        const { error } = validateAuth(req.body) 
        
        if (error) {
            return res.status(400).send(joiException(error.details))
        }

        const { username, password } = req.body

        //validate exist admin
        const exist = await Admin.findOne({
            where: {
                username: username
            }
        })

        if (exist) {
            return res.status(400).send("มีผู้ใช้งานนี้อยู่แล้ว")
        }

        const hash = await bcrypt.hash(password, 10)

        const admin = await Admin.create({
            username: username,
            password: hash
        })
        delete admin.password
        return res.status(201).json({ admin: admin })
    } catch (error) {
      return res.status(500).send(error.message)  
    }
}

const signIn = async(req, res) => {
    try {
        //validate form
        const { error } = validateAuth(req.body)

        if (error) {
            return res.status(400).send(joiException(error.details))
        }
        const { username, password } = req.body

        //check if exist
        const admin = await Admin.findOne({
            where: {
                username: username
            }
        })
        
        if (!admin) {
            return res.status(400).send("ไม่พบผู้ใช้งาน")
        }

        // check password
        const check_password = await bcrypt.compareSync(password, admin.password)

        if (!check_password) {
            return res.status(400).send("รหัสผ่านไม่ถูกต้อง")
        }

        // sign token
        const token = jwt.sign({
            admin_id: admin.admin_id, username: admin.username
        }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        })

        return res.status(200).send({ access_token : token })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    signUp: signUp,
    signIn, signIn
}

