const { check } = require('express-validator')

const store = [
  check('userId')
    .notEmpty()
    .isNumeric(),
  check('name')
    .optional()
    .isString(),
  check('recieveNotificationsAt')
    .optional()
    .isBoolean()
]

const update = []

module.exports = {
  store,
  update
}
