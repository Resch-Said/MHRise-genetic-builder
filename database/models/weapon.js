const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Weapon extends Model { }

Weapon.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    elementAttack: DataTypes.INTEGER,
    sharpness: DataTypes.BLOB,
    affinity: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'Weapon'
});

module.exports = Weapon;