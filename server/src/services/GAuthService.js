const { google } = require('googleapis')
const jwt = require('jsonwebtoken')



const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.CLIENT_HOST}:${process.env.SERVER_PORT}${process.env.GOOGLE_LOGIN_REDIRECT_ENDPOINT}`,
)

const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
]


exports.getGLoginLink = (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  })
  res.json({ gLoginLink: url })
}


exports.getGUser = async (req, res, next) => {
  const { tokens } = await oauth2Client.getToken(req.query.code)
  oauth2Client.setCredentials(tokens)

  const ticket = await oauth2Client.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.GOOGLE_CLIENT_ID,
  })

  res.locals.idt = tokens.id_token
  res.locals.at = tokens.access_token
  res.locals.rt = tokens.refresh_token
  res.locals.gUser = ticket.getPayload()

  next()
}


exports.verifyUser = async (req, res, next) => {
  const { idt } = req.cookies

  if ( idt === '' || idt === null || idt === undefined ) {
    return res.status(401).json({ msg: 'auth failed' })
  }


  let ticket

  try {
    ticket = await oauth2Client.verifyIdToken({
      idToken: jwt.verify(idt, process.env.TOKEN_SECRET),
      audience: '521887639788-hmnkmu73g67a182ml37hj5v1msm6jfm0.apps.googleusercontent.com',
    })
  } catch (e) {
    return res.status(401).json({ msg: 'auth failed' })
  }

  res.locals.id_token = oauth2Client.credentials.id_token
  res.locals.gUser = ticket.getPayload()
  res.locals.access_token = oauth2Client.credentials.access_token
  res.locals.refresh_token = oauth2Client.credentials.refresh_token

  return next()
}
