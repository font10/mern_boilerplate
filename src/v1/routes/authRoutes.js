import express from 'express'
import { login, register } from '../../controllers/authController.js'
import validation from '../../middlewares/validationMiddleware.js'
import { loginSchema, registerSchema } from '../../validators/authValidation.js'

const authRouter = express.Router()

authRouter.post('/register', validation(registerSchema), register)
authRouter.post('/login', validation(loginSchema), login)

export default authRouter