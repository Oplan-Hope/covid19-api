const { check } = require('express-validator')

const store = [
  check('userId')
    .notEmpty()
    .isNumeric(),
  check('name')
    .notEmpty()
    .isString(),
  check('latitude').notEmpty(),
  check('longitude').notEmpty()
]

module.exports = {
  store
}
