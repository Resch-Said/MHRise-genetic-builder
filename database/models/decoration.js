const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Decoration extends Model { }

Decoration.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    level: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Decoration'
});


module.exports = Decoration;