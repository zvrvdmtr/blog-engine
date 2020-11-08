const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {type: String, required: String, maxlength: 100},
    body: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    totalLikes: {type: Number, default: 0},
    tagList: [{type: String}],
    // comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});


module.exports = mongoose.model('Article', ArticleSchema);