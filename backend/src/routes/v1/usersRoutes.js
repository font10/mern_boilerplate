import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../../controllers/usersControllers.js'
import validation from '../../middlewares/validationMiddleware.js'
import userSchema from '../../validators/usersValidation.js'
import { verifyToken } from '../../middlewares/verifyToken.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', verifyToken, getUser)
userRouter.post('/', validation(userSchema), createUser)
userRouter.patch('/:id', verifyToken, validation(userSchema), updateUser)
userRouter.delete('/:id', verifyToken, deleteUser)

export default userRouter