import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize: Sequelize) => {
  class Roles extends Model {
    static associate(models: any) {
      // Roles.belongsTo(models['Users']);
    }

    static async createNewRole({
      roleName
    }: any) {
       return sequelize.transaction(async () => {
         await Roles.create({
          roleName
         })
       })
    }
  }

  Roles.init({
    roleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    roleName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2,50],
          msg: 'roleName should be between 2 and 50 characters'
        }
      }
    }
  },{
    sequelize,
    modelName: 'Roles', // The name of the model
  })
}