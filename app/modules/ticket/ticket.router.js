const router = require('express').Router();
const { addTicket } = require('./addTicket/addTicket.controller');
const { addTicketValidator } = require('./addTicket/addTicket.validator');

module.exports = () => {
    router.route('/api/tickets')
        .post(addTicketValidator,addTicket);
    return router;
};