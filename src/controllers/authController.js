import { loginService, registerService } from "../services/authServices.js"

export const register = async(req, res, next) => {
  const { body } = req

  try {
    const register = await registerService(body)
    res.status(200).send(register)    
  } catch (error) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const login = async(req, res, next) => {
  const { body } = req

  try {
    const login = await loginService(body)
    res.status(200).send(login)    
  } catch (error) {
    next(new CustomError(err.message, err.statusCode))
  }
}