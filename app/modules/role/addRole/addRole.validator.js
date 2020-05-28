const { body } = require('express-validator');

const addRoleValidator = [
    body('roleName').trim().isLength({ min: 3, max: 50 }).withMessage('Role Name length is not satisfied!!!'),
    body('roleId').isInt().withMessage('Role id is not valid!!!')
  ];
  
  module.exports = { addRoleValidator };