import express from 'express'
import { getItems, getItem, createItem, updateItem, deleteItem } from '../../controllers/users.js'
import { checkOrigin } from '../../middlewares/origin.js'
import { validateCreate } from '../../validators/users.js'

const userRouter = express.Router()

userRouter.get('/', getItems)
userRouter.get('/:id', getItem)
userRouter.post('/', checkOrigin, validateCreate, createItem)
userRouter.patch('/:id', checkOrigin, validateCreate, updateItem)
userRouter.delete('/:id', checkOrigin, deleteItem)

export default userRouter