import jwt from 'jsonwebtoken'
import CustomError from '../helpers/customError.js'

export const verifyToken = async(req, res, next) => {
  //* Check if we have the token
  if(!req.headers.cookie) next(new CustomError('No token', 404))
  try {
    if(req.headers.cookie) {
      const token = req.headers.cookie.split("=")[1]
      console.log(token)
      const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
      console.log(user)
      if(!user) next(new CustomError('Wrong or expired token', 404)) 
      else {
        req.user = user
        next()
      }
    }
  } catch(err) {
    res.clearCookie("token")
  }
}

