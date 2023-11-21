import User from '../models/usersModel.js'
import Pala from '../models/palasModel.js'

export const getPalasService = async () => {
  try {
    const palas = await Pala.find({})
    return palas
  } catch (error) {
    console.log(`Could not fetch palas ${error}`, error.statusCode)
  }
}

export const getPalaService = async (id) => {
  try {
    const pala = await Pala.findById(id)
    return pala
  } catch (error) {
    console.log(`Could not fetch the pala ${error}`, error.statusCode)
  }
}

export const createPalaService = async (payload) => {
  try {
    const newPala = new Pala(payload)
    const user = await newPala.save();

    return user;
  } catch(error) {
    console.log(`Could not create a new pala ${error}`, error.statusCode)
  }
}

export const updatePalaService = async (id, payload) => {
  try {
    const pala = await Pala.findByIdAndUpdate( { _id: id }, payload )
    return pala;
  } catch(error) {
    console.log(`Could not update the pala ${error}`, error.statusCode)
  }
}

export const deletePalaService = async (id, payload, next) => {
  try {
    const pala = await Pala.findByIdAndDelete(id)
    return pala;
  } catch(err) {
    next(new CustomError(err.message, err.statusCode))
    //console.log(`Could not delete the pala ${error}`, error.statusCode)
  }
}
