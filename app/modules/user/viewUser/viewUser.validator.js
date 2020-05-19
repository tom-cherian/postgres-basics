const { param } = require('express-validator');

const viewUserValidator = [
    param('id').isInt()
];

module.exports = viewUserValidator;