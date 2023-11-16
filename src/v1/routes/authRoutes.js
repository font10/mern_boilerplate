import express from 'express'
import { login, register } from '../../controllers/authController.js'
import validation from '../../middlewares/validationMiddleware.js'
import authSchema from '../../validators/authValidation.js'

const authRouter = express.Router()

authRouter.post('/register', validation(authSchema), register)
authRouter.post('/login', login)

export default authRouter