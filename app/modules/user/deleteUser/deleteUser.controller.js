const { validationResult } = require('express-validator');
const { deleteUserQuery, checkUserQuery } = require('./deleteUser.query');

const deleteUser = async (req, res) => {
  try {
    let validation = validationResult(req);
    if (!validation.isEmpty()) {
      return res.status(400).send(validation);
    }

    const checkUserExists = await checkUserQuery(req.params.id);
    if (!checkUserExists) {
      return res.status(404).send('User not found');
    }

    await deleteUserQuery(req.params.id);
    return res.status(200).send('Deleted a user');
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

module.exports = { deleteUser };
