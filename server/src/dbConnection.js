const mongoose = require('mongoose')

 

const conString = process.env.DB_URI
const user = process.env.MONGO_USER
const pass = process.env.MONGO_PW


const connectDB = () => {
  mongoose.connect(
    conString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
     // user,
     // pass,
    },
  )
}


const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('connected', () => console.log('Connected to Database'))


module.exports = {
  connectDB,
}
