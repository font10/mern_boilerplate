import Yup from 'yup'

export const registerSchema = Yup.object({
  name: Yup.string().min(6).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
  .required('No password provided.') 
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
  )
})

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
  .required('No password provided.') 
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
  )
})
