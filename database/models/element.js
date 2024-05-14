const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Element extends Model { }

Element.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    icon: {
        type: DataTypes.BLOB,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Element'
});


module.exports = Element;