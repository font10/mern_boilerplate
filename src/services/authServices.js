import User from '../models/usersModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const comparePasswordsService = async(payload, user) => {
  try {
    const comparePassword = bcrypt.compareSync(payload.password, user.password)
    return comparePassword;
  } catch(error) {
    console.log(`Error comparing passwords ${error}`, error.statusCode)
  }
}

export const createTokenService = async(user) => {
  try {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5hr"
    })

    return token;
  } catch(error) {
    console.log(`Error creating token ${error}`, error.statusCode)
  }
}
