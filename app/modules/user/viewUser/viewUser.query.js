const {  User } = require('../../../../models');

const viewUserQuery = async( ) => {
    return User.findAll();
};

module.exports = {viewUserQuery};