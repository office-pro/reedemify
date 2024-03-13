import { DataTypes, Model, Op, Sequelize } from "sequelize";
import * as models from "./index";
import { StaticModelHelper } from "./static-model-helper";

export default (sequelize: Sequelize) => {
  class users extends Model {
    static associate (models: any) {
      users.belongsTo(models['brands'], {foreignKey: 'brandId'});
      users.belongsTo(models['roles'], {foreignKey: 'roleId'});
      users.hasOne(models['wallet'], {
        foreignKey: 'userId'
      });
    }

    static createUser({brandId,roleId,firstName,lastName,mobileNo,email,password}: any) {
      sequelize.transaction(async() => {
        await users.findOrCreate({
          where: {
            brandId,roleId,firstName,lastName,mobileNo,email,password
          }
        })
      })
    }

    static createUsers(usersArr: Array<any> = []) {
      return StaticModelHelper.bulkCreateOrUpdate(users,usersArr, {
          keys: ['mobileNo','email']
         }, {
          keys: ['mobileNo','email']
      })
    }

    static deleteUsers(userIds: Array<any>, options: any = {}) {
       return sequelize.transaction(async () => {
                return users.destroy({
                    where: {
                      userId: {
                        [Op.in]: userIds
                      } 
                    },
                    ...options
                })    
            })
    }

    static getUserById(user: {userId?: number, userName?: string, mobileNo?:number}) {
      return sequelize.transaction(async() => {
        return users.findOne({
          where: user,
          include: [
            { 
              model: models.default.brands,
              attributes: ['brandName','brandId', 'brandCss', 'isActive', 'showPoweredByText','showBanner','showClientProducts']
            },
            {
              model: models.default.roles,
              attributes: ['roleId','roleName']
            },
            {
              model: models.default.wallet,
              attributes: ['walletId','points']
            }
          ],
          attributes: {
            exclude: ['password','createdAt','updatedAt']
          }
        })
      })
    }

    static getUsers(options: any = {}) {
      return sequelize.transaction(async() => {
        return users.findAll({
          include: [
            { 
              model: models.default.brands,
              attributes: ['brandName','brandId']
            },
            {
              model: models.default.roles,
              attributes: ['roleId','roleName']
            },
            {
              model: models.default.wallet,
              attributes: ['walletId','points']
            }
          ],
          attributes: {
            exclude: ['password','createdAt','updatedAt']
          },
          ...options
        })
      })
    }

  }
  users.init({
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    firstName: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [2,100],
          msg: "FirstName must be in between 2 and 100"
        }
      },
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [2,100],
          msg: "LastName must be in between 2 and 100"
        }
      },
      allowNull: false
    },
    mobileNo: {
      type: DataTypes.BIGINT,
      validate: {
        len: {
          args: [10,10],
          msg: "MobileNo must be 10"
        }
      },
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }


  }, {
    sequelize,
    modelName: "users",
    tableName: "users"
  });
  return users;
}