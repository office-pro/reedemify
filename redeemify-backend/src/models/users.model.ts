import { DataTypes, Model, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  class User extends Model {
    static Brands: any;
    static Roles: any;
    static associate (models: any) {
      User.Brands = User.hasOne(models['Brands']);
      User.Roles = User.hasOne(models['Roles']);
    }

    async createUser({brandId,roleId,firstName,lastName,mobileNo,email,password}: any) {
      sequelize.transaction(async() => {
        await User.create({brandId,roleId,firstName,lastName,mobileNo,email,password})
      })
    }


  }
  User.init({
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
    modelName: "User"
  })
}