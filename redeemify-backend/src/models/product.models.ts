import { Sequelize, Model, DataTypes } from 'sequelize';
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
            allowNull: false,


        },
        productImage: {
            type: DataTypes.ARRAY,
            allowNull: false
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
        modelName: 'product'
    });

    return product;

}