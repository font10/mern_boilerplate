import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../../controllers/usersControllers.js'
import validation from '../../middlewares/validationMiddleware.js'
import userSchema from '../../validators/usersValidation.js'
import palaSchema from '../../validators/palasValidation.js'
import { verifyToken } from '../../middlewares/verifyToken.js'
import { createPala, deletePala, getPala, getPalas, updatePala } from '../../controllers/palasController.js'

const palasRouter = express.Router()

palasRouter.get('/', getPalas)
palasRouter.get('/:id', getPala)
palasRouter.post('/', verifyToken, validation(palaSchema), createPala)
palasRouter.patch('/:id', verifyToken, validation(palaSchema), updatePala)
palasRouter.delete('/:id', verifyToken, deletePala)

export default palasRouter