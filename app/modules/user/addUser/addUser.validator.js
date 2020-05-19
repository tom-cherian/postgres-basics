const { body } = require('express-validator');

const addUserValidator = [
    body('firstName').trim().isLength({ min: 3, max: 30}).withMessage('Length not satisfied!!!'),
    body('lastName').trim().isLength({ min: 3, max: 30}).withMessage('Length not satisfied!!!'),
    body('email').trim().isEmail().withMessage('Invalid Email!!!'),
];

module.exports = addUserValidator;