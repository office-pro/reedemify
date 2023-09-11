import { Sequelize, Model, DataTypes } from 'sequelize';
import * as models from './index';
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

        static async getProductCategories() {
             return sequelize.transaction(async () => {

              
                return productCategory.findAll({
                    include: [
                        {
                            model: models.default.product
                        },
                        {
                            model: models.default.productSubCategory
                        }
                    ]
                })

                          
            })
        }

        static async createProductCategories(productCategories: Array<any>) {
            let duplicateCategories = [];
            return sequelize.transaction(async () => {

              productCategories.map(async ({productCategoryName,productCategoryDesc}: any) => {
                const [product,created] = await productCategory.findOrCreate({
                    where: {productCategoryName,productCategoryDesc}
                })

                if(!created) {
                  console.log(product)
                } else {
                  console.log(created)
                }
                
              })  
              
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
            }
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
            defaultValue : new Date()
        },
       

    }, {
        sequelize,
        modelName: 'productCategory',
        tableName: 'productCategory'
    });

    return productCategory;

}