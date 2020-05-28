const { body } = require('express-validator');
const { Ticket } = require('../../../../models');

const bookingTicketValidator = [
    body('quatity').isInt().withMessage('Invalid quantity!!!'),
    body('ticketId').isInt().custom(( ticketId, {req} ) => {
        return findAvailability(ticketId).then( ticket => {
            if(!ticket) throw new Error ('Sorry not Available');
            if(checkAvailability(req.body.quantity,ticket.available_tickets)) throw new Error('Insufficient tickets!!!');
            return true;
        });
    })
];

const findAvailability = async (ticketId) => {
    return Ticket.findOne({
        attributes: ['available_tickets'],
        where: {
            id: ticketId
        }
    });
};

const checkAvailability = async(checkQuantity, available_tickets) => {
    if(checkQuantity > available_tickets) 
        return true;
    else return false;
};

module.exports = { bookingTicketValidator };