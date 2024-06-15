const userModel = require('../models/userModel.js');


const getUsers = async(req, res) =>{
    try {
        const response = await Users.findAll();

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error});
    }
}

module.exports = {
    getUsers
}
