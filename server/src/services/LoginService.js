const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')


exports.exists = async (req, res, next) => {
  res.locals.user = await User.findOne({ g_id: res.locals.gUser.sub })

  next()
}

exports.create = async (req, res, next) => {
  if ( !res.locals.user ) {
    res.locals.user = await User.create({
      g_id: res.locals.gUser.sub,
      refresh_token: res.locals.rt,
    })
  }
  next()
}

exports.login = (req, res, next) => {
  res.cookie('idt', jwt.sign(res.locals.gUser, process.env.TOKEN_SECRET), {
    secure: false,
  })

  res.cookie('at', res.locals.at, {
    httpOnly: true,
    secure: true,
  })

  res.cookie('rt', res.locals.rt, {
    httpOnly: true,
    secure: true,
  })

  res.redirect(`${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}/`)
}
