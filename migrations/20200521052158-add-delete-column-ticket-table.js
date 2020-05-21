'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tickets','isDeleted',Sequelize.BOOLEAN);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tickets','isDeleted'); 
  }
};
