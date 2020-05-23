const { Ticket } = require('../../.../../../../models');
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

const editTicketQuery = (body, showTime, ticketId) => {
  return Ticket.update(
    {
      movieName: body.movieName,
      showTime: showTime,
      availableTickets: body.availableTickets,
    },
    {
      where: {
        id: {
          [Op.eq]: ticketId,
        },
      },
    }
  );
};

module.exports = { checkTicketQuery, editTicketQuery };
