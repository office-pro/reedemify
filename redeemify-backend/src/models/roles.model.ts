import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize: Sequelize) => {
  class roles extends Model {
    static associate(models: any) {
      // Roles.belongsTo(models['Users']);
      // roles.belongsTo(models?.users)
    }

    static async createNewRole({
      roleName
    }: any) {
       return sequelize.transaction(async () => {
         await roles.create({
          roleName
         })
       })
    }
  }

  roles.init({
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
    modelName: 'roles', // The name of the model
    tableName: 'roles'
  });

  return roles;
}