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

    await queryInterface.bulkInsert('users', [
      {
        brandId: 1,
        roleId: 4,
        firstName: "NItin",
        lastName: "Tillu",
        mobileNo: 9967901834,
        email: "tillu123#redeemify.com",
        password: "tillu@123",
      },
      {
        brandId: 2,
        roleId: 3,
        firstName: "benny",
        lastName: "shane",
        mobileNo: 9900887766,
        email: "benny@redeemify.com",
        password: "benny@123",
      },
      {
        brandId: 3,
        roleId: 3,
        firstName: "angur",
        lastName: "tanmay",
        mobileNo: 9900777660,
        email: "angurtanmay@redeemify.com",
        password: "benny@123",
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

    await queryInterface.bulkDelete('users', null, {});
  }
};
