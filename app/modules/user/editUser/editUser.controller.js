const { validationResult } = require('express-validator');
const editUserQuery  = require('./editUser.query');

const editUser = async (req, res) => {
  try {
    const validation = await validationResult(req);
    if (!validation.isEmpty()) return res.send(validation);

    await editUserQuery(req);
    return res.send('Updated');
  } catch (e) {
    return res.send({ message: e.message });
  }
};

module.exports = editUser;
