const router = require('express').Router()
const { authRouter } = require('./authRoutes')



router.use(authRouter)

module.exports = router
