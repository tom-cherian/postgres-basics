'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    movieName: DataTypes.STRING,
    showTime: DataTypes.BIGINT,
    available_tickets: DataTypes.NUMBER,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Ticket.associate = function(models) {
    this.hasMany(models.Booking, {
      foriegnKey: 'ticketId'
    });
  };
  return Ticket;
};