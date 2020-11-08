const express = require('express');
const { route } = require('.');
const router = express.Router({mergeParams: true});
const Article = require('../controllers/article')

router.get('/', Article.articleList);
router.post('/', Article.articleCreate);
router.get('/:articleId', Article.articleDetail);
router.put('/:articleId', Article.articleUpdate);
router.delete('/:articleId', Article.articleDelete);

module.exports = router;