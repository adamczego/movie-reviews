const router = require('express').Router()
const LoginService = require('../services/LoginService')
const GAuthService = require('../services/GAuthService')
const UserService = require('../services/UserService')



router.get('/api/auth/g_login',
  [
    GAuthService.getGUser,
    LoginService.exists,
    LoginService.create,
  ],
  LoginService.login)


router.get(`/api/auth/g_login_link`, GAuthService.getGLoginLink)



module.exports = {
  authRouter: router,
}
