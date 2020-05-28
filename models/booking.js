'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    quatity: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Booking.associate = function(models) {
    this.belongsTo(models.User,{
      foriegnKey: 'userId'
    });
    this.belongsTo(models.Ticket,{
      foriegnKey: 'ticketId'
    });
  };
  return Booking;
};