const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class QuestType extends Model {
    static async createQuestType(type) {
        try {
            await QuestType.sync({ force: false });
            await QuestType.create({ type: type });
        } catch (err) {
            console.error('Error syncing QuestType');
        }
    }
}

QuestType.init({
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'QuestType'
});

module.exports = QuestType;