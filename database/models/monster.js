const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Monster extends Model { }

Monster.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'Monster'
});

module.exports = Monster;