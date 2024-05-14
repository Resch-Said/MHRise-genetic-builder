const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Item extends Model { }

Item.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'Item'
});

module.exports = Item;