const { param } = require('express-validator');

const viewUserValidator = [
    param('id').isInt().withMessage('Enter an integer!!!')
];

module.exports = viewUserValidator;