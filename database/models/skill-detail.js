const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class SkillDetailDTO extends Model { }

SkillDetailDTO.init({
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'SkillDetail'
});


module.exports = SkillDetailDTO;