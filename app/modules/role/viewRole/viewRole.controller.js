const { viewRolesQuery } = require('./viewRole.query');

const viewRoles = async(req,res) => {
    try{
        const viewRoles = await viewRolesQuery();
        return res.status(200).send(viewRoles);
    } catch(e) {
        return res.status(500).send({ message: e.message });
    }
};

module.exports = { viewRoles };