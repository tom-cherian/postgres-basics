'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleId: DataTypes.NUMBER,
    roleName: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};