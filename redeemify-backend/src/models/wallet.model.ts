import { Sequelize, Model, DataTypes } from 'sequelize';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class wallet extends Model {
        static associate(models: any) {
            wallet.belongsTo(models['users'], {
                foreignKey: "userId",
            })
            wallet.belongsTo(models['brands'], {
                foreignKey: "brandId",
            })

        }

        static createWallet(walletArr: Array<any> = []) {
            return StaticModelHelper.bulkCreateOrUpdate(wallet,walletArr, {
                keys: ['userId','brandId']
                }, {
                keys: ['userId','brandId']
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
            defaultValue: 0
        }
    },
        {
            sequelize,
            modelName: 'wallet',
            tableName: 'wallet'
        });

    return wallet;

}