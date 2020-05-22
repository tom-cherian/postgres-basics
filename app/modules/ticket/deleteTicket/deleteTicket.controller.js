const { validationResult } = require('express-validator');
const { deleteTicketQuery } = require('./deleteTicket.query');

const deleteTicket = async (req, res) => {
  try {
    const validation = await validationResult(req);
    if (!validation.isEmpty()) {
      return res.send(validation);
    }

    const result = await deleteTicketQuery(req.params.id);
    console.log(result);
    if (result[0] !=0 ) {
      return res.send('Deleted a ticket');
    }
    res.send('Ticket not found');
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = { deleteTicket };
