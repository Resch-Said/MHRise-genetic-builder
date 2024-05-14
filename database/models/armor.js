const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Armor extends Model { }

Armor.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    defense: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Armor'
});

module.exports = Armor;