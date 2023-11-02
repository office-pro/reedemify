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

     await queryInterface.removeColumn('bucket', "createdBy");
     await queryInterface.removeColumn('bucketListProduct', "createdBy");

     await queryInterface.addColumn('bucket', "userId", {
      type: DataTypes.INTEGER,
      allowNull: false
     });
     
     await queryInterface.addColumn('bucketListProduct',"userId", {
      type: DataTypes.INTEGER,
      allowNull: false
     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.addColumn('bucket', "createdBy", {
      type: DataTypes.INTEGER,
      allowNull: false
     });
     
     await queryInterface.removeColumn('bucketListProduct',"createdBy", {
      type: DataTypes.INTEGER,
      allowNull: false
     });

     await queryInterface.removeColumn('bucket', "userId");
     await queryInterface.removeColumn('bucketListProduct', "userId");

     
  }
};
