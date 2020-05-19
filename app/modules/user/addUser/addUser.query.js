const { User: User } = require('../../../../models');
const { Op } = require('sequelize');

const checkExistingEmails = async (email) => {
  return User.count({
    where: {
      email: {
        [Op.iLike]: email,
      },
    },
  });
};

const addUserInDatabase = async (body) => {
  return User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    isDeleted: body.isDeleted? body.isDeleted : false,
  });
};

module.exports = {
  checkExistingEmails,
  addUserInDatabase,
};
