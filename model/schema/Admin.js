
module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define('admin', {
        admin_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            uniqe: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    })

    return admin;
}