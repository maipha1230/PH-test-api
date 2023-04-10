
module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        user_code: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        user_firstname_th: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_lastname_th: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_firstname_en: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_lastname_en: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_status: {
            type: Sequelize.INTEGER(1),
            allowNull: false
        },
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    })

    return user;
}