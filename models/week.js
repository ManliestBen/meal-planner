const mongoose = require ('mongoose');



const mealSchema = new mongoose.Schema({
    mealName: String,
    recipeUri: String,
    recipeImage: String,
    recipeUrl: String,
    recipeYield: String,
    recipeIngredients: [String],
    recipeCalories: Number    
})
const weekSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  startDate: Date,
  dayOfWeek: {type: String, enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']},
  mealType: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']},
  meals: [mealSchema]

});


module.exports = mongoose.model('Week', weekSchema);