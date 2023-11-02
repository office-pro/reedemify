'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('wallet', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('wallet', {
        walletId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('wallet');
     */
     await queryInterface.dropTable('wallet');
  }
};
