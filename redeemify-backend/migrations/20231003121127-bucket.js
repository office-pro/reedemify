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
     * 
     * 
     * 
     */

    await queryInterface.createTable('bucket',
     { bucketId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
       
      
       
       
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        createdBy:{
            type:DataTypes.INTEGER,
            allowNull:false,


        }})
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
