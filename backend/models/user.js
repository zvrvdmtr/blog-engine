const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {type: String, required: true, maxlength: 100},
    lastName: {type: String, required: true, maxlength: 100},
    hash: {type: String, required: true, maxlength: 100},
    email: {type: String, required: true, unique: true},
    image: String,
    favorites: [{type: Schema.Types.ObjectId, ref: 'Article'}],
    dateOfBirth: {type: Date},
    jwt: {type: String}
});

module.exports = mongoose.model('User', UserSchema);