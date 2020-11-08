var express = require('express');
var router = express.Router();
const User = require('../controllers/user')

/* GET users listing. */
router.get('/:userId', User.userDetail);

module.exports = router;
