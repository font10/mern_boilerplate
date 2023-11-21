export const createAdapterLogin = (user) => {
  const formattedUser = {
    email: user.email, 
    password: user.password,
  }

  return formattedUser
}