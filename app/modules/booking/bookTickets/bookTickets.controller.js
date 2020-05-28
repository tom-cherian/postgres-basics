const { validationResult } = require('express-validator');
const { bookTicketQuery, changeTicketCountQuery} = require('./bookTickets.query');
const { sequelize } = require('../../../../models');

const bookTickets = async (req, res) => {

  const transaction = await sequelize.transaction();

  try {
    const validation = await validationResult(req);
    if (!validation.isEmpty()) {
      return res.send(validation);
    }

    await Promise.all([
      bookTicketQuery(req,transaction),
      changeTicketCountQuery(req.body,transaction),
    ]);
    await transaction.commit();
    return res.send('Successfully added ticket');
  } catch (e) {
    await transaction.rollback();
    return res.status(500).send({ message: e.message });
  }
};

module.exports = { bookTickets };
