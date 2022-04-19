const mongoose = require('mongoose');

// users Schema
const usersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: String
});

// Exporting our model objects
module.exports = mongoose.model('User', usersSchema);

