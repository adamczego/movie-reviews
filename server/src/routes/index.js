const router = require('express').Router()
const { authRouter } = require('./authRoutes')
const { movieRouter } = require('./MovieRoutes')



router.use([ authRouter, movieRouter ])

module.exports = router
