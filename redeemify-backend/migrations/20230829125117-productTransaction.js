'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('productTransaction', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('productTransaction', {
        ptId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sumOfPoints: {
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
     * await queryInterface.dropTable('productTransaction');
     */
    await queryInterface.dropTable('productTransaction');
  }
};
