import { Sequelize, Model, DataTypes } from 'sequelize';
import * as models from './index';
export default (sequelize: Sequelize) => {
    class product extends Model {
        static associate(models: any) {
            product.belongsTo(models['productCategory'], {
                foreignKey: "productCategoryId",
            })
            product.belongsTo(models['productSubCategory'], {
                foreignKey: "productSubCategoryId",
            })
        }

        static async getAllProducts() {

           return sequelize.transaction(async() => {
             return await product.findAll({
                include: [{
                    model: models?.default?.productCategory,
                    attributes: ['productCategoryId', 'productCategoryName','productCategoryDesc']
                }, 
                {
                    model: models?.default?.productSubCategory,
                    attributes: ['productSubCategoryId', 'productSubCategoryName', 'productSubCategoryDesc']
                }
                ]
            });
           });
        }
    }

    product.init({
        productId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productSubCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "productName must be within 3 and 100 characters"
                }
            }
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productImage: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            defaultValue: []
        },
        productDesc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "productDesc must be within 3 and 100 characters"
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        }

    }, {
        sequelize,
        modelName: 'product',
        tableName: 'product'
    });

    return product;

}