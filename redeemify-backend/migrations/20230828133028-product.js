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
    await queryInterface.createTable('product', {
        productId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productSubCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "productName must be within 3 and 100 characters"
                }
            }
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,


        },
        productImage: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        productDesc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100],
                    msg: "productDesc must be within 3 and 100 characters"
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
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
    await queryInterface.dropTable('product');
  }
};
