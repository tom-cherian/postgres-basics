const { Ticket } = require('../../../../models');

const checkMovieQuery = async (movieName) => {
    return Ticket.count({
        where: {
            movieName: movieName,
            isDeleted: false
        }
    });
};

const addTicketQuery = async (body,showTime) => {
    return Ticket.create({
        movieName: body.movieName,
        showTime: showTime,
        available_tickets: body.availableTickets,
        isDeleted: body.isDeleted? body.isDeleted : false
    });
};

module.exports = { addTicketQuery, checkMovieQuery };