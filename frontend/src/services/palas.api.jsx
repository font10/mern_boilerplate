import axios from '../api/axios.js'

/*const getPalasService = async() => {
  const { data } = await axios.get('/palas')
  return data 
}

const addPalaService = async(pala, token) => {
  const { data } = await axios.post('/palas', pala, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }})
  
  return data 
}*/

const getPalasService = async() => {
  try {
    const response = await axios.get('/palas')
    return response?.data.data
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

const editPalaService = async(id, updPala) => {
  try {
    const response = await axios.patch(`/palas/${id}`, updPala)
    return response?.data.data    
  } catch (error) {
    return error.message
  }
}

const deletePalaService = async(id) => {
  try {
    const response = await axios.delete(`/palas/${id}`)
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