import { Sequelize, Model, DataTypes } from 'sequelize';
export default (sequelize: Sequelize) => {
    class productSubCategory extends Model {
        static associate(models: any) {
            productSubCategory.belongsTo(models['productCategory'], {
                foreignKey: "productCategoryId"
            })
        }
    }

    productSubCategory.init({
        productSubCategoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productSubCategoryName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "bucketName must be within 3 and 100 characters"
                }
            }
        },
        productSubCategoryDesc:{
            type :DataTypes.STRING,
            allowNull:false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "bucketName must be within 3 and 100 characters"
                }
            }

        }

    }, {
        sequelize,
        modelName: 'productSubCategory',
        tableName: 'productSubCategory'
    });

    return productSubCategory;

}
