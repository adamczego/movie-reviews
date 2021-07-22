const Review = require('../models/ReviewModel')



exports.findByUser = async (req, res, next) =>  {
  
  console.log('session user:',req.locals.gUser)
  Review
  .find({ author: req.locals.gUser.sub })
  .then((x) => res.json(x) )
  .catch((e) => {
    res.status(404)
    return next(e)
  })

}
exports.getAllReviews = async (req, res, next) =>  {
  
  console.log('all reviews session user:',req.locals)
  Review
  .find({ })
  .then((x) => res.json({results:x}) )
  .catch((e) => {
    res.status(404)
    return next(e)
  })

}



exports.addReview = async (req, res, next) => {

  console.log('save review:', req.body.review)
  // const newReview = new Review({
  //   body: req.body.review.body,
  //   author: req.body.review.author,
  //   movie_id: req.body.review.movieId,
  //   movie_title: req.body.review.movieTitle,
  // })
  //
  // const savedReview = newReview.save()
  // res.json(savedReview)
  //console.log(req.body);
  return Review
    //.create({
    .findOneAndUpdate(
      {
        author: req.body.review.author,
        movie_id: req.body.review.movieID,
      },
      {
        body: req.body.review.body || "",
        author: req.body.review.author,
        rate: req.body.review.rate,
        author_name: req.body.review.author_name,
        poster_path: req.body.review.poster_path,
        movie_id: req.body.review.movieID,
        title: req.body.review.movieTitle,
      },
      {
        new: true,
        upsert: true // Make this update into an upsert
      }
    )
    .then((r) => res.json(r))
    .catch((e) => {
      console.log(e)
      res.status(500)
      return next(e)
    })
}

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
