var express = require('express');
const auth = require('../controllers/auth');
const handlers = require('./handlers')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', auth.signup);
router.post('/signin', handlers.requireAuth, auth.signin);
router.get('/logout', handlers.requireAuth, auth.logout);

module.exports = router;
