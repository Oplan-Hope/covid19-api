const { model, Schema } = require('mongoose')

const User = model(
  'User',
  new Schema(
    {
      userId: {
        type: Number,
        required: true,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },
      recieveNotificationsAt: {
        type: Date,
        default: null
      }
    },
    {
      timestamps: true
    }
  )
)

module.exports = User
