const router = require('express').Router();
const addUser =  require('./addUser/addUser.controller');
const addUserValidate = require('./addUser/addUser.validator');
const viewUser = require('./viewUser/viewUser.controller');
const deleteUserValidator = require('./deleteUser/deleteUser.validator');
const deleteUser = require('./deleteUser/deleteUser.controller');
const editUserValidator = require('./editUser/editUser.validator');
const editUser = require('./editUser/editUser.controller');

module.exports = () => {
    router.route('/api/users')
        .post(addUserValidate,addUser)
        .get(viewUser);
    router.route('/api/users/:id')
        .delete(deleteUserValidator,deleteUser)
        .put(editUserValidator,editUser);
    return router;
    
};