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
    await queryInterface.createTable('bucket', {
    bucketId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'brands',
        key:'brandId'
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
      
    },
    bucketName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3,100],
          msg: "bucketName must be within 3 and 100 characters"
        }
      }
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
     await queryInterface.dropTable('bucket');
  }
};
