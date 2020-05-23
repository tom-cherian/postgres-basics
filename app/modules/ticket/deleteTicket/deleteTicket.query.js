const { Ticket } = require('../../../../models');
const { Op } = require('sequelize');

const checkTicketQuery = (ticketId) => {
  return Ticket.count({
    where: {
      id: {
        [Op.eq]: ticketId,
      },
      isDeleted: false,
    },
  });
};

const deleteTicketQuery = async (ticketId) => {
  return Ticket.update(
    { isDeleted: true },
    {
      where: {
        id: {
          [Op.eq]: ticketId,
        }
      },
    }
  );
};

module.exports = { deleteTicketQuery, checkTicketQuery };
