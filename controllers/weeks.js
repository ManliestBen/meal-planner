const User = require('../models/user');
const Week = require('../models/user')

module.exports = {
    createWeek,
    index,
    deleteWeek
};

async function deleteWeek(req, res) {
    const remove = await User.findOneAndUpdate( {'weeks._id' : `${req.params.id}`} ,
  {
    $pull: { weeks: { _id: `${req.params.id}` }}
  },
  {new: true},
  function(err, doc){
     console.log(err,doc)
  })
  res.status(200).json(remove);
}


async function createWeek(req, res) {
    const create = await User.findById(req.body.user._id, function(err, user) {
        user.weeks.push(req.body);
        user.save(function(err) {
        res.status(201).json(create);
        });
    });
}

async function index(req, res) {
    const user = await User.findById(req.body.user);
    res.status(200).json(user);
  }
  


