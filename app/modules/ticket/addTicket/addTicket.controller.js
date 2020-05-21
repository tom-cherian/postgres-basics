const { validationResult } = require('express-validator');
const { addTicketQuery } = require('./addTicket.query');
const moment = require('moment');

const addTicket = async(req,res) => {
    let { year, month, date, hour, minute } = req.body;
    let showTime = moment.utc({years: year, months: month, date: date, hours: hour, minutes: minute});
    console.log(showTime);
    try{
        const validation = await validationResult(req);
        if (!validation.isEmpty()) 
            { return res.send(validation); }
        
        const newTicket = await addTicketQuery(req.body,showTime);
        return res.status(200).send(newTicket);
    }
    catch(e) {
        res.status(500).send({ message: e.message });
    }
};

module.exports = { addTicket };