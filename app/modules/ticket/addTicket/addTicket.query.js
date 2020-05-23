const { Ticket } = require('../../../../models');

const checkMovieQuery = (movieName) => {
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
        availableTickets: body.availableTickets,
        isDeleted: body.isDeleted? body.isDeleted : false
    });
};

module.exports = { addTicketQuery, checkMovieQuery };