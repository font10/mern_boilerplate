import users from "../models/usersModel.js";

export const updateUserService = async (workoutId, payload) => {
  try {
    const workout = await users.findByIdAndUpdate({ _id: workoutId }, payload )
    return workout;
  } catch(err) {
    console.log(`Could not update trip ${error}` );
  }
}
