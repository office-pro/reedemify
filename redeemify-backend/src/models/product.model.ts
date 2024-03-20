import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import * as models from './index';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class product extends Model {
        static associate(models: any) {
            product.belongsTo(models['productCategory'], {
                foreignKey: "productCategoryId",
            })
            product.belongsTo(models['productSubCategory'], {
                foreignKey: "productSubCategoryId",
            })
            product.belongsTo(models['productImagesUrlContainer'], {
                foreignKey: "productImagesUrlContainerId"
            })
             product.belongsTo(models['Cart'], {
                foreignKey: "productId"
            })
        }

        static async deleteProducts(productIds: Array<number>,conditions: any = {}) {
            return sequelize.transaction(async () => {
                return product.destroy({
                    where: {
                      productId: {
                        [Op.in]: productIds
                      } 
                    },
                    ...conditions
                })    
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
                },
                {
                    model: models?.default?.productImagesUrlContainer,
                    attributes: ['productImagesUrlContainerId', 'productImagesName', 'imageUrls']
                },

                ]
            });
           });
           
        }

        static async getProductById(id: number) {

           return sequelize.transaction(async() => {
             return await product.findOne({
                where: {
                    productId: id
                },
                include: [{
                    model: models?.default?.productCategory,
                    attributes: ['productCategoryId', 'productCategoryName','productCategoryDesc']
                }, 
                {
                    model: models?.default?.productSubCategory,
                    attributes: ['productSubCategoryId', 'productSubCategoryName', 'productSubCategoryDesc']
                },
                {
                    model: models?.default?.productImagesUrlContainer,
                    attributes: ['productImagesUrlContainerId', 'productImagesName', 'imageUrls']
                },

                ]
            });
           });
           
        }

        static async createProduct(productItems: Array<any>, conditions: any = {}) {
            console.log("productItems - ",productItems);
            return StaticModelHelper.bulkCreateOrUpdate(product,productItems, {
                keys: ['productName'],
                ...conditions
            }, {
                keys: ['productName']
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
            allowNull: false
        },
        productImagesUrlContainerId: {
            type: DataTypes.INTEGER,
            allowNull: true
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