import {Sequelize, Model, DataTypes} from 'sequelize';
export default (sequelize: Sequelize) => {
  class Brands extends Model {
    static associate(models: any) {
    }
  }

  Brands.init({
    brandId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brandName: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    brandCss: {
      type: DataTypes.JSON,
      allowNull: false
    }

  },{
    sequelize,
    modelName: 'Brands'
  });

  return Brands;
  
}