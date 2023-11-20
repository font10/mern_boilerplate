import User from '../models/usersModel.js'
import { uploadImage, deleteImage } from '../cloudinary/cloudinary.js'

export const uploadImagesService = async (files) => {
  try {
    console.log(files)
    const images = await uploadImage(files)
    console.log(images)
    return images
  } catch (error) {
    console.log(`Could not fetch users ${error}`, error.statusCode)
  }
}

export const getUserService = async (id) => {
  try {
    const users = await User.findById(id)
    return users
  } catch (error) {
    console.log(`Could not fetch the user ${error}`, error.statusCode)
  }
}

