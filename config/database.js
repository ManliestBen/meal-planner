var mongoose = require('mongoose');



mongoose.connect(`mongodb+srv://sei:${process.env.DATABASE_PW}@sei-1hogc.gcp.mongodb.net/meal-planner?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
// database connection:
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to database online`);
});

module.exports = mongoose;