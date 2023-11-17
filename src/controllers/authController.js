import CustomError from '../helpers/customError.js'
import { comparePasswords } from "../helpers/comparePassword.js"
import { createToken } from "../helpers/createToken.js"
import { registerService, userExistsService } from "../services/authServices.js"

export const register = async(req, res, next) => {
  const { body } = req
  console.log(body)
  try {
    const searchedUser = await userExistsService(body)
    console.log(searchedUser)
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

    const comparePassword = comparePasswords(body, searchedUser)

    if(!comparePassword) {
      return next(new CustomError('Invalid passwords', 404))
    }
    
    const token = await createToken(searchedUser)
    
    res.cookie("token", token, {
      maxAge: 18000,
      path: '/',
      expires: new Date() + 18000,
      httpOnly: true,
      secure: false,
      sameSite: 'lax'
    })

    const { password, ...user} = searchedUser
    
    return res.status(200).json({ status:' ok', data: user._doc })   
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const setCookie = async(req, res, next) => {
  
}
