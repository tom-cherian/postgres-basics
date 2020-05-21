const { body } = require('express-validator');

const addTicketValidator = [
    body('movieName').trim().isLength({min: 1, max:50}).withMessage('Length not satisfied!!!'),
    body('availableTickets').isInt(),
    body('year').isInt(),
    body('month').isInt(),
    body('date').isInt(),
    body('hour').isInt(),
    body('minute').isInt()
];

module.exports = { addTicketValidator };