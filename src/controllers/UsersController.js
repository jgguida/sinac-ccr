const mongoose = require('mongoose');

const Users = mongoose.model('Users');

module.exports = {
    async index(req, res) {
        const users = await Users.find();
        return res.json(users);
    },
};