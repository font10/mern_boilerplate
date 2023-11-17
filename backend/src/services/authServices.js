import User from '../models/usersModel.js'
import bcrypt from 'bcryptjs'

export const registerService = async(payload) => {
  try {    
    const hashedPass = bcrypt.hashSync(payload.password)

    const bodyNewUser = {
      name: payload.name,
      email: payload.email,
      password: hashedPass
    }

    const newUser = new User(bodyNewUser)
    await newUser.save()

    return newUser
  } catch(error) {
    console.log(`Could not register a user ${error}`, error.statusCode)
  }
}

export const userExistsService = async(payload) => {
  try {
    const user = await User.find({ email: payload.email })
    return user[0];
  } catch(error) {
    console.log(`Could not found the user ${error}`, error.statusCode)
  }
}
