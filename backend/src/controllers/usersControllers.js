import CustomError from '../helpers/customError.js'
import { createUserService, deleteUserService, getUserService, getUsersService, updateUserService } from "../services/usersServices.js"
import { createQueryFilter } from "../helpers/createQueryFilter.js"

export const getUsers = async(req, res, next) => {
  try {
    const queryObj = await createQueryFilter(req.query)
    
    const users = await getUsersService(queryObj)
    return res.status(200).json({ status: 'OK', data: users })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const getUser = async(req, res, next) => {
  const { id } =  req.params
  
  try {
    if(!id) { return next(new CustomError("No id found", 404)) }

    const user = await getUserService(id)
    return res.status(200).json({ status: 'OK', data: user })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const createUser = async(req, res, next) => {
  const { body } = req
  console.log(body)
  
  try {
    const user = await createUserService(body.data)
    return res.status(201).json({ status: 'OK', data: user })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const updateUser = async(req, res, next) => {
  const { id } =  req.params
  const { body } = req

  try {
    if(!id) { return next(new CustomError("No id found", 404)) }

    const updatedWorkout = await updateUserService(id, body)

    if(!updatedWorkout) {
      return next(new CustomError('Error updating user', 400))
    }

    return res.status(200).json({ status: 'OK', data: updatedWorkout })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }  
}

export const deleteUser = async(req, res, next) => {
  const { id } =  req.params
  try {
    if(!id) { return next(new CustomError("No id found", 404)) }
    const deletedWorkout = await deleteUserService(id) 

    if(!deletedWorkout) {
      return next(new CustomError('Error deleting user', 400))
    }

    return res.status(200).json({ status: 'OK' })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}
