import {Sequelize, Model, DataTypes} from 'sequelize';
import * as models from './index';
import { resolve } from 'path';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
  class brands extends Model {
    static associate(models: any) {
      // brands.belongsTo(models?.users, {foreignKey: 'brandId'});
      brands.hasMany(models?.users, {foreignKey: 'brandId'});
      brands.hasOne(models?.wallet)
    }

    static buildDefaultValues({balance,limit,brandCss}: any) {
      return {
        balance: !balance ? 0 : balance,
        limit: !limit ? 0 : limit,
        brandCss: !brandCss ? {} : brandCss
      }
    }

    static createBrand({brandName,balance,limit,brandCss}: any) {
      const data = brands.buildDefaultValues({balance,limit,brandCss});

      balance = data.balance;
      limit = data.limit;
      brandCss = data.brandCss;

      return sequelize.transaction(async () => {
        const [brand, created] = await brands.findOrCreate({
          where: { brandName, balance, limit, brandCss }
        });
        let promise = new Promise((resolve, reject) => {
          if (created) {
            resolve(created);
          } else {
            reject(brand);
          }
        });
        return promise;
      })
    }

    static createBrands(brandsArr: Array<{brandName: string,balance: any,limit: any,brandCss: any}>) {
      // return sequelize.transaction(async() => {
      //    return brands.bulkCreate(brandsArr,{
      //     updateOnDuplicate: ['brandName']
      //    })

      return StaticModelHelper.bulkCreateOrUpdate(brands,brandsArr, {
          keys: ['brandName']
         }, {
          keys: ['brandName']
         })
      // });
    }

    static findBrandByBrandId(brand: {brandId?: number, brandName?: string}) {
      return sequelize.transaction(async() => {
        return brands.findAll({
        where: brand,
        attributes: ['brandId', 'brandName', 'brandCss', 'limit','balance', 'isActive'],
        include: [
          {  model: models?.default?.users,
            attributes: ['userId','firstName','lastName','mobileNo','roleId','email'],
            include: [{
              model: models?.default?.roles,
              attributes: ['roleName']
            }]
          }
        ]
        });
      });
    }

    static findAllBrands() {
      return sequelize.transaction(async() => {
        return brands.findAll({
        attributes: ['brandId', 'brandName','brandCss'],
        include: [
          {  model: models?.default?.users,
            attributes: ['userId','firstName','lastName','mobileNo','roleId','email'],
            include: [{
              model: models?.default?.roles,
              attributes: ['roleName']
            }]
          }
        ]
        });
      });
    }
  }

  brands.init({
    brandId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brandName: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: true
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
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  },{
    sequelize,
    timestamps: true,
    modelName: 'brands',
    tableName: 'brands'
  });

  return brands;
  
}