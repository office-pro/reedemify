import { DataTypes, Model, Op, Sequelize } from "sequelize";
import * as models from "./index";
import { StaticModelHelper } from "./static-model-helper";

export default (sequelize: Sequelize) => {
  class Vouchers extends Model {
    static associate (models: any) {
      // Vouchers.belongsTo(models['brands'], {foreignKey: 'brandId'});
      // Vouchers.belongsTo(models['users'], {foreignKey: 'roleId'});
      
    }

    static createVouchers(voucherArr: Array<any> = []) {
      return StaticModelHelper.bulkCreateOrUpdate(Vouchers,voucherArr, {
          keys: ['couponCode', 'voucherName']
         }, {
          keys: ['couponCode', 'voucherName']
      })
    }

    static deleteVouchers(voucherIds: Array<any>, options: any = {}) {
       return sequelize.transaction(async () => {
                return Vouchers.destroy({
                    where: {
                      userId: {
                        [Op.in]: voucherIds
                      } 
                    },
                    ...options
                })    
            })
    }

    // static getVoucherById(user: {userId?: number, userName?: string, mobileNo?:number}) {
    //   return sequelize.transaction(async() => {
    //     return Vouchers.findOne({
    //       where: user,
    //       include: [
    //         { 
    //           model: models.default.brands,
    //           attributes: ['brandName','brandId', 'brandCss', 'isActive', 'showPoweredByText','showBanner','showClientProducts']
    //         },
    //         {
    //           model: models.default.roles,
    //           attributes: ['roleId','roleName']
    //         },
    //         {
    //           model: models.default.wallet,
    //           attributes: ['walletId','points']
    //         }
    //       ],
    //       attributes: {
    //         exclude: ['password','createdAt','updatedAt']
    //       }
    //     })
    //   })
    // }

    static getVouchers(options: any = {}) {
      return sequelize.transaction(async() => {
        return Vouchers.findAll({
          // include: [
          //   { 
          //     model: models.default.brands,
          //     attributes: ['brandName','brandId']
          //   },
          //   {
          //     model: models.default.roles,
          //     attributes: ['roleId','roleName']
          //   },
          //   {
          //     model: models.default.wallet,
          //     attributes: ['walletId','points']
          //   }
          // ],
          // attributes: {
          //   exclude: ['password','createdAt','updatedAt']
          // },
          ...options
        })
      })
    }

  }
  Vouchers.init({
    voucherId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    voucherName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    couponCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: "Vouchers",
    tableName: "vouchers",
    timestamps: true
  });
  return Vouchers;
}