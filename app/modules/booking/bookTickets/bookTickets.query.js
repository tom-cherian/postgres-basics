const { Ticket, Booking, Sequelize } = require('../../../../models');
const { Op } = require('sequelize');

const changeTicketCountQuery = async(body,transaction) => {
    const { ticketId } = body;
    return Ticket.update({
        available_tickets: Sequelize.literal(`available_tickets-${body.quatity}`),
    },{
        where: {
            id: {
                [Op.eq] : ticketId,
            }
        }, transaction
    });
};

const bookTicketQuery = async (req, transaction) => { 
    const { quatity, ticketId } = req.body;
    return Booking.create({
        userId: req.params.id,
        ticketId: ticketId,
        quatity: quatity,
        isDeleted: req.body.isDeleted? req.body.isDeleted : false
    }, {
        transaction
    });
};

module.exports = { changeTicketCountQuery, bookTicketQuery };