const { Role } = require('../../../../models');
const { Op } = require('sequelize');

const checkRoleQuery = async (body) => {
  return Role.count({
    where: {
      roleName: {
        [Op.eq]: body.roleName,
      },
      roleId: {
        [Op.eq]: body.roleId,
      },
      isDeleted: false,
    },
  });
};

const addRoleQuery = async (body) => {
  return Role.create({
    roleId: body.roleId,
    roleName: body.roleName,
    isDeleted: body.isDeleted ? body.isDeleted : false,
  });
};

module.exports = { checkRoleQuery, addRoleQuery };
