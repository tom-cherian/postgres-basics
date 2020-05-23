const { validationResult } = require('express-validator');
const { addTicketQuery, checkMovieQuery } = require('./addTicket.query');
const moment = require('moment');

const addTicket = async (req, res) => {
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

    const checkMovieExists = await checkMovieQuery(req.body.movieName);
    if (checkMovieExists) {
      return res.status(409).send('Movie already exists!!!');
    }

    const newTicket = await addTicketQuery(req.body, showTime);
    return res.status(200).send(newTicket);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

module.exports = { addTicket };
