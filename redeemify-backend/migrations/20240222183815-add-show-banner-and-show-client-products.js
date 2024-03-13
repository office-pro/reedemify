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

    await queryInterface.addColumn('brands', 'showBanner', {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    });
    await queryInterface.addColumn('brands', 'showClientProducts', {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('brands', 'showBanner');
    await queryInterface.removeColumn('brands', 'showClientProducts');
  }
};
