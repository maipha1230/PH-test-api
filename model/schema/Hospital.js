
module.exports = (sequelize, Sequelize) => {
    const hospital = sequelize.define('hospital', {
        hospital_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        hospital_code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hospital_name_th: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hospital_name_en: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    })

    return hospital;
}