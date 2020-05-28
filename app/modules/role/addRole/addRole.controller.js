const { validationResult } = require('express-validator');
const { checkRoleQuery,addRoleQuery } = require('./addRole.query');

const addRole = async(req,res) => {
    try{
        const validation = await validationResult(req);
        if(!validation.isEmpty()) {
            return res.status(400).send(validation);
        }

        const checkRoleExists = await checkRoleQuery(req.body);
        if (checkRoleExists) {
            return res.status(409).send('Role already exists');
        }

        const newRole = await addRoleQuery(req.body);
        return res.status(200).send(newRole);

    }catch (e) {
        return res.status(500).send({ message: e.message});
    }
};

module.exports = { addRole };