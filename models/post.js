const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

// A post has many likes, a like belongs to a POST
const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    location: String,
    detail: String,
    likes: [likesSchema] // embedded schema
  })
 

module.exports = mongoose.model('Post', postSchema);