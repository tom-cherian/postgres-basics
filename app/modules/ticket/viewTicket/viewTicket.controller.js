const { viewTicketQuery } = require('./viewTicket.query');

const viewTickets = async (req, res) => {
  try {
    const viewTickets = await viewTicketQuery();
    return res.send(viewTickets);
  }
  catch(e){
      res.status(500).send({ message: e.message});
  }
};

module.exports = { viewTickets };
