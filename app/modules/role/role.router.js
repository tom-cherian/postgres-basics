const router = require('express').Router();
const { addRole } = require('./addRole/addRole.controller');
const { addRoleValidator } = require('./addRole/addRole.validator');
const { viewRoles } = require('./viewRole/viewRole.controller');
const { deleteRole } = require('./deleteRole/deleteRole.controller');
const { deleteRoleValidator } = require('./deleteRole/deleteRole.validator');
const { editRole } = require('./editRole/editRole.controller');
const { editRoleValidator } = require('./editRole/editRole.validator');

module.exports = () =>{
    router.route('/api/roles')
        .post(addRoleValidator,addRole)
        .get(viewRoles);
    router.route('/api/roles/:id')
        .delete(deleteRoleValidator,deleteRole)
        .put(editRoleValidator,editRole);
    return router;
};