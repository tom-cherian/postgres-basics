const { validationResult } = require('express-validator');
const { checkExistingEmails, addUserInDatabase } = require('./addUser.query');

const addUser = async (req, res) => {
  try {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      return res.status(400).send(validation);
    }

    const isExistingEmail = await checkExistingEmails(req.body.email);
    if (isExistingEmail) {
      return res.status(409).send('User Already Exists!!!');
    }

    const addedUser = await addUserInDatabase(req.body);
    return res.status(200).send(addedUser);
  } catch (e) {
    return res.status(500).send({ status: 500, error: e.message });
  }
};

module.exports = { addUser };
