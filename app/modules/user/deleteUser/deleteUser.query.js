const { User } = require('../../../../models');
const { Op } = require('sequelize');

const deleteUserQuery = async (userId) => {
    return User.update({ isDeleted: true },{
        where: {
            id: {
                [Op.eq] : userId.id
            }
        }
    });
};

module.exports = { deleteUserQuery };