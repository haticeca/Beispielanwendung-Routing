const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String
});

module.exports = mongoose.model('Member', schema);
