
module.exports = (sequelize, Sequelize) => {
    const bank = sequelize.define('bank', {
        bank_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        bank_name_th: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bank_name_en: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    })

    return bank;
}