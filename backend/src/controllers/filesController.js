
import CustomError from '../helpers/customError.js'
import { uploadImagesService } from '../services/filesServices.js'

export const uploadImages = async(req, res, next) => {
  const { files } = req
  try {
    const images = await uploadImagesService(files)
    return res.status(200).json({ message: 'Images uploaded successfully', images: images })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const deleteImageById = async(req, res, next) => {
  const { id } =  req.params
  
  try {
    if(!id) { return next(new CustomError("No id found", 404)) }

    const user = await uploadImagesService(id)
    return res.status(200).json({ status: 'OK', data: user })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

