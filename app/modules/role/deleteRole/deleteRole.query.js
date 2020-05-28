const { Role } = require('../../../../models');
const { Op } = require('sequelize');

const checkRoleQuery = async (id) => {
  return Role.count({
    where: {
      id: {
        [Op.eq]: id,
      },
      isDeleted: false,
    },
  });
};

const deleteRoleQuery = async (id) => {
  return Role.update(
    {
      isDeleted: true,
    },
    {
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    }
  );
};

module.exports = { checkRoleQuery, deleteRoleQuery };
