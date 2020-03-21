const mongoose = require('mongoose')

var UserLocation = mongoose.model('UserLocation', {
  userId:{ 
    type: String,
    required:true,
    minlength :1,
    trim:true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  latitude:{ 
    type: String,
    required:true,
    minlength :1,
    trim:true
  },
  longitude:{ 
    type: String,
    required: true,
    minlength :1,
    trim:true
  },
})


module.exports = { 
  UserLocation
}

