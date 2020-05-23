const { User } = require('../../../../models');
const { Op } = require('sequelize');

const checkUserQuery = (userId) => {
  return User.count({
    where: {
      id: {
        [Op.eq]: userId,
      },
      isDeleted: false,
    },
  });
};

const deleteUserQuery = async (userId) => {
  return User.update(
    { isDeleted: true },
    {
      where: {
        id: {
          [Op.eq]: userId,
        },
      },
    }
  );
};

module.exports = { deleteUserQuery, checkUserQuery };
