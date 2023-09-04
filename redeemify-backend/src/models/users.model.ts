import { DataTypes, Model, Sequelize } from "sequelize";
import * as models from "./index";

export default (sequelize: Sequelize) => {
  class users extends Model {
    static associate (models: any) {
      users.belongsTo(models['brands'], {foreignKey: 'brandId'});
      users.belongsTo(models['roles'], {foreignKey: 'roleId'});
    }

    static createUser({brandId,roleId,firstName,lastName,mobileNo,email,password}: any) {
      sequelize.transaction(async() => {
        await users.create({brandId,roleId,firstName,lastName,mobileNo,email,password})
      })
    }

    static deleteUsers(userId: any) {
       sequelize.transaction(async() => {
          await users.destroy({
            where: {
              'userId': userId
            }
          })
       })
    }

    static getUserById(userId: number) {
      return sequelize.transaction(async() => {
        return users.findOne({
          where: {
            'userId': userId
          },
          include: [
            { 
              model: models.default.brands,
              attributes: ['brandName','brandId']
            },
            {
              model: models.default.roles,
              attributes: ['roleId','roleName']
            }
          ],
          attributes: {
            exclude: ['password','createdAt','updatedAt']
          }
        })
      })
    }

    static getUsers() {
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
            }
          ],
          attributes: {
            exclude: ['password','createdAt','updatedAt']
          }
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
      type: DataTypes.INTEGER,
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
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }


  }, {
    sequelize,
    modelName: "users",
    tableName: "users"
  });
  return users;
}