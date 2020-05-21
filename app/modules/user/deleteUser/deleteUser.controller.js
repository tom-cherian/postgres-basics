const { validationResult } = require('express-validator');
const { deleteUserQuery } = require('./deleteUser.query');

const deleteUser = async (req, res) => {
  try {
    let validation = validationResult(req);
    if (!validation.isEmpty()) 
      { return res.send(validation); }

    const result = await deleteUserQuery(req.params.id);

    if (result) 
      { return res.send('Deleted a booking'); }
      
    return res.send('Booking not found');
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {deleteUser};
