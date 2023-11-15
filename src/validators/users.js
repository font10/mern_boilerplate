import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js'

export const validateCreate = [
  check('name')
    .exists()
    .not()
    .isLength({ min: 5 })
    .isEmpty()
    .trim(),
  check('age')
    .exists()
    .isNumeric()
    .custom((value, { req }) => {
      if(value < 18 || value > 40) {
        throw new Error('Rango edad debe ser entre 18 y 40')
      }
    }),
  check('email')
    .exists()
    .trim()
    .isEmail(),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]