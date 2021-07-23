require('dotenv').config()
const { connectDB } = require('./dbConnection')

console.log({
  CLIENT_HOST: process.env.CLIENT_HOST,
  SERVER_HOST: process.env.SERVER_HOST,
  SERVER_PORT: process.env.SERVER_PORT,
  CLIENT_PORT: process.env.CLIENT_PORT,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_LOGIN_REDIRECT_ENDPOINT: process.env.GOOGLE_LOGIN_REDIRECT_ENDPOINT,
  DB_URI: process.env.DB_URI,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PW: process.env.MONGO_PW,
  LOCAL_DB_DIR: process.env.LOCAL_DB_DIR,
  TMDB_KEY: process.env.TMDB_KEY,
  SLOPPY_APITOKEN: process.env.SLOPPY_APITOKEN,
})
const app = require('./server')



const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT

connectDB()

app.listen(port, () => {
  console.log(`app listening at ${host}:${port}`)
})
