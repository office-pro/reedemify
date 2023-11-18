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
    await queryInterface.changeColumn("users", 'password', {
      type: DataTypes.STRING(255),
      allowNull: true
    })

    await queryInterface.addColumn("users", 'dob', {
      type: DataTypes.DATEONLY,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.changeColumn("users", 'password', {
      type: DataTypes.STRING(255),
      allowNull: false
    });

    await queryInterface.removeColumn("users", 'dob');
  }
};
