import { Sequelize, Model, DataTypes } from 'sequelize';
export default (sequelize: Sequelize) => {
    class wallet extends Model {
        static associate(models: any) {
            wallet.belongsTo(models['user'], {
                foreignKey: "userId",

            })
            wallet.belongsTo(models['brand'], {
                foreignKey: "brandId",

            })

        }
    }

    wallet.init({
        walletId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
        {
            sequelize,
            modelName: 'wallet'
        });

    return wallet;

}