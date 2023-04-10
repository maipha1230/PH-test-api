
module.exports = (sequelize, Sequelize) => {
    const user_hospital = sequelize.define('user_hospital', {
        user_hospital_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        hospital_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
    })

    return user_hospital;
}