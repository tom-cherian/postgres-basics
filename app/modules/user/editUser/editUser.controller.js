const { validationResult } = require('express-validator');
const { editUserQuery, checkUserQuery } = require('./editUser.query');

const editUser = async (req, res) => {
  try {
    const validation = await validationResult(req);
    if (!validation.isEmpty()) {
      return res.status(400).send(validation);
    }

    const checkUserExists = await checkUserQuery(req.params.id);
    if (!checkUserExists) {
      return res.status(404).send('User not found');
    }

    await editUserQuery(req);
    return res.send('Updated');
  } catch (e) {
    return res.status(200).send({ message: e.message });
  }
};

module.exports = { editUser };
