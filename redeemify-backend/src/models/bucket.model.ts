import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import * as models from './index';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class bucket extends Model {
        static associate(models: any) {
            // bucket.belongsTo(models['brands'], {
            //     foreignKey: "brandId",
            // })
             bucket.belongsTo(models['users'], {
                foreignKey: "userId",
            })

            bucket.hasMany(models['bucketListProduct'], {
                foreignKey: "bucketId",
            })
            
            
        }

        static async deletebuckets(bucketIds: Array<number>,conditions: any = {}) {
            return sequelize.transaction(async () => {
                console.log(bucketIds)
                return bucket.destroy({
                    where: {
                      bucketId: {
                        [Op.in]: bucketIds
                      } 
                    },
                    ...conditions
                })    
            })
        }

        static async getAllbuckets(conditions: any = {}) {
           console.log("conditions - ", conditions)
           return sequelize.transaction(async() => {
             return await bucket.findAll({
                include: [
                {
                    model: models?.default?.users,
                    attributes: ['userId', 'firstName', 'lastName']
                }
                , 
                {
                    model: models?.default?.bucketListProduct,
                    include: [
                       { 
                          model: models?.default?.product,
                          include: [
                            {
                                model: models?.default?.productImagesUrlContainer,
                                attributes: ['productImagesUrlContainerId', 'productImagesName', 'imageUrls']
                            }
                          ]
                       }
                    ]
                }],
                ...conditions
            });
           });
           
        }

        static async createbucket(bucketItems: Array<any>, conditions: any = {}) {

            return StaticModelHelper.bulkCreateOrUpdate(bucket,bucketItems, {
                keys: ['bucketName'],
                ...conditions
            }, {
                keys: ['bucketName']
            })
        }
    }

    bucket.init({
        bucketId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bucketName:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true

        },
        // brandId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        
    //    isActive: {
    //         type: DataTypes.BOOLEAN,
    //         defaultValue:false,
    //         allowNull: false
    //     },
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
        userId:{
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