import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import * as models from './index';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class bucketListProduct extends Model {
        static associate(models: any) {
            bucketListProduct.belongsTo(models['product'], {
                foreignKey: "productId",
            })
             bucketListProduct.belongsTo(models['users'], {
                foreignKey: "userId",
            })

            bucketListProduct.belongsTo(models['bucket'], {
                foreignKey: "bucketId",
            })
            
            
        }

        static async deletebucketListProducts(bucketListProductIds: Array<number>,conditions: any = {}) {
            return sequelize.transaction(async () => {
                return bucketListProduct.destroy({
                    where: {
                      bucketListProductId: {
                        [Op.in]: bucketListProductIds
                      } 
                    },
                    ...conditions
                })    
            })
        }

        static async getAllbucketListProducts() {

           return sequelize.transaction(async() => {
            return await bucketListProduct.findAll({
                
            });
           });
           
        }

        
        static async editbucketListProduct(bucketListProduct: any, conditions: any = {onSuccess: () => {}, onError: () => {}} ) {
            return bucketListProduct.findByPk(bucketListProduct.bucketListProductId)
                             .then((bucketProduct: any) => {
                                if(!!bucketProduct) {
                                    bucketProduct.bucketId = bucketListProduct.bucketId;
                                    bucketProduct.productId= bucketListProduct.productId
                                    bucketProduct.points= bucketListProduct.points
                                    bucketProduct.price= bucketListProduct.price
                                    bucketProduct.discount= bucketListProduct.discount
                                    bucketProduct.discount= bucketListProduct.discount;
                                    return bucketProduct.save()
                                } else {
                                    console.log("BucketList Product not found");
                                    return null;
                                }
                             })
                             .then((updatedBucketProductList: any) => {
                                console.log("Product successfully updated in bucket");
                                conditions.onSuccess(updatedBucketProductList);
                             })
                             .catch((error: any) => {
                                console.log("error updating product");
                                conditions.onError(error)
                             })
            
        }


        static async createbucketListProduct(bucketListProductItems: Array<any>, conditions: any = {}) {

            // return StaticModelHelper.bulkCreateOrUpdate(bucketListProduct,bucketListProductItems, {
            //     keys: ['bucketId','productId'],
            //     ...conditions
            // }, {
            //     keys: []
            // })

            return sequelize.transaction(async() => {
                return await bucketListProduct.bulkCreate(bucketListProductItems);
            })
        }

        static async getByBucketId(queryParams:any) {

            return sequelize.transaction(async() => {
              return await bucketListProduct.findAll({
                where:{
                    bucketId: queryParams.bucketId
                }
             });
            });
            
         }
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
        userId:{
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