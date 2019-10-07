var express = require('express');
var router = express.Router();
var weeksCtrl = require('../../controllers/weeks');

router.post('/week', weeksCtrl.index)
router.post('/', weeksCtrl.createWeek);
module.exports = router;