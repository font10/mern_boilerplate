import User from '../models/usersModel.js'
import { updateUserService } from "../services/usersServices.js"
import CustomError from '../helpers/customError.js'

export const getUsers = async(req, res) => {
  try {
    const newUser = await User.find({})
    return res.status(201).json({ status: 'OK', data: newUser })
  } catch (err) {
    httpError(res, err)
  }
}

export const getUser = (req, res) => {

}

export const createUser = async(req, res, next) => {
  try {
    const newUser = new User(req.body)
    const userAdded = await newUser.save();

    if(!userAdded) {
      return next(new CustomError('Error creating user', 400))
    }    
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
  return res.status(201).json({ status: 'OK', data: userAdded })
}

export const updateUser = async(req, res) => {
  try {
    const { id } =  req.params
    const { body } = req

    if(!id) { return next(new CustomError("No id found", 404)) }

    const updatedWorkout = await updateUserService(id, body)

    if(!updatedWorkout) {
      return next(new CustomError('Error updating user', 400))
    }
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }  
  res.status(200).json({ status: 'OK', message: 'Workout updated', data: updatedWorkout })
}

export const deleteUser = (req, res) => {

}
