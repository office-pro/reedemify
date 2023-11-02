'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('productCategory', [
      {
          "productCategoryName": "Fashion",
          "productCategoryDesc": "Fashion wears by all brands"
      },
      {
          "productCategoryName": "Electronics",
          "productCategoryDesc": "Electronics items for all brands"
      },
      {
          "productCategoryName": "HealthCare",
          "productCategoryDesc": "Health care products"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('productCategory', null, {});

  }
};
