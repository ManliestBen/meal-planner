const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();
require('dotenv').config()

require('./config/database');

var weeksRouter = require('./routes/api/weeks');


app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



app.use('/api/weeks', weeksRouter);
app.use('/api/users', require('./routes/api/users'));

// PROTECTED ROUTES GO BENEATH 
//(as well as putting them in routes/api/XXXX.js)
// in the format router.use(require(../../config/auth'))
app.use(require('./config/auth'));


// Catch all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});