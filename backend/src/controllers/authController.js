import CustomError from '../helpers/customError.js'
import { comparePasswords } from "../helpers/comparePassword.js"
import { createToken } from "../helpers/createToken.js"
import { registerService, userExistsService } from "../services/authServices.js"

export const register = async(req, res, next) => {
  const { body } = req
  
  try {
    console.log(body)
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

    const comparePassword = comparePasswords(body, existingUser)

    if(!comparePassword) {
      return next(new CustomError('Invalid passwords', 404))
    }
    
    const token = await createToken(existingUser)

    const { password, ...user} = existingUser._doc
    
    return res.status(200).json({ status:' ok', user: user, token })   
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

