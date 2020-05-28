'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    this.hasMany(models.Booking, {
      foriegnKey: 'userId'
    });
  };
  return User;
};