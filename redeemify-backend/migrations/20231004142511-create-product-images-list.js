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

    await queryInterface.createTable('productImagesUrlContainer', {
        productImagesUrlContainerId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        productImagesName: {
          type: DataTypes.STRING
        },
        imageUrls: {
          type: DataTypes.BLOB,
          allowNull: true
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: new Date()
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: new Date()
        }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('productImagesUrlContainer');
  }
};
