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

       await queryInterface.bulkInsert('product', 
        [
    
    {
         "productCategoryId":1,
         "productSubCategoryId":1,
         "productName":"Samsung note 5 flip phone",
         "productPrice": 150000,
         "productImage": ["https://cdn.vox-cdn.com/thumbor/Bh1I0UGHo-CSCMSHxOwtw1uGgm0=/0x0:5760x3840/1400x1400/filters:focal(2080x1667:2081x1668)/cdn.vox-cdn.com/uploads/chorus_asset/file/19713354/9U3A0464.jpg","https://i.guim.co.uk/img/media/a792ddaabbd3aa6574dbf4a1751d06fb91cf421d/0_415_4000_2400/master/4000.jpg?width=445&dpr=1&s=none"], 
         "productDesc": "good camera"
    },

    {
         "productCategoryId":1,
         "productSubCategoryId":1,
         "productName":"Samsung galaxy note 5 foldable phone",
         "productPrice": 150000,
         "productImage": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsMd7WJPyXNIHO6oyJR3MA2zmLv_MmSzFTg&usqp=CAU"], 
         "productDesc": "good camera"
    }
      
]
    
    
      

      
    , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('product', null, {});
  }
};
