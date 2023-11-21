import axios from 'axios'

const signUpService = async(user) => {
  const res = await axios
    .post('http://localhost:5000/api/v1/auth/register', user)
    .catch(err => console.log(err))
    
  return res
}

const loginService = async(user) => {
  const res = await axios
    .post('http://localhost:5000/api/v1/auth/login', user)
    .catch(err => console.log(err))
  console.log(res)
  return res
}

export {
  loginService,
  signUpService
}