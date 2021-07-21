const router = require('express').Router()
const MovieService = require('../services/MovieService')



router.get(
  '/api/movies/top_rated',
  MovieService.getTopRated,
)

router.get(
  '/api/movies/now_playing',
  MovieService.getNowPlaying,
)

router.get(
  '/api/movies/search/title/:val',
  MovieService.searchMoviesByTitle,
)

router.get(
  '/api/movies/movie/details/:val',
  MovieService.getMovieDetails,
)

router.get(
  '/api/movies/search/collections/:val',
  MovieService.searchCollections,
)

router.get(
  '/api/movies/collection/:val',
  MovieService.getCollection,
)



module.exports = {
  movieRouter: router,
}
