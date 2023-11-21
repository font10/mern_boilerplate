export const createAdapterSignUp = (user) => {
  const formattedUser = {
    name: user.name,
    email: user.email, 
    password: user.password,
  }

  return formattedUser
}