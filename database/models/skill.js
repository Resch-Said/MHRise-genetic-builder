const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Skill extends Model { }

Skill.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    description: DataTypes.TEXT
}, {
    sequelize,
    modelName: 'Skill'
});

module.exports = Skill;