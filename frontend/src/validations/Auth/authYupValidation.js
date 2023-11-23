import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(4).max(20)
  .required('No password provided.') 
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    "Must Contain min 8 Characters, One Uppercase, One Lowercase and One Number"
  ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required(),
})

const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(4).max(20)
  .required('No password provided.') 
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    "Must Contain min 8 Characters, One Uppercase, One Lowercase and One Number"
  ),
})


export {
  loginSchema,
  signUpSchema
}