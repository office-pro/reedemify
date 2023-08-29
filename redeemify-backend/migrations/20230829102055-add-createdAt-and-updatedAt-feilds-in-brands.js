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

    await queryInterface.addColumn('brands','createdAt', { 
      type: DataTypes.DATE,
      defaultValue: new Date()
    });

    await queryInterface.addColumn('brands','updatedAt', { 
      type: DataTypes.DATE,
      defaultValue: new Date()
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('users','createdAt');
    await queryInterface.removeColumn('users','updatedAt');
  }
};
