const User = require('../models/user');
const Week = require('../models/user')

module.exports = {
    createWeek,
    index,
    deleteWeek,
    addMeal
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
        console.log(req.body)
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
  

async function addMeal(req, res) {
  var userId = req.params.id
  var weekId = req.params.id2
  const mealAdd = await User.findOneAndUpdate({_id:userId, 'weeks._id':weekId}, {$push :
    {'meals' : req.body}
  }, {upsert: true}, function(err, docs){
    res.json(docs);
    console.log(docs);
  })
}
