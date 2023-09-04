import { Sequelize, Model, DataTypes } from 'sequelize';
export default (sequelize: Sequelize) => {
    class productTransactionHistory extends Model {
        static associate(models: any) {
            productTransactionHistory.belongsTo(models['product'], {
                foreignKey: "productId",

            })
            productTransactionHistory.belongsTo(models['user'], {
                foreignKey: "userId",

            })
            productTransactionHistory.belongsTo(models['brand'], {
                foreignKey: "brandId",

            })

        }
    }

    productTransactionHistory.init({
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
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
            modelName: 'productTransactionHistory',
            tableName: 'productTransactionHistory'
        });

    return productTransactionHistory;

}