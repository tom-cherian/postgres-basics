const {  User } = require('../../../../models');

const viewUserQuery = async( ) => {
    return User.findAll({
        where: {
            isDeleted: false
        }
    });
};

module.exports = {viewUserQuery};