import axios from '../api/axios.js'

const addPalaService = async(data, token) => {
  const res = await axios.post('http://localhost:5000/api/v1/palas', data, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }})
  console.log(res)
}

export {
  addPalaService,
}