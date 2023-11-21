import axios from '../api/auth.js'

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

export {
  loginService,
  signUpService
}