'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    movieName: DataTypes.STRING,
    showTime: DataTypes.STRING,
    availableTickets: DataTypes.NUMBER
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};