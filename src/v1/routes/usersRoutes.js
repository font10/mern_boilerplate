import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../../controllers/usersControllers.js'
import { checkOrigin } from '../../middlewares/origin.js'
import { validateCreate, validateUpdate } from '../../validators/users.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', checkOrigin, validateCreate, createUser)
userRouter.patch('/:id', checkOrigin, validateUpdate, updateUser)
userRouter.delete('/:id', checkOrigin, deleteUser)

export default userRouter