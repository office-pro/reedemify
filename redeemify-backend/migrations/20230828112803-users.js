'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('users', {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
      references: {
        model: "brands",
        key: "brandId"
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    roleId: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      },
      references: {
        model: 'roles',
        key: 'roleId'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
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


  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('users');
  }
};
