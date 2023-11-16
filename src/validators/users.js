import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js'

export const validateCreate = [
  check('name')
    .exists()
    .notEmpty()
    .isString()
    .trim()
    .isLength({ min: 5 }),
  check('age')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('email')
    .exists()
    .notEmpty()
    .isString()
    .trim()
    .isEmail(),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export const validateUpdate = [
  check('name')
    .exists()
    .notEmpty()
    .isString()
    .trim()
    .isLength({ min: 5 }),
  check('age')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('email')
    .exists()
    .notEmpty()
    .isString()
    .trim()
    .isEmail(),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]
