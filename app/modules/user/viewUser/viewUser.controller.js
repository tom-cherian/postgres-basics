const { validationResult } = require('express-validator');
const {viewUserQuery}  = require('./viewUser.query');

const viewUser = async (req, res) => {
  try {
    const validation = validationResult(req);
    if (!validation.isEmpty())
      { return res.send(validation); }

    const viewUser = await viewUserQuery();

    if (!viewUser)
      { return res.send('No such user found'); }

    return res.send(viewUser);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {viewUser};
