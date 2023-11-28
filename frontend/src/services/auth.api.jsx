import axios from '../api/axios.js'

const signUpService = async(user) => {
  const res = await axios
    .post('auth/register', user)
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