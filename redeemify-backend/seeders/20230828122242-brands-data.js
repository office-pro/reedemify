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

    await queryInterface.bulkInsert('brands', [
      {
        brandName: 'Apple',
        balance: 0,
        limit: 2500000,
        brandCss: '{}'
      },
      {
        brandName: 'Dell',
        balance: 0,
        limit: 1500000,
        brandCss: '{}'
      },
      {
        brandName: 'Samsung',
        balance: 0,
        limit: 1000000,
        brandCss: '{}'
      }
      ], {
        css: null
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('brands', null, {});

    
  }
};
