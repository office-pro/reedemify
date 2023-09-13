import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class productSubCategory extends Model {
        static associate(models: any) {
            productSubCategory.belongsTo(models['productCategory'], {
                foreignKey: "productCategoryId"
            })

            // productSubCategory.hasMany(models['product'])
        }


        static async createProductSubCategories(productSubCategories: Array<any>, conditions: any = {}) {

            return StaticModelHelper.bulkCreateOrUpdate(productSubCategory,productSubCategories, {
                keys: ['productSubCategoryName'],
                ...conditions
            }, {
                keys: ['productSubCategoryName']
            })
        }

        static async deleteProductSubCategories(productSubCategoriesIds:Array<any>){
            return sequelize.transaction(async ()=>{
                console.log(productSubCategoriesIds)
                return await productSubCategory.destroy({
                    where:productSubCategoriesIds,
                });    
            });
        
                
        }

        static async updateProductSubCategories(productSubCategories:Array<any>){
            return sequelize.transaction(async ()=>{
                console.log(productSubCategories)
                return await productSubCategory.update(productSubCategories[0],{
                    where:productSubCategories[1],
                    // where:,
                });    
            });
        
                
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
            },
            unique: true
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
        tableName: 'productSubCategory',
        timestamps: true
    });

    return productSubCategory;

}
