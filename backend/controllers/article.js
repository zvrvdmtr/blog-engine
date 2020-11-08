const async = require('async')
const Article = require('../models/article')
const User = require('../models/user')

exports.articleList = function(req, res) {
    Article.find({}).exec(function(err, results) {
        if(err) {
            return next(err);
        }
        else {
            res.json(results);
        }
    })
  };

exports.articleDetail = function(req, res, next) {

    Article.findById(req.params.articleId)
        .populate('author')
        .populate('tagList')
        .populate('comments')
        .exec(function(err, results) {
        if (err) {
            return next(err);
        }
        else {
            if (!results) {
                res.status(404)
            }
            res.json(results)
        }
    })
}

exports.articleCreate = function(req, res) {
    var article = new Article({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
    });

    article.save(function(err, results) {
        if (err) {
            return next(err);
        }
        else {
            res.json(results);
        }
    })
}

exports.articleUpdate = function(req, res) {
    Article.findByIdAndUpdate({_id: req.params.articleId}, {title: req.body.title, body: req.body.body}, {new: true},
        function(err, results) {
            if (err) {
                return next(err);
            }
            else {
                res.json(results)
            }
        })
    }


exports.articleDelete = function(req, res) {
    Article.findByIdAndDelete({_id: req.params.articleId}, function(err, results) {
        if (err) {
            return next(err);
        }
        else {
            res.send(results);
        }
    })
}