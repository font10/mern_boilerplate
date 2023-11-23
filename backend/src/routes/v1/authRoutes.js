import express from 'express'
import { login, register } from '../../controllers/authController.js'
import { loginSchema, registerSchema } from '../../validators/authValidation.js'
import validation from '../../middlewares/validationMiddleware.js'
import { verifyToken } from '../../middlewares/verifyToken.js'

const authRouter = express.Router()

authRouter.post('/register', validation(registerSchema), register)
authRouter.post('/login', validation(loginSchema), login)

export default authRouter