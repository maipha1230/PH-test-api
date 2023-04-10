
module.exports = (sequelize, Sequelize) => {
    const user_bank = sequelize.define('user_bank', {
        user_bank_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        bank_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_bank_code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_bank_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    })

    return user_bank;
}