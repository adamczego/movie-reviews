const Review = require('../models/ReviewModel')



exports.findByUser = async (req, res, next) => Review
  .find({ author: res.locals.gUser.sub })
  .then((x) => res.json(x) )
  .catch((e) => {
    res.status(404)
    return next(e)
  })


exports.addReview = async (req, res, next) => Review
  .create({
    body: req.body.review.body,
    author: req.body.review.author,
    movie_id: req.body.review.movieId,
  })
  .then((r) => res.json(r))
  .catch((e) => {
    res.status(500)
    return next(e)
  })

exports.searchReview = async (req, res, next) => {
  // todo:
  //  filter by movie title if no "by" param
  //  filter by "by" param if exists
  //    if "by" === user => reviews where g_id === term

  Review
    .find({ [req.query.by]: req.params.term })
    .lean()
    .exec()
    .catch((e) => {
      res.status(500)
      return next(e)
    })

  return res.json({ msg: 'not implemented yet' })
}
