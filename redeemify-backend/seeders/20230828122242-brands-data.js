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
        brandName: 'Redeemify',
        balance: 0,
        limit: 2500000,
        isActive: true,
        showPoweredByText: false,
        brandCss: {
          primaryColor: '#ffffff',
          secondaryColor: '#446879',
          isDarkMode: 'false',
          logo: 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/redeemify/Redeemify+LOGO+FINAL_page-0001.jpg',
          headerColor: '#312f92',
          textColor: '#292828'
        }
      },
      {
        brandName: 'Test1',
        balance: 0,
        limit: 2500000,
        isActive: true,
        showPoweredByText: true,
        brandCss: {
          primaryColor: "#3880ff",
          secondaryColor: "#3dc2ff",
          logo: 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/demo-logo/logo.png',
          headerColor: "#ffffff",
          textColor: "#0b171b",
          isDarkMode: false
        }
      },
      {
        brandName: 'Test2',
        balance: 0,
        limit: 1500000,
        isActive: true,
        showPoweredByText: true,
        brandCss:  {
          primaryColor: "#3880ff",
          secondaryColor: "#3dc2ff",
          logo: 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/demo-logo/logo.png',
          headerColor: "#ffffff",
          textColor: "#0b171b",
          isDarkMode: false
        }
      },
      {
        brandName: 'Test3',
        balance: 0,
        limit: 1000000,
        isActive: true,
        showPoweredByText: true,
        brandCss: {
          primaryColor: "#3880ff",
          secondaryColor: "#3dc2ff",
          logo: 'https://test-shashi-bucket.s3.ap-south-1.amazonaws.com/demo-logo/logo.png',
          headerColor: "#ffffff",
          textColor: "#0b171b",
          isDarkMode: false
        }
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
