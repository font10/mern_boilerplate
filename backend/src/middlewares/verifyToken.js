import jwt from 'jsonwebtoken'
import CustomError from '../helpers/customError.js'

export const verifyToken = async(req, res, next) => {
  //? Check if we have the token
  if(!req.headers.authorization) return res.status(403).json({msg: "Not authorized. No token"})

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
    //? Separate the token from Bearer
    const token = req.headers.authorization.split(" ")[1]
    //? Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
        if(err) return res.status(403).json({msg: "Wrong or expired token!!!!"})
        else {
          //? Object with the user info
          req.user = data
          next()
        }
    })
  }
}