const router = require('express').Router();
const {addUser} =  require('./addUser/addUser.controller');
const {addUserValidator} = require('./addUser/addUser.validator');
const {viewUser} = require('./viewUser/viewUser.controller');
const {deleteUser} = require('./deleteUser/deleteUser.controller');
const {deleteUserValidator} = require('./deleteUser/deleteUser.validator');
const {editUser} = require('./editUser/editUser.controller');
const {editUserValidator} = require('./editUser/editUser.validator');

module.exports = () => {
    router.route('/api/users')
        .post(addUserValidator,addUser)
        .get(viewUser);
    router.route('/api/users/:id')
        .delete(deleteUserValidator,deleteUser)
        .put(editUserValidator,editUser);
    return router; 
};