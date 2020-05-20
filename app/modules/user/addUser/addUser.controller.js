const { validationResult } = require('express-validator');
const { checkExistingEmails, addUserInDatabase } = require('./addUser.query');

const addUser = async (req, res) => {
  try {
    const validation = validationResult(req);
    if (!validation.isEmpty()) 
      { return res.send(validation); }

    const isExistingEmail = await checkExistingEmails(req.body.email);
    if (isExistingEmail) 
      { return res.send('User Already Exists!!!'); }

    const addedUser = await addUserInDatabase(req.body);
    return res.send(addedUser);
  } catch (e) {
    console.log(e.message);
    res.send({ status: 500, error: e.message });
  }
};

module.exports = {addUser};
