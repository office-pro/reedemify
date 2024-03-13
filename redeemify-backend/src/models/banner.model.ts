import {Sequelize, Model, DataTypes, Op} from 'sequelize';
import * as models from './index';
import { resolve } from 'path';
import { StaticModelHelper } from './static-model-helper';
export default (sequelize: Sequelize) => {
  class brandbanners extends Model {
    static associate(models: any) {
      // brandbanners.belongsTo(models?.users, {foreignKey: 'brandId'});
      brandbanners.belongsTo(models?.users, {foreignKey: 'userId'});
      brandbanners.belongsTo(models?.brands, {foreignKey: 'brandId'});
    }

    static buildDefaultValues({balance,limit,brandCss}: any) {
      return {
        balance: !balance ? 0 : balance,
        limit: !limit ? 0 : limit,
        brandCss: !brandCss ? {} : brandCss
      }
    }

    static createBanners({brandName,balance,limit,brandCss}: any) {
      const data = brandbanners.buildDefaultValues({balance,limit,brandCss});

      balance = data.balance;
      limit = data.limit;
      brandCss = data.brandCss;

      return sequelize.transaction(async () => {
        const [brand, created] = await brandbanners.findOrCreate({
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

    static createbrandbanners(brandbannersArr: Array<{headerText: string,subHeaderText: string,brandId: number, userId: number,link: string, imageUrl: string}>) {
      // return sequelize.transaction(async() => {
      //    return brandbanners.bulkCreate(brandbannersArr,{
      //     updateOnDuplicate: ['brandName']
      //    })

      return StaticModelHelper.bulkCreateOrUpdate(brandbanners,brandbannersArr, {
          keys: ['brandId','userId', 'headerText','subHeaderText','link','imageUrl']
         }, {
          keys: []
         })
      // });
    }

    static deleteBrandBanners(bannerIds: Array<any>, options: any = {}) {
       return sequelize.transaction(async () => {
                return brandbanners.destroy({
                    where: {
                      bannerId: {
                        [Op.in]: bannerIds
                      } 
                    },
                    ...options
                })    
            })
    }

    static findBrandBannerByBrandId(options = {}) {
      return sequelize.transaction(async() => {
        return brandbanners.findAll({
          ...options
        }
        //   {
        // where: brand,
        // attributes: ['brandId', 'brandName', 'brandCss', 'limit','balance','showPoweredByText','isActive','showBanner', 'showClientProducts'],
        // include: [
        //   {  model: models?.default?.users,
        //     attributes: ['userId','firstName','lastName','mobileNo','roleId','email'],
        //     include: [{
        //       model: models?.default?.roles,
        //       attributes: ['roleName']
        //     }]
        //   }
        // ]
        // }
        );
      });
    }

    static findAllbrandbanners(options: any = {}) {
      return sequelize.transaction(async() => {
        return brandbanners.findAll(
        //   {
        // attributes: ['brandId', 'brandName','brandCss','showPoweredByText', 'isActive','showBanner', 'showClientProducts'],
        // include: [
        //   {  model: models?.default?.users,
        //     attributes: ['userId','firstName','lastName','mobileNo','roleId','email'],
        //     include: [{
        //       model: models?.default?.roles,
        //       attributes: ['roleName']
        //     }]
        //   }
        // ],
        // ...options
        // }
        );
      });
    }
  }

  brandbanners.init({
    bannerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    brandId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    headerText: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    subHeaderText: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    link: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    imageUrl: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  },{
    sequelize,
    timestamps: true,
    modelName: 'brandbanners',
    tableName: 'brandbanners'
  });

  return brandbanners;
  
}