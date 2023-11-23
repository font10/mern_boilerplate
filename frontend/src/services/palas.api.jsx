import axios from '../api/axios.js'
import { getPalasAdapter } from '../pages/Dashboard/adapters/getPalasAdapter.jsx'

const getPalasService = async() => {
  try {
    const response = await axios.get('/palas')
    return getPalasAdapter(response?.data?.data)
  } catch (error) {
    return error.message
  }
}

const addPalaService = async(newPala, token) => {
  try {
    const response = await axios.post('/palas', newPala,{ headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }} )
    return response?.data.data
  } catch (error) {
    return error
  }
}

const editPalaService = async(id, updPala, token) => {
  try {
    const response = await axios.patch(`/palas/${id}`, updPala, { headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }})
    return response?.data.data    
  } catch (error) {
    return error.message
  }
}

const deletePalaService = async(id, token) => {
  try {
    const response = await axios.delete(`/palas/${id}`, { headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }})
    return response?.data
  } catch (error) {
    return error.message
  }
}

export {
  addPalaService,
  editPalaService,
  deletePalaService,
  getPalasService,
}