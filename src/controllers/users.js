import { httpError } from "../helpers/handleError.js"
import User from '../models/users.js'

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

export const createUser = async(req, res) => {
  try {
    const newUser = new User(req.body)

    const userAdded = await newUser.save();

    if(!userAdded) {
      return res.status(400).json({ message: 'Error creating blog' })
    }
    
    return res.status(201).json({ status: 'OK', data: userAdded })
  } catch (err) {
    httpError(res, err)
  }
}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}
