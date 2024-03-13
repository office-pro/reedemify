"use strict";

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		await queryInterface.createTable(
			"brandbanners",
			{
				bannerId: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				userId: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				brandId: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				headerText: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				subHeaderText: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				link: {
					type: DataTypes.STRING,
					allowNull: true,
				},
        imageUrl: {
					type: DataTypes.STRING,
					allowNull: true,
				},
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
			}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */

    await queryInterface.dropTable('brandbanners');
	},
};
