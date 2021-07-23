const Review = require('../models/ReviewModel')



exports.findByUser = async (req, res, next) => Review
  .find({ author: res.locals.gUser.sub })
  .then((x) => res.json(x) )
  .catch((e) => {
    res.status(404)
    return next(e)
  })


exports.addReview = async (req, res, next) => {
  console.log(req.body.review)
  Review
    .create({
      body: req.body.review.body,
      author: req.body.review.author,
      movie_id: req.body.review.movieId,
      movie_title: req.body.review.title,
      poster_path: req.body.review.poster_path,
    })
    .then((r) => res.json(r))
    .catch((e) => {
      console.log(e)
      res.status(500)
      return next(e)
    })
}



exports.searchReview = async (req, res, next) => Review
  .find({ movie_title: { $regex: `^${req.params.term}`, $options: 'i' } })
  .lean()
  .exec()
  .then((rs) => res.json(rs))
  .catch((e) => {
    res.status(500)
    return next(e)
  })

