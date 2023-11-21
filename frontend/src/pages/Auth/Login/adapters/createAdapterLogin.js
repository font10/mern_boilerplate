export const createAdapterLogin = (data) => {
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