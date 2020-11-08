const User = require('../models/user')
const crypto = require('crypto')


function getHashedPassword(passowrd) {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(passowrd).digest('base64');
    return hash;
};


exports.signup = function(req, res, next) {
    const {firstName, lastName, password, email} = req.body;

    User.findOne({'email': email}).exec(function(err, user) {
        if (err) {
            return next(err);
        }
        else {
            if (user) {
                res.send(`User with email ${email} already exist`);
            }
            else {
                const user = new User({
                    firstName: firstName,
                    lastName: lastName,
                    hash: getHashedPassword(password),
                    email: email
                })
                user.save(function (err) {
                    if (err) {
                        return next(err)
                    }
                    else {
                        res.send('Registration completed.')
                    }
                })
            }
        }
    })
}

exports.signin = function(req, res, next) {
    User.findOne({'email': req.body.email, 'hash': getHashedPassword(req.body.password)}).exec(function(err, user) {
        if (err) {
            return next(err)
        }
        else {
            if (!user) {
                res.send('Wrong credentials')
            }
            else {
                res.json({'jwt': user._id});
            }
        }
    })
}


exports.logout = function(req, res) {
    res.clearCookie('jwt')
    res.send('Good bye');
}