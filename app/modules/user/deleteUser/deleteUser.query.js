const { User } = require('../../../../models');
const { Op } = require('sequelize');

const deleteUserQuery = async (userId) => {
    return User.update({ isDeleted: true },{
        where: {
            id: {
                [Op.eq] : userId
            },
            isDeleted: false
        }
    });
};

module.exports = { deleteUserQuery };