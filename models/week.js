const mongoose = require ('mongoose');



const mealSchema = new mongoose.Schema({
    dayOfWeek: {type: String, enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']},
    mealType: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']},
    mealName: String,
    recipeUri: String,
    recipeImage: String,
    recipeUrl: String,
    recipeYield: String,
    recipeIngredients: [String],
    recipeCalories: Number    
})
const weekSchema = new mongoose.Schema({
  user: {type: Number, ref: 'User'},
  startDate: Date,
  meals: [mealSchema]
});


module.exports = mongoose.model('Week', weekSchema);