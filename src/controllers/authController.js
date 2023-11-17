import { comparePasswordsService, createTokenService, registerService, userExistsService } from "../services/authServices.js"
import CustomError from '../helpers/customError.js'

export const register = async(req, res, next) => {
  const { body } = req

  try {
    const searchedUser = await userExistsService(body)
    
    if(searchedUser) {
      return next(new CustomError('User already exists', 400))
    }

    const newUser = await registerService(body)
    
    if(!newUser) return next(new CustomError('Unexpected error occurred', 500))
    return res.status(201).json({ message: 'Register successfully', newUser })   
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const login = async(req, res, next) => {
  const { body } = req

  try {
    const existingUser = await userExistsService(body)

    if(!existingUser) {
      return next(new CustomError('User not found. Signup please', 404))
    }

    const comparePassword = comparePasswordsService(body, existingUser)

    if(!comparePassword) {
      return next(new CustomError('Invalid passwords', 404))
    }
    
    const token = await createTokenService(existingUser)

    res.cookie( existingUser._id, token, {
      path: '/',
      expires: new Date (Date.now() + 1000 * 30 ),
      httpOnly: true,
      sameSite: 'lax'
    })
    
    return res.status(200).json({ status:' ok', data: existingUser, token })   
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}