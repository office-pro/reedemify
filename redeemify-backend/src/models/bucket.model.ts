import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import * as models from './index';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class bucket extends Model {
        static associate(models: any) {
            bucket.belongsTo(models['brandId'], {
                foreignKey: "brandId",


            })
             bucket.belongsTo(models['userId'], {
                foreignKey: "createdBy",


            })
            
            
        }

        // static async deletebuckets(bucketIds: Array<number>,conditions: any = {}) {
        //     return sequelize.transaction(async () => {
        //         return bucket.destroy({
        //             where: {
        //               bucketId: {
        //                 [Op.in]: bucketIds
        //               } 
        //             },
        //             ...conditions
        //         })    
        //     })
        // }

        // static async getAllbuckets() {

        //    return sequelize.transaction(async() => {
        //      return await bucket.findAll({
        //         include: [{
        //             model: models?.default?.bucketCategory,
        //             attributes: ['bucketCategoryId', 'bucketCategoryName','bucketCategoryDesc']
        //         }, 
        //         {
        //             model: models?.default?.bucketSubCategory,
        //             attributes: ['bucketSubCategoryId', 'bucketSubCategoryName', 'bucketSubCategoryDesc']
        //         }
        //         ]
        //     });
        //    });
           
        // }

        // static async createbucket(bucketItems: Array<any>, conditions: any = {}) {

        //     return StaticModelHelper.bulkCreateOrUpdate(bucket,bucketItems, {
        //         keys: ['bucketName'],
        //         ...conditions
        //     }, {
        //         keys: ['bucketName']
        //     })
        // }
    }

    bucket.init({
        bucketId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
       
      
       
       
        updatedAt: {
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
        modelName: 'bucket',
        tableName: 'bucket'
    });

    return bucket;

}