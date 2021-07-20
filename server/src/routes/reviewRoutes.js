const router = require('express').Router()
const GAuthService = require('../services/GAuthService')
const UserService = require('../services/UserService')
const ReviewService = require('../services/ReviewService')



router.get(
  '/api/reviews',
  [ GAuthService.verifyUser ], ReviewService.findByQuery,
)



module.exports = {
  reviewRouter: router,
}
