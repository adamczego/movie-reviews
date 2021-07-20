const mongoose = require('mongoose')



const ReviewSchema = new mongoose.Schema({
  body: {
    type: String,
    required: 'no_review_body',
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: 'no_author',
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: 'no_created_at',
  },
})



module.exports = mongoose.model( 'Review', ReviewSchema )
