const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    latitude: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    longitude: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

const UserLocation = mongoose.model('UserLocation', schema)

module.exports = {
  UserLocation
}
