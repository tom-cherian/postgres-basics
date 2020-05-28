'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Tickets','availableTickets','available_tickets');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Tickets','available_tickets','availableTickets');
  },
};
