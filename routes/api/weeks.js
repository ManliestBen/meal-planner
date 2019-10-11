var express = require('express');
var router = express.Router();
var weeksCtrl = require('../../controllers/weeks');

router.post('/week', weeksCtrl.index)
router.post('/', weeksCtrl.createWeek);
router.delete('/:id', weeksCtrl.deleteWeek)
router.post('/:id/:id2', weeksCtrl.addMeal)
module.exports = router;