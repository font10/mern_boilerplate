import { loginService, registerService, userExistsService } from "../services/authServices.js"
import CustomError from '../helpers/customError.js'

export const register = async(req, res, next) => {
  const { body } = req

  try {
    const searchedUser = await userExistsService(body)
    
    if(searchedUser.length > 0) {
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
    const login = await loginService(body)
    res.status(200).send(login)    
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}