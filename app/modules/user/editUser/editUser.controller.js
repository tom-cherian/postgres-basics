const { validationResult } = require('express-validator');

const editUser = async (req, res) => {
  const validation = await validationResult(req);
  if (!validation.isEmpty()) return res.send(validation);

  
};

module.exports = editUser;
