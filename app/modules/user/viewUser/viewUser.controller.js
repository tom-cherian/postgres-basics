const { validationResult } = require('express-validator');
const { viewUserQuery } = require('./viewUser.query');

const viewUser = async (req, res) => {
  try {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      return res.send(validation);
    }

    const viewUser = await viewUserQuery();

    if (!viewUser) {
      return res.status(404).send('No users found');
    }

    return res.status(200).send(viewUser);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

module.exports = { viewUser };
