const mongoose = require('mongoose')



const ReviewSchema = new mongoose.Schema({
  body: {
    type: String,
    // required: 'no_review_body',
  },
  author: {
    type: Number,
    required: 'no_author',
    ref: 'User',
  },
  author_name: {
    type: String,
    required: 'no_author_name',
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
  title: {
    type: String,
    required: 'no_movie_title',
  },
  poster_path: {
    type: String,
    required: 'no_movie_poster_path',
  },
  rate : {
    type: String,
    required: 'no_movie_rate',
  }
})



module.exports = mongoose.model( 'Review', ReviewSchema )
