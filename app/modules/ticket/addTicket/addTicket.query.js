const { Ticket } = require('../../../../models');

const addTicketQuery = async (body,showTime) => {
    return Ticket.create({
        movieName: body.movieName,
        showTime: showTime,
        availableTickets: body.availableTickets,
        isDeleted: body.isDeleted? body.isDeleted : false
    });
};

module.exports = { addTicketQuery };