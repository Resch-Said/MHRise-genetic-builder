const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Quest extends Model { }

Quest.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    level: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'Quest'
});

module.exports = Quest;