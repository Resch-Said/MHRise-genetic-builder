const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class SlotType extends Model {
    static async createSlotType(type) {
        try {
            await SlotType.sync({ force: false });
            await SlotType.create({ type: type });
        } catch (err) {
            console.error('Error syncing SlotType');
        }
    }
}

SlotType.init({
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'SlotType'
});


module.exports = SlotType;