const router = require('express').Router()
const STATUS_CODES = require('http-status-codes')
const pick = require('lodash/pick')
const User = require('server/models/user')
const validateMiddleware = require('server/middleware/validate')
const usersValidation = require('server/validations/users.validation')

router.post('/', validateMiddleware(usersValidation.store), async (req, res) => {
  try {
    let attributes = pick(req.body, ['userId', 'name'])
    if (req.body.recieveNotificationsAt) {
      attributes.recieveNotificationsAt = Date.now()
    }

    User.exists({ userId: attributes.userId }).then(async exists => {
      if (exists) {
        return res
          .status(STATUS_CODES.UNPROCESSABLE_ENTITY)
          .send(`User with userId: ${attributes.userId} already exists!`)
      }

      const user = new User(attributes)
      const createdUser = await user.save()
      return res.status(STATUS_CODES.CREATED).send(createdUser)
    })
  } catch (error) {
    console.error('Error saving User: ', error)
  }
})

router.get('/:userid', async (req, res) => {
  try {
    const userId = req.params.userid
    const user = await User.findOne({ userId })

    if (!user) {
      return res.status(STATUS_CODES.NOT_FOUND).send('User not found')
    }

    return res.send(user)
  } catch (error) {
    console.error('Error finding user: ', error)
  }
})

module.exports = router