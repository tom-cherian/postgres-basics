const router = require('express').Router();
const { addTicket } = require('./addTicket/addTicket.controller');
const { addTicketValidator } = require('./addTicket/addTicket.validator');
const { viewTickets } = require('./viewTicket/viewTicket.controller');
const { deleteTicket } = require('./deleteTicket/deleteTicket.controller');
const { deleteTicketValidator } = require('./deleteTicket/deleteTicket.validator');

module.exports = () => {
    router.route('/api/tickets')
        .post(addTicketValidator,addTicket)
        .get(viewTickets);
    router.route('/api/tickets/:id')
        .delete(deleteTicketValidator,deleteTicket);
    return router;
};