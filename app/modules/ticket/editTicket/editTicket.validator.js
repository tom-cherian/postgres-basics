const { param, body } = require('express-validator');

const editTicketValidator = [
  param('id').isInt().withMessage('Invalid id'),
  body('movieName').trim().isLength({ min: 1, max: 50 }).withMessage('Lenght is not satisfied!!!'),
  body('availableTickets').isInt(),
  body('year').isInt(),
  body('month').isInt(),
  body('date').isInt(),
  body('hour').isInt(),
  body('minute').isInt(),
];

module.exports = { editTicketValidator };
