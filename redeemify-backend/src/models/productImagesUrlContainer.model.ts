import { Sequelize, Model, DataTypes, Op } from 'sequelize';
import * as models from './index';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
    class productImagesUrlContainer extends Model {
        static associate(models: any) {
          // productImagesUrlContainer.belongsTo(models['product'],{
          //       foreignKey: "productImagesUrlContainerId"
          // })
        }

        static async deleteProductImagesUrlContainers(productImagesUrlContainerId: Array<number>,conditions: any = {}) {
            return sequelize.transaction(async () => {
                return productImagesUrlContainer.destroy({
                    where: {
                      productId: {
                        [Op.in]: productImagesUrlContainerId
                      } 
                    },
                    ...conditions
                })    
            })
        }

        static async getAllProductImagesUrlContainer() {
           return sequelize.transaction(async() => {
             return await productImagesUrlContainer.findAll({
                attributes: ['imageUrls','productImagesName','productImagesUrlContainerId']
            });
           });
           
        }

        static async createProductImagesUrlContainer(productItems: Array<any>, conditions: any = {}) {

            return StaticModelHelper.bulkCreateOrUpdate(productImagesUrlContainer,productItems, {
                keys: ['productImagesName'],
                ...conditions
            }, {
                keys: ['productImagesName']
            })
        }
    }

    productImagesUrlContainer.init(
      {
        productImagesUrlContainerId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        productImagesName: {
          type: DataTypes.STRING
        },
        imageUrls: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: true
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: new Date()
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: new Date()
        }
    }, {
        sequelize,
        modelName: 'productImagesUrlContainer',
        tableName: 'productImagesUrlContainer'
    });

    return productImagesUrlContainer;

}