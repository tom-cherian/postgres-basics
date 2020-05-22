const { validationResult } = require('express-validator');
const { deleteUserQuery } = require('./deleteUser.query');

const deleteUser = async (req, res) => {
  try {
    let validation = validationResult(req);
    if (!validation.isEmpty()) 
      { res.send(validation); }

    const result = await deleteUserQuery(req.params.id);

    if (result[0] !=0 ) 
      { res.send('Deleted a user'); }
      
     res.send('User not found');
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {deleteUser};
