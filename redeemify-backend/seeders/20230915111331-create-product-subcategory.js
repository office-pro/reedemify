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

    await queryInterface.bulkInsert('productSubCategory', [

    {
        "productCategoryId": 1,
        "productSubCategoryName": "mobile",
        "productSubCategoryDesc": "one shop stop for mobiles"
    },
    {
        "productCategoryId": 1,
        "productSubCategoryName": "camera",
        "productSubCategoryDesc": "one shop stop for cameras"
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

    await queryInterface.bulkDelete('productSubCategory', null, {});
  }
};
