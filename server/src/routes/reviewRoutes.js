const router = require('express').Router()
const GAuthService = require('../services/GAuthService')
const UserService = require('../services/UserService')
const ReviewService = require('../services/ReviewService')



router.get(
  '/api/reviews/own',
  [
    GAuthService.verifyUser,
  ],
  ReviewService.findByUser,
)


router.post(
  '/api/reviews',
  [
    GAuthService.verifyUser,
  ],
  ReviewService.addReview,
)


router.get(
  '/api/reviews/search/:term',
  [
    GAuthService.verifyUser,
  ],
  ReviewService.searchReview,
)



module.exports = {
  reviewRouter: router,
}
