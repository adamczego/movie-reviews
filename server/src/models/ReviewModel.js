const mongoose = require('mongoose')



const ReviewSchema = new mongoose.Schema({
  body: {
    type: String,
    required: 'no_review_body',
  },
  author: {
    type: Number,
    required: 'no_author',
    ref: 'User',
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: 'no_created_at',
  },
  movie_id: {
    type: Number,
    required: 'no_movie_id',
  },
  movie_title: {
    type: String,
    required: 'no_movie_title',
  },
})



module.exports = mongoose.model( 'Review', ReviewSchema )
