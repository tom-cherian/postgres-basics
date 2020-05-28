const { Role } = require('../../../../models');

const viewRolesQuery = async () => {
    return Role.findAll({
        where: {
            isDeleted: false
        }
    });
};

module.exports = { viewRolesQuery };