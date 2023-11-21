import CustomError from '../helpers/customError.js'
import { createPalaService, deletePalaService, getPalaService, getPalasService, updatePalaService } from "../services/palasServices.js"

export const getPalas = async(req, res, next) => {
  try {    
    const palas = await getPalasService()
    return res.status(200).json({ status: 'OK', data: palas })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const getPala = async(req, res, next) => {
  const { id } =  req.params
  
  try {
    if(!id) { return next(new CustomError("No id found", 404)) }

    const pala = await getPalaService(id)
    return res.status(200).json({ status: 'OK', data: pala })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const createPala = async(req, res, next) => {
  const { body } = req
  
  try {
    const pala = await createPalaService(body)
    return res.status(201).json({ status: 'OK', data: pala })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }
}

export const updatePala = async(req, res, next) => {
  const { id } =  req.params
  const { body } = req

  try {
    if(!id) { return next(new CustomError("No id found", 404)) }

    const updatedPala = await updatePalaService(id, body)

    if(!updatedPala) {
      return next(new CustomError('Error updating the pala', 400))
    }

    return res.status(200).json({ status: 'OK', data: updatedPala })
  } catch (err) {
    next(new CustomError(err.message, err.statusCode))
  }  
}

export const deletePala = async(req, res, next) => {
  const { id } =  req.params
  try {
    if(!id) { return next(new CustomError("No id found", 404)) }
    const deletedPala = await deletePalaService(id) 

    if(!deletedPala) {
      return next(new CustomError('Error deleting pala', 400))
    }

    return res.status(200).json({ status: 'OK' })
  } catch (err) {
    
    next(new CustomError(err.message, err.statusCode))
  }
}
