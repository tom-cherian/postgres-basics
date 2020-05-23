const { validationResult } = require('express-validator');
const { deleteTicketQuery,checkTicketQuery } = require('./deleteTicket.query');

const deleteTicket = async (req, res) => {
  try {
    const validation = await validationResult(req);
    if (!validation.isEmpty()) {
      return res.status(400).send(validation);
    }

    const checkTicketExists = await checkTicketQuery(req.params.id);
    if (!checkTicketExists) {
      return res.status(404).send('Ticket not found');
    }

    await deleteTicketQuery(req.params.id);
    return res.status(200).send('Deleted a ticket');

  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

module.exports = { deleteTicket };
