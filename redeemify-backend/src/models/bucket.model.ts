import {Sequelize, Model, DataTypes} from 'sequelize';

export default (sequelize: Sequelize) => {
  class productCategory extends Model {
    static associate(models: any) {
      // productCategory.belongsTo(models['Brands'], {
      //   foreignKey: "brandId"
      // })
    }
  }

  productCategory.init({
    productCategoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    productCategoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 100],
          msg: "productCategoryName must be within 3 and 100 characters"
        }
      }
    },
    productCategoryDesc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3,],
          msg: "bucketName must be within 3 and 100 characters"
        }
      }
    }

  },{
    sequelize,
    modelName: 'Buckets'
  });

  return Buckets;
  
}