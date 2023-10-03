import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import * as models from './index';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class bucketListProduct extends Model {
        static associate(models: any) {
            bucketListProduct.belongsTo(models['bucket'], {
                foreignKey: "bucketId",


            })
             bucketListProduct.belongsTo(models['users'], {
                foreignKey: "createdBy",


            })
            
            
        }

        // static async deletebucketListProducts(bucketListProductIds: Array<number>,conditions: any = {}) {
        //     return sequelize.transaction(async () => {
        //         return bucketListProduct.destroy({
        //             where: {
        //               bucketListProductId: {
        //                 [Op.in]: bucketListProductIds
        //               } 
        //             },
        //             ...conditions
        //         })    
        //     })
        // }

        // static async getAllbucketListProducts() {

        //    return sequelize.transaction(async() => {
        //      return await bucketListProduct.findAll({
        //         include: [{
        //             model: models?.default?.bucketListProductCategory,
        //             attributes: ['bucketListProductCategoryId', 'bucketListProductCategoryName','bucketListProductCategoryDesc']
        //         }, 
        //         {
        //             model: models?.default?.bucketListProductSubCategory,
        //             attributes: ['bucketListProductSubCategoryId', 'bucketListProductSubCategoryName', 'bucketListProductSubCategoryDesc']
        //         }
        //         ]
        //     });
        //    });
           
        // }

        // static async createbucketListProduct(bucketListProductItems: Array<any>, conditions: any = {}) {

        //     return StaticModelHelper.bulkCreateOrUpdate(bucketListProduct,bucketListProductItems, {
        //         keys: ['bucketListProductName'],
        //         ...conditions
        //     }, {
        //         keys: ['bucketListProductName']
        //     })
        // }
    }

    bucketListProduct.init({
        bucketListProductId: {
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
        points:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        },
         price:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        },
        discount:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0

        },
    
         updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
         createdBy:{
            type:DataTypes.INTEGER,
            allowNull:false,


        }
       
      
       
       
       

    }, {
        sequelize,
        modelName: 'bucketListProduct',
        tableName: 'bucketListProduct'
    });

    return bucketListProduct;

}