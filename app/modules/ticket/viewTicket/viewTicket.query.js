const { Ticket } = require('../../../../models');

const viewTicketQuery = async() => {
  return Ticket.findAll({
    where: {
      isDeleted: false,
    },
  });
};

module.exports = { viewTicketQuery };
