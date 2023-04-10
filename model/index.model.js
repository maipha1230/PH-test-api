const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
    charset: "utf8",
    collate: "utf8_general_ci",
    operatorsAliases: 0,
  }
);


//define table 

const Admin = require('./schema/Admin')(sequelize, Sequelize)
const User = require('./schema/User.js')(sequelize, Sequelize)
const Hospital = require('./schema/Hospital')(sequelize, Sequelize)
const Bank = require('./schema/Bank')(sequelize, Sequelize)
const UserBank = require('./schema/UserBank')(sequelize, Sequelize)
const UserHospital = require('./schema/UserHospital')(sequelize, Sequelize)

//relations

User.hasMany(UserBank, { foreignKey: 'user_id' })
UserBank.belongsTo(User, { foreignKey: 'user_id' })

Bank.hasMany(UserBank, { foreignKey: 'bank_id' })
UserBank.belongsTo(Bank, { foreignKey: 'bank_id' })

User.hasMany(UserHospital, { foreignKey: 'user_id' })
UserHospital.belongsTo(User, { foreignKey: 'user_id' })

Hospital.hasMany(UserHospital, { foreignKey: 'hospital_id' })
UserHospital.belongsTo(Hospital, { foreignKey: 'hospital_id' })


// sequelize.sync({ force: true });
sequelize.sync();
module.exports = {
  Admin: Admin,
  User: User,
  Hospital: Hospital,
  Bank: Bank,
  UserBank: UserBank,
  UserHospital: UserHospital
};
