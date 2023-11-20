import { uploadImage, deleteImage } from '../cloudinary/cloudinary.js'

export const uploadImagesService = async (files) => {
  try {
    const images = await uploadImage(files)
    return images
  } catch (error) {
    console.log(`Could not fetch users ${error}`, error.statusCode)
  }
}

export const deleteImageService = async (id) => {
  console.log(id)
  try {
    const image = await deleteImage(id)
    return image
  } catch (error) {
    console.log(`Could not fetch the user ${error}`, error.statusCode)
  }
}

