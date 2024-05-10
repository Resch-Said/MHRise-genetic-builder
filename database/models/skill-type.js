const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/mhrise.db'
});

class SkillType extends Model {
  static async createSkillType(type) {
    try {
      await SkillType.sync({ force: false });
      await SkillType.create({ type: type });
    } catch (err) {
      console.error('Error syncing SkillType');
    }
  }
}

SkillType.init({
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'SkillType'
});

module.exports = SkillType;