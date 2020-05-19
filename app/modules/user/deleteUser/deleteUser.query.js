const { User } = require('../../../../models');

const deleteUserQuery = async (userId) => {
    return User.destroy({
        where: {
            id: userId.id
        }
    });
};

module.exports = deleteUserQuery;