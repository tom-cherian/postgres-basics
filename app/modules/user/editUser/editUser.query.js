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

const editUserQuery = (req) => {
  return User.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    },
    {
      where: {
        id: {
          [Op.eq]: req.params.id,
        },
      },
    }
  );
};

module.exports = { editUserQuery, checkUserQuery };
