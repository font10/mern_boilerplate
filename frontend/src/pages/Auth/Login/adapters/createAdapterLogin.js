export const createAdapterLogin = (data) => {
  if (!data) return null
  
  const formattedUser = {
    token: data?.token,
    user: {
      id: data?.user?._id,
      name: data?.user?.name,
      email: data?.user?.email, 
    }
  }
  
  return formattedUser
}