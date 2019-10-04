const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const mealSchema = new mongoose.Schema({
    mealName: String,
    recipeUri: String,
    recipeImage: String,
    recipeUrl: String,
    recipeYield: Number,
    recipeIngredients: [String],
    recipeCalories: Number    
})


const weekSchema = new mongoose.Schema({
    startDate: Date,
    dayOfWeek: {type: String, enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']},
    mealType: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']},
    meals: [mealSchema]

});
const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: String,
    week: [weekSchema]
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

userSchema.methods.comparePassword = function(tryPassword, cb) {
  // 'this' represents the document that you called comparePassword on
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', userSchema);