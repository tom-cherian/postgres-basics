const { param } = require('express-validator');

const deleteUserValidator = [
    param('id').isInt()
];

module.exports = deleteUserValidator;