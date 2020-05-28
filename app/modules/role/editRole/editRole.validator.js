const { param,body } = require('express-validator');

const editRoleValidator = [
    param('id').isInt().withMessage('Invalid id'),
    body('roleId').isInt().withMessage('Role id is not valid!!!'),
    body('roleName').trim().isLength({ min: 3, max: 50 }).withMessage('Role Name length is not satisfied!!!'),
];

module.exports = { editRoleValidator };