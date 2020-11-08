const mongoose = require('mongoose')
const User = require('./user')
const Article = require('./article')
const async = require('async')

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true})

let authors = []

function createUser(firstName, lastName, hash, email, image, favorites, dateOfBirth, cb) {
    const userData = {
        firstName: firstName,
        lastName: lastName,
        hash: hash,
        email: email,
        dateOfBirth: dateOfBirth,
    }
    if (image) {
        userData.image = image;
    }
    if (favorites) {
        userData.favorites = favorites;
    }
    const userInstance = new User(userData)
    userInstance.save(function(err) {
        if (err) {
            cb(err, null);
            return;
        }
        authors.push(userInstance);
        console.log('CREATED USER ' + userInstance);
        cb(null, userInstance);
    });
}

function createArticle(title, body, author, cb) {
    const articleData = {
        title: title,
        body: body,
        author: author,
    }
    const articleInsance = new Article(articleData)
    articleInsance.save(function(err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('CREATED ARTICLE: ' + articleInsance);
        cb(null, articleInsance);
    })
}

function createAuthors(cb) {
    async.parallel([
        function(callback) {
            createUser('Ivan', 'Ivanov', 'Qwerty_22', 'ian@mail.ru', '', [], '1990-01-01', callback);
        },
        function(callback) {
            createUser('Petr', 'Petrov', 'Qwerty_22', 'petr@mail.ru', '', [], '1980-01-01', callback);
        }
    ],
    cb);
}

function createArticles(cb) {
    async.parallel([
        function(callback) {
            createArticle('First article', 'First article body', authors[0], callback)
        },
        function(callback) {
            createArticle('Second article', 'Second article body', authors[0], callback)
        },
        function(callback) {
            createArticle('Third article', 'Second article body', authors[1], callback)
        },
        function(callback) {
            createArticle('Fourth article', 'Second article body', authors[1], callback)
        }
    ],
    cb);
}

async.series([
    createAuthors,
    createArticles
], function(err, results) {
    if (err) {
        console.log('FINAL ERR: ' + err);
    }
    else {
        console.log(results)
    }
    mongoose.connection.close();
})