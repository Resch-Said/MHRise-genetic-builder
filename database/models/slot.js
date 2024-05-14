const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Slot extends Model { }

Slot.init({
    icon: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    level: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Slot'
});


module.exports = Slot;