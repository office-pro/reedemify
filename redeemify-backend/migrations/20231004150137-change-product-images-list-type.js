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
    await queryInterface.removeColumn('productImagesUrlContainer', "imageUrls");
    await queryInterface.addColumn('productImagesUrlContainer', "imageUrls",{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('productImagesUrlContainer', "imageUrls");
    await queryInterface.addColumn('productImagesUrlContainer', "imageUrls",{
      type: DataTypes.BLOB,
      allowNull: true
    });

  }
};
