const { MovieDb } = require('moviedb-promise')



const mdb = new MovieDb(process.env.TMDB_KEY)


exports.getTopRated = async (req, res, next) => mdb
  .movieTopRated()
  .then((ms) => res.json(ms))
  .catch((e) => {
    res.status(404)
    return next(e)
  })


exports.getNowPlaying = async (req, res, next) => mdb
  .movieNowPlaying()
  .then((ms) => res.json(ms))
  .catch((e) => {
    res.status(404)
    return next(e)
  })


exports.searchMoviesByTitle = async (req, res, next) => mdb
  .searchMovie({ query: req.params.val, page: req.query.p })
  .then((ms) => res.json(ms))
  .catch((e) => {
    res.status(404)
    return next(e)
  })


exports.getMovieDetails = async (req, res, next) => mdb
  .movieInfo(req.params.val)
  .then((m) => res.json(m))
  .catch((e) => {
    res.status(404)
    return next(e)
  })


exports.searchCollections = async (req, res, next) => mdb
  .searchCollection({ query: req.params.val, page: req.query.p })
  .then((ms) => res.json(ms))
  .catch((e) => {
    res.status(404)
    return next(e)
  })


exports.getCollection = async (req, res, next) => mdb
  .collectionInfo(req.params.val)
  .then((m) => res.json(m))
  .catch((e) => {
    res.status(404)
    return next(e)
  })
