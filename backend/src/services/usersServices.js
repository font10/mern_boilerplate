import User from '../models/usersModel.js'

export const getUsersService = async (queryObj) => {
  try {
    if(queryObj.age) return await User.find(queryObj)
    return await User.find().skip(queryObj.skip).limit(queryObj.limit)
  } catch (error) {
    console.log(`Could not fetch users ${error}`, error.statusCode)
  }
}

export const getUserService = async (id) => {
  try {
    const users = await User.findById(id)
    return users
  } catch (error) {
    console.log(`Could not fetch the user ${error}`, error.statusCode)
  }
}

export const createUserService = async (payload) => {
  try {
    const newUser = new User(payload)
    console.log(newUser)
    const user = await newUser.save();
    console.log(1)
    return user;
  } catch(error) {
    console.log(`Could not create a user ${error}`, error.statusCode)
  }
}

export const updateUserService = async (id, payload) => {
  try {
    const workout = await User.findByIdAndUpdate( { _id: id }, payload )
    return workout;
  } catch(error) {
    console.log(`Could not update a user ${error}`, error.statusCode)
  }
}

export const deleteUserService = async (id, payload) => {
  try {
    const workout = await User.findByIdAndDelete(id)
    return workout;
  } catch(error) {
    console.log(`Could not delete a user ${error}`, error.statusCode)
  }
}
