export const createAdapterSignUp = (user) => {
  if (!user) return null
  
  const formattedUser = {
    name: user.name,
    email: user.email, 
    password: user.password,
  }

  return formattedUser
}