import { Sequelize, Model, DataTypes } from 'sequelize';
export default (sequelize: Sequelize) => {
    class bucketListProduct extends Model {
        static associate(models: any) {
            bucketListProduct.belongsTo(models['bucket'], {
                foreignKey: "bucketId",

            })
            bucketListProduct.belongsTo(models['product'], {
                foreignKey: "productId",

            })

        }
    }

    bucketListProduct.init({
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bucketId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
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
            modelName: 'bucketListProduct'
        });

    return bucketListProduct;

}