import { httpError } from "../helpers/handleError.js"
import User from '../models/users.js'

export const getItems = async(req, res) => {
  try {
    const newUser = await User.find({})
    return res.status(201).json({ status: 'OK', data: newUser })
  } catch (err) {
    httpError(res, err)
  }
}

export const getItem = (req, res) => {

}

export const createItem = async(req, res) => {
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

export const updateItem = (req, res) => {

}

export const deleteItem = (req, res) => {

}
