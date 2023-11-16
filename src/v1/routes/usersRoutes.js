import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../../controllers/usersControllers.js'
import { checkOrigin } from '../../middlewares/origin.js'
import validation from '../../middlewares/validationMiddleware.js'
import userSchema from '../../validators/usersValidation.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', checkOrigin, validation(userSchema), createUser)
userRouter.patch('/:id', checkOrigin, validation(userSchema), updateUser)
userRouter.delete('/:id', checkOrigin, deleteUser)

export default userRouter