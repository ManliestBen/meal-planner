const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;


const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: String
}, {
    timestamps: true
});





module.exports = mongoose.model('User', userSchema);