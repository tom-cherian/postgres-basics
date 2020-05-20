const { param } = require('express-validator');

const deleteUserValidator = [
    param('id').isInt().withMessage('Enter an integer!!!')
];

module.exports = {deleteUserValidator};