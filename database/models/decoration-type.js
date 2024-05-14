const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class DecorationType extends Model {

    static async createDecorationType(type) {
        try {
            await DecorationType.sync({ force: false });
            await DecorationType.create({ type: type });
        } catch (err) {
            console.error('Error syncing DecorationType');
        }
    }
}

DecorationType.init({
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'DecorationType'
});


module.exports = DecorationType;