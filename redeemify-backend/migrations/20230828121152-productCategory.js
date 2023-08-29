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
    await queryInterface.createTable('productCategory', {
        productCategoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productCategoryName: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50],
                    msg: 'roleName should be between 2 and 50 characters'
                }
            }
        },
        productCategoryDesc: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 50],
                    msg: 'roleName should be between 2 and 50 characters'
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },


    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('productCategory');
  }
};
