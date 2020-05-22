const { param } = require('express-validator');

const deleteTicketValidator = [
    param('id').isInt().withMessage('Invalid id format!!!')
];

module.exports = { deleteTicketValidator };