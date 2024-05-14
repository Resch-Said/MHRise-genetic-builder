const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/mhrise.db'
});

class Rank extends Model {
    static async createRank(name) {
        try {
            await Rank.sync({ force: false });
            await Rank.create({ name: name });
        } catch (err) {
            console.error('Error syncing Rank');
        }
    }
}

Rank.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'Rank'
});

module.exports = Rank;