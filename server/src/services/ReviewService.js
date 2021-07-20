const Review = require('../models/ReviewModel')



exports.findByQuery = async (req, res) => {
  const reviews = await Review.find({})
  res.json(reviews)
}


exports.addReview = async (req, res) => {
  // const newReview = await Review.create({})
  // res.json(newReview)
}
