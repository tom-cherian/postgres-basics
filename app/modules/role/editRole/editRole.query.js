const { Role } = require('../../../../models');
const { Op } = require('sequelize');

const checkRoleQuery = async (id) => {
  return Role.count({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
};

const editRoleQuery = async (body, id) => {
    return Role.update({
        roleId: body.roleId,
        roleName: body.roleName
    },{
        where: {
            id:{
                [Op.eq] : id
            }
        }
    });
};

module.exports = { checkRoleQuery, editRoleQuery };
