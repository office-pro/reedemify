import {Sequelize, Model, DataTypes} from 'sequelize';
export default (sequelize: Sequelize) => {
  class Buckets extends Model {
    static associate(models: any) {
      Buckets.belongsTo(models['Brands'], {
        foreignKey: "brandId"
      })
    }
  }

  Buckets.init({
    bucketId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bucketName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3,100],
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