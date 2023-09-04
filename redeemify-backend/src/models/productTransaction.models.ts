import { Sequelize, Model, DataTypes } from 'sequelize';
export default (sequelize: Sequelize) => {
    class productTransaction extends Model {
        static associate(models: any) {
            productTransaction.belongsTo(models['product'], {
                foreignKey: "productId",

            })
            productTransaction.belongsTo(models['productTransactionHistory'], {
                foreignKey: "Id",

            })

        }
    }

    productTransaction.init({
        ptId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sumOfPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
        {
            sequelize,
            modelName: 'productTransaction',
            tableName: 'productTransaction'
        });

    return productTransaction;

}