const { param } = require('express-validator');

const deleteRoleValidator = [
    param('id').isInt().withMessage('Id is invalid')
];

module.exports = { deleteRoleValidator };