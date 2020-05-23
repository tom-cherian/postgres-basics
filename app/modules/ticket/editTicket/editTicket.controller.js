const { validationResult } = require('express-validator');
const { checkTicketQuery, editTicketQuery } = require('./editTicket.query');
const moment = require('moment');

const editTicket = async (req, res) => {
  let { year, month, date, hour, minute } = req.body;
  let showTime = moment.utc({
    years: year,
    months: month,
    date: date,
    hours: hour,
    minutes: minute,
  });
  try {
    const validation = await validationResult(req);
    if (!validation.isEmpty()) {
      return res.status(400).send(validation);
    }

    const checkTicketExists = await checkTicketQuery(req.params.id);
    if (!checkTicketExists) {
      return res.status(404).send('Ticket not found');
    }

    await editTicketQuery(req.body, showTime, req.params.id);
    return res.status(200).send('updated Ticket!!!');
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

module.exports = { editTicket };
