'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    movieName: DataTypes.STRING,
    showTime: DataTypes.BIGINT,
    availableTickets: DataTypes.NUMBER,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};