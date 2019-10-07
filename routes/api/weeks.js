var express = require('express');
var router = express.Router();
var weeksCtrl = require('../../controllers/weeks');

router.post('/', weeksCtrl.create);
module.exports = router;