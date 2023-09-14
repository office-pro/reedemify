import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import * as models from './index';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class productCategory extends Model {
        static associate(models: any) {
            productCategory.hasMany(models?.product, {
                foreignKey: 'productCategoryId'
            });

            productCategory.hasMany(models?.productSubCategory, {
                foreignKey: 'productCategoryId'
            });
          
        }

        static async getProductCategories(conditions: any = {}) {
            return sequelize.transaction(async () => {
                return productCategory.findAll({
                    include: [
                        {
                            model: models.default.product
                        },
                        {
                            model: models.default.productSubCategory
                        }
                    ],
                    ...conditions
                })    
            })
        }

        static async deleteProductCategories(productCategoriesIds: Array<number>,conditions: any = {}) {
            return sequelize.transaction(async () => {
                return productCategory.destroy({
                    where: {
                      productCategoryId: {
                        [Op.in]: productCategoriesIds
                      } 
                    },
                    ...conditions
                })    
            })
        }

        static async createProductCategories(productCategories: Array<any>, conditions: any = {}) {
            return StaticModelHelper.bulkCreateOrUpdate(productCategory,productCategories, {
                keys: ['productCategoryName'],
                ...conditions
            }, {
                keys: ['productCategoryName']
            })
        }
    }

    productCategory.init({
        productCategoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productCategoryName: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50],
                    msg: 'roleName should be between 2 and 50 characters'
                }
            },
            unique: true
        },
        productCategoryDesc: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50],
                    msg: 'roleName should be between 2 and 50 characters'
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue : new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue : Sequelize.literal("CURRENT_TIMESTAMP"),
            onUpdate: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP") as unknown as string
        },
       

    }, {
        sequelize,
        modelName: 'productCategory',
        tableName: 'productCategory',
        timestamps: true
    });

    return productCategory;

}