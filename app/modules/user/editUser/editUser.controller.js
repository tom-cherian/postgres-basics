const { validationResult } = require('express-validator');

const editUser = async (req, res) => {
  const validation = await validationResult(req);
  if (!validation.isEmpty()) return res.send(validation);

  const isUserExist = await checkUserQuery(req.params.id);
    if(!isUserExist) return res.send(`User with id: ${req.id} doesnot exists`);
    
  return 
};

module.exports = editUser;
