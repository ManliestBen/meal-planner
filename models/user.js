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

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });



module.exports = mongoose.model('User', userSchema);