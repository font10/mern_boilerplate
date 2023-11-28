import axios from '../api/axios.js'

const signUpService = async(user) => {
  try {
    const res = await axios
    .post('auth/register', user)
    .catch(err => console.log(err))
    
    return res
  } catch (error) {
    return error.message
  }
  
}

const loginService = async(email, password) => {
  try {
    const { data } = await axios
    .post('/auth/login', { email, password })
    .catch(err => console.log(err))

    return data
  } catch (error) {
    return error.message
  }
}

export {
  loginService,
  signUpService
}