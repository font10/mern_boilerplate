import axios from '../api/axios.js'

const signUpService = async(user) => {
  const res = await axios
    .post('http://localhost:5000/api/v1/auth/register', user)
    .catch(err => console.log(err))
    
  return res
}

const loginService = async(email, password) => {
  const { data } = await axios
    .post('/auth/login', { email, password })
    .catch(err => console.log(err))

  return data
}

const addPalaService = async(data, token) => {
  const res = await axios.post('http://localhost:5000/api/v1/palas', data, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }})
  console.log(res)
}

const getPalasService = async() => {
  const { data } = await axios.get('/palas')
  return data.data 
}

export {
  addPalaService,
  getPalasService,
  loginService,
  signUpService
}