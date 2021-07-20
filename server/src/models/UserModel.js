const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema({
  g_id: {
    type: String,
    required: 'no_g_id',
  },
  refresh_token: {
    type: String,
    required: true,
  },
})



module.exports = mongoose.model('User', UserSchema)
