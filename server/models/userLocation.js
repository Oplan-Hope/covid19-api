const { model, Schema } = require('mongoose')

const UserLocation = model(
  'UserLocation',
  new Schema(
    {
      userId: {
        type: Number,
        required: true,
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
)

module.exports = UserLocation
