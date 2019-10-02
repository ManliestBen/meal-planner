var mongoose = require('mongoose');



mongoose.connect(process.env.REACT_APP_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// database connection:
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to database online`);
});

module.exports = mongoose;