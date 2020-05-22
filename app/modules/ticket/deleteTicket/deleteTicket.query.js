const { Ticket } = require('../../../../models');
const { Op } = require('sequelize');

const deleteTicketQuery = async (ticketId) => {
    return Ticket.update({isDeleted: true},{
        where: {
            id: {
                [Op.eq] : ticketId
            },
            isDeleted : false
        }
    });
};

module.exports = { deleteTicketQuery };
