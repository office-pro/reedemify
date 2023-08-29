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
    await queryInterface.createTable('productSubCategory',  {
        productSubCategoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productSubCategoryName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "productSubCategoryName must be within 3 and 100 characters"
                }
            }
        },
        productSubCategoryDesc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "bucketName must be within 3 and 100 characters"
                }
            }

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
     await queryInterface.dropTable('productSubCategory');
  }
};
