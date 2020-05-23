const router = require('express').Router();
const { addTicket } = require('./addTicket/addTicket.controller');
const { addTicketValidator } = require('./addTicket/addTicket.validator');
const { viewTickets } = require('./viewTicket/viewTicket.controller');
const { deleteTicket } = require('./deleteTicket/deleteTicket.controller');
const { deleteTicketValidator } = require('./deleteTicket/deleteTicket.validator');
const { editTicket } = require('./editTicket/editTicket.controller');
const { editTicketValidator } = require('./editTicket/editTicket.validator');

module.exports = () => {
    router.route('/api/tickets')
        .post(addTicketValidator,addTicket)
        .get(viewTickets);
    router.route('/api/tickets/:id')
        .delete(deleteTicketValidator,deleteTicket)
        .put(editTicketValidator,editTicket);
    return router;
};