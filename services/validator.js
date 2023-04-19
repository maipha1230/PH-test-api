const joi = require('joi')

const validator = (schema) => (payload) => 
    schema.validate(payload, { abortEarly: false  })


const authModel = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});

exports.validateAuth = validator(authModel);

const userModel = joi.object({
    user_code: joi.string().required(),
    user_firstname_th: joi.string().required(),
    user_lastname_th: joi.string().required(),
    user_firstname_en: joi.string().required(),
    user_lastname_en: joi.string().required(),
    user_status: joi.number().required()
})

exports.validateUser = validator(userModel);

const HospitalModel = joi.object({
    hospital_code: joi.string().required(),
    hospital_name_th: joi.string().required(),
    hospital_name_en: joi.string().required(),
})

exports.validateHospital = validator(HospitalModel);

const BankModel = joi.object({
    bank_name_th: joi.string().required(),
    bank_name_en: joi.string().required()
})

exports.validateBank = validator(BankModel)

const userBankModel = joi.object({
  bank_id: joi.number().required(),
  user_bank_code: joi.string().required(),
  user_bank_name: joi.string().required()  
})

exports.validateUserBank = validator(userBankModel)