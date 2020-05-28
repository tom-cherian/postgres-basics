const { validationResult } = require('express-validator');
const { checkRoleQuery, editRoleQuery } = require('./editRole.query');

const editRole = async(req,res) => {
    try{
        const validation = await validationResult(req);
        if(!validation.isEmpty()) {
            return res.status(400).send(validation);
        }

        const checkRoleExist = await checkRoleQuery(req.params.id);
        if(!checkRoleExist) {
            return res.status(404).send('Role not found');
        }
        
        await editRoleQuery(req.body,req.params.id);
        return res.status(200).send('Updated Role');
    } catch(e) {
        return res.status(500).send({ message: e.message });
    }
};

module.exports = { editRole };