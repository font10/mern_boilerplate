
export const registerService = async(payload) => {
  try {
    const obj = { status: 'OK', data: payload }
    return obj;
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
