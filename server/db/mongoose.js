require('dotenv').config({ path: '../../.env'})

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect( process.env.MONGODB_URL, { useNewUrlParser: true,  useUnifiedTopology: true })

module.exports = { 
  mongoose
}

