'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'isDeleted', {
        type: Sequelize.BOOLEAN
      });
  },
  

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'isDeleted');
  }
};
