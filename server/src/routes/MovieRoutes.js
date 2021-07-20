const router = require('express').Router()
const MovieService = require('../services/MovieService')



router.get('/api/movies/top_rated', MovieService.getTopRated)



module.exports = {
  movieRouter: router,
}
