const router = require('express').Router()
const { authRouter } = require('./authRoutes')
const { movieRouter } = require('./movieRoutes')
const { reviewRouter } = require('./reviewRoutes')



router.use([
  authRouter,
  movieRouter,
  reviewRouter,
])

module.exports = router
