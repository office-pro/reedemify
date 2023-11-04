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
    await queryInterface.changeColumn("brands","brandCss", {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        primaryColor: "#3880ff",
        secondaryColor: "#3dc2ff",
        logo: 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/demo-logo/logo.png',
        headerColor: "#ffffff",
        textColor: "#0b171b",
        isDarkMode: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.changeColumn("brands","brandCss", {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        primaryColor: "#3880ff",
        secondaryColor: "#3dc2ff",
        logo: 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/demo-logo/logo.png',
        isDarkMode: false
      }
    })
  }
};
