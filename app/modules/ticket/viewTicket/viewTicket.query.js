const { Ticket } = require('../../../../models');

const viewTicketQuery = () => {
    return Ticket.findAll({
        where: {
            isDeleted: false
        }
    });
};

module.exports = { viewTicketQuery };