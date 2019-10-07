const User = require('../models/user');

module.exports = {
    createWeek,
    index
};


async function createWeek(req, res) {
    console.log(req.body)
    // User.findOne({email: req.body.email})
    User.findById(req.body.user._id, function(err, user) {
        console.log(req.body);
        user.weeks.push(req.body);
        user.save(function(err) {
            res.status(201);
        });
    });
}

async function index(req, res) {
    console.log(req.body.user)
    
    const user = await User.findById(req.body.user);
    
    res.status(200).json(user);
  }
  


// async function createWeek(req, res) {
//     const week = await Week.create(req.body);
//     res.status(201).json(week);
// }