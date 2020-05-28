const router = require('express').Router();
const { bookTickets } = require('./bookTickets/bookTickets.controller');
const { bookingTicketValidator } = require('./bookTickets/bookTickets.validator');

module.exports = () =>{
    router.route('/api/booking/:id')
        .post(bookingTicketValidator,bookTickets);
    return router;
};