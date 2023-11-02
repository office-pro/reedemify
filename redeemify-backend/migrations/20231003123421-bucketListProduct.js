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
    await queryInterface.createTable('bucketListProduct',
     {  bucketListProductId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bucketId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        points:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        },
         price:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        },
        discount:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0

        },
    
         updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
         createdBy:{
            type:DataTypes.INTEGER,
            allowNull:false,


        } });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('bucketListProduct'); 
  }
};
