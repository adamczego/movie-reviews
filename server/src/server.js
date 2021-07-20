require('dotenv').config({ path: './.env' })
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const { connectDB } = require('./dbConnection')
const router = require('./routes/index')



const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT
const clientHost = process.env.CLIENT_HOST
const clientPort = process.env.CLIENT_PORT

connectDB()

const app = express()

app.use(cors({
  origin: `${clientHost}:${clientPort}`,
  credentials: true,
}))
app.use(cookieParser())
app.use(express.json())


app.use(router)



app.listen(port, () => {
  console.log(`app listening at ${host}:${port}`)
})



