import express from 'express'
import { upload } from '../../middlewares/upload.js'
import { verifyToken } from '../../middlewares/verifyToken.js'
import { deleteImageById, uploadImages } from '../../controllers/filesController.js'

const filesRouter = express.Router()

filesRouter.post('/uploadImages', verifyToken, upload.array('images'), uploadImages)
filesRouter.delete('/delete/:id', verifyToken, deleteImageById)

export default filesRouter