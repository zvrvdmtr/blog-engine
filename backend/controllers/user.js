const User = require('../models/user');
const async = require('async')

exports.userDetail = function(req, res, next) {
    User.findOne({'_id': req.params.userId}).exec(function (err, user) {
        if (err) {
            return next(err)
        }
        else {
            if (!user) {
                res.status(404);
            }
            res.json(user);
        }
    })
}
