const { validationResult } = require('express-validator');
const { checkRoleQuery, deleteRoleQuery } = require('./deleteRole.query');

const deleteRole = async (req,res) => {
    try{
        const validation = await validationResult(req);
        if(!validation.isEmpty()) {
            return res.status(400).send(validation);
        }
        const checkRoleExist = await checkRoleQuery(req.params.id);
        if(!checkRoleExist) {
            return res.status(404).send('Role not found');
        }
        
        await deleteRoleQuery(req.params.id);
        return res.status(200).send('Deleted a Role');

    } catch(e) {
        return res.status(500).send({ message: e.message });
    }
};

module.exports = { deleteRole };