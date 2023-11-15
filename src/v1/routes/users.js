import express from 'express'
import { getItems, getItem, createItem, updateItem, deleteItem } from '../../controllers/users.js'

const userRouter = express.Router()

userRouter.get('/', getItems)
userRouter.get('/:id', getItem)
userRouter.post('/', createItem)
userRouter.patch('/:id', updateItem)
userRouter.delete('/:id', deleteItem)

export default userRouter