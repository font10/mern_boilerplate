import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../../controllers/usersControllers.js'
import validation from '../../middlewares/validationMiddleware.js'
import userSchema from '../../validators/usersValidation.js'
import { verifyToken } from '../../middlewares/verifyToken.js'

const userRouter = express.Router()

userRouter.get('/', verifyToken, getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', verifyToken, validation(userSchema), createUser)
userRouter.patch('/:id', verifyToken, validation(userSchema), updateUser)
userRouter.delete('/:id', verifyToken, deleteUser)

export default userRouter