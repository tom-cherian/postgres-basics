'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    quatity: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};