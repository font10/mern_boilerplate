import User from '../models/usersModel.js'

export const registerService = async(payload) => {
  try {
    const bodyNewUser = {
      name: payload.name,
      email: payload.email,
      password: payload.password
    }
 
    const newUser = new User(bodyNewUser)
    await newUser.save()

    return newUser
  } catch(error) {
    console.log(`Could not create a user ${error}`, error.statusCode)
  }
}

export const loginService = async(payload) => {
  try {
    const obj = { status: 'OK', data: payload }
    return obj;
  } catch(error) {
    console.log(`Could not create a user ${error}`, error.statusCode)
  }
}

export const userExistsService = async(payload) => {
  try {
    const user = await User.find({ email: payload.email })
    return user;
  } catch(error) {
    console.log(`Could not found the user ${error}`, error.statusCode)
  }
}