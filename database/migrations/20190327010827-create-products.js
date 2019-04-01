'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', { 
      id: Sequelize.INTEGER,  
      title: String,
      description: String
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product');
  }
};
