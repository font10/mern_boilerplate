import bcrypt from 'bcryptjs'

export async function comparePasswords(payload, user) {
    try {
      const comparePassword = bcrypt.compareSync(payload.password, user.password)
      return comparePassword;
    } catch(error) {
      console.log(`Error comparing passwords ${error}`, error.statusCode)
    }
  }