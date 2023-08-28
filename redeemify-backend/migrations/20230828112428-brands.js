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
     await queryInterface.createTable('brands', {
    brandId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brandName: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    brandCss: {
      type: DataTypes.JSON,
      allowNull: false
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

    await queryInterface.dropTable('brands');
  }
};
